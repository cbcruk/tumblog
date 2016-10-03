import { ajax } from 'jquery';
import { API_URL, API_KEY } from './constant';

export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const REQUEST_BLOG = 'REQUEST_BLOG';
export const RECEIVE_BLOG = 'RECEIVE_BLOG';

const requestPosts = () => ({
  type: REQUEST_POSTS,
});

const receivePosts = (response) => ({
  type: RECEIVE_POSTS,
  response
});

const receiveBlogs = (response) => ({
  type: RECEIVE_BLOG,
  response
});

export const fetchTumblr = (type, offset = 0, limit = 3) => (dispatch) => {
  dispatch(requestPosts());

  return ajax({
    type: 'GET',
    url: API_URL,
    dataType: 'jsonp',
    data: {
      api_key: API_KEY,
      type,
      offset,
      limit
    },
    cache: false
  })
    .then(data => {
      dispatch(receiveBlogs(data.response.blog));
      dispatch(receivePosts(data.response.posts));
    })
    .fail(error => {
      console.error(error);
    });
}
