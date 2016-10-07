import { normalize } from 'normalizr';
import * as api from './api';
import * as schema from './schema';

export const INVALIDATE_TUMBLR = 'INVALIDATE_TUMBLR';
export const SELECT_TUMBLR = 'SELECT_TUMBLR';
export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const REQUEST_BLOG = 'REQUEST_BLOG';
export const RECEIVE_BLOG = 'RECEIVE_BLOG';
export const RECEIVE_TOTAL = 'RECEIVE_TOTAL';
export const FETCH_PAGE_COUNT = 'FETCH_PAGE_COUNT';

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

const receiveTotal = (total) => ({
  type: RECEIVE_TOTAL,
  total,
});

export const fetchPageCount = (current) => ({
  type: FETCH_PAGE_COUNT,
  current
});

export const fetchPosts = (tumblr, offset = 0) => (dispatch, getState) => {
  const stateBlog = getState().postsByTumblr.blog;

  dispatch(requestPosts(tumblr));

  api.fetchData({
    type: tumblr,
    offset
  })
    .then(data => {
      const { posts, total_posts, blog } = data.response;

      dispatch(receivePosts(tumblr, normalize(posts, schema.arrayOfPosts)));
      dispatch(receiveTotal(total_posts));

      if (Object.keys(stateBlog).length === 3) {
        dispatch(receiveBlog(blog));
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
