import { normalize } from 'normalizr';
import * as api from './api';
import * as schema from './schema';

export const INVALIDATE_TUMBLR = 'INVALIDATE_TUMBLR';
export const SELECT_TUMBLR = 'SELECT_TUMBLR';
export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const REQUEST_BLOG = 'REQUEST_BLOG';
export const RECEIVE_BLOG = 'RECEIVE_BLOG';

export const invalidateTumblr = (tumblr) => ({
  type: INVALIDATE_TUMBLR,
  tumblr
});

export const requestPosts = (tumblr) => ({
  type: REQUEST_POSTS,
  tumblr
});

export const receivePosts = (tumblr, items) => ({
  type: RECEIVE_POSTS,
  tumblr,
  items,
  receivedAt: Date.now()
});

const receiveBlog = (blog) => ({
  type: RECEIVE_BLOG,
  blog,
});

const fetchPosts = (tumblr, offset = 0) => (dispatch, getState) => {
  const stateBlog = getState().postsByTumblr.blog;

  dispatch(requestPosts(tumblr));

  api.fetchData({
    type: tumblr,
    offset
  })
    .then(data => {
      dispatch(receivePosts(tumblr, normalize(data.response.posts, schema.arrayOfPosts)));
      if (Object.keys(stateBlog).length === 3) {
        dispatch(receiveBlog(data.response.blog));
      }
    })
    .catch(error => {
      console.error(error);
    });
};

const shouldFetchPosts = (state, tumblr = 'all') => {
  const posts = state.postsByTumblr[tumblr];

  if (!posts) {
    return true;
  }

  if (posts.isFetching) {
    return false;
  }

  return posts.didInvalidate;
};

export const fetchPostsIfNeeded = (tumblr) => (dispatch, getState) => {
  if (shouldFetchPosts(getState(), tumblr)) {
    return dispatch(fetchPosts(tumblr));
  }
};
