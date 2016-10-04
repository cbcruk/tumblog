import { combineReducers } from 'redux';
import {
  INVALIDATE_TUMBLR,
  SELECT_TUMBLR,
  RECEIVE_POSTS,
  REQUEST_POSTS,
  RECEIVE_BLOG,
} from './actions';

const selectedTumblr = (state = 'all', action) => {
  switch (action.type) {
    case SELECT_TUMBLR:
      return action.tumblr;
    default:
      return state;
  }
};

const posts = (state = {
  isFetching: false,
  didInvalidate: false,
  items: []
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
      return state
  }
};

const postsByTumblr = (state = {
  blog: {
    title: 'Cherry Orchard',
    description: '은수리의 기묘한 모험',
  }
}, action) => {
  switch (action.type) {
    case INVALIDATE_TUMBLR:
    case RECEIVE_POSTS:
    case REQUEST_POSTS:
      return {
        ...state,
        [action.tumblr]: posts(state[action.tumblr], action)
      };
    case RECEIVE_BLOG:
      return {
        ...state,
        blog: action.blog
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  postsByTumblr,
  selectedTumblr,
});

export default rootReducer;
