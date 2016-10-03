import { combineReducers } from 'redux';
import {
  RECEIVE_POSTS,
  RECEIVE_BLOG,
} from './actions';

const blog = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_BLOG:
      return action.response;
    default:
      return state;
  }
};

const posts = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_POSTS:
      return action.response;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  blog,
  posts,
});

export default rootReducer;
