import { ajax } from 'jquery';
import { API_URL, API_KEY } from './constant';

export const INVALIDATE_TUMBLR = 'INVALIDATE_TUMBLR';
export const SELECT_TUMBLR = 'SELECT_TUMBLR';
export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const REQUEST_BLOG = 'REQUEST_BLOG';
export const RECEIVE_BLOG = 'RECEIVE_BLOG';

export const selectTumblr = (tumblr) => ({
  type: SELECT_TUMBLR,
  tumblr
});

export const invalidateReddit = (tumblr) => ({
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

const fetchPosts = (tumblr) => (dispatch) => {
  const param = {
    api_key: API_KEY,
    offset: 0,
    limit: 3,
  };

  dispatch(requestPosts(tumblr));

  return ajax({
    type: 'GET',
    url: API_URL,
    dataType: 'jsonp',
    data: tumblr !== 'all' ? { ...param, type: tumblr } : param,
    cache: false
  })
    .then(data => {
      dispatch(receivePosts(tumblr, data.response.posts));
      dispatch(receiveBlog(data.response.blog));
    })
    .fail(error => {
      console.error(`AJAX ERROR: ${error}`);
    });
};

const shouldFetchPosts = (state, tumblr) => {
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