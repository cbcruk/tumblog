import { combineReducers } from 'redux';
import {
  INVALIDATE_TUMBLR,
  RECEIVE_POSTS,
  REQUEST_POSTS,
  RECEIVE_BLOG,
  RECEIVE_TOTAL,
  FETCH_PAGE_COUNT,
} from './actions';

const posts = (state = {
  isFetching: false,
  didInvalidate: false,
  items: {
    entities: {},
    result: []
  }
}, action) => {
  switch (action.type) {
    case INVALIDATE_TUMBLR:
      return {
        ...state,
        didInvalidate: true
      };
    case REQUEST_POSTS:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false
      };
    case RECEIVE_POSTS:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        items: action.items,
        lastUpdated: action.receivedAt
      };
    default:
      return state;
  }
};

const getInitialState = {
  blog: {
    title: '',
    description: '',
    updated: 0
  },
  total: 0
};

const postsByTumblr = (state = getInitialState, action) => {
  switch (action.type) {
    case INVALIDATE_TUMBLR:
    case RECEIVE_POSTS:
    case REQUEST_POSTS:
      return {
        ...state,
        [action.tumblr || 'all']: posts(state[action.tumblr], action)
      };
    case RECEIVE_BLOG:
      return {
        ...state,
        blog: action.blog
      };
    case RECEIVE_TOTAL:
      return {
        ...state,
        total: action.total
      };
    default:
      return state;
  }
};

const pageCount = (state = 0, action) => {
  switch (action.type) {
    case FETCH_PAGE_COUNT:
      return action.current;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  postsByTumblr,
  pageCount
});

export default rootReducer;
