import { ajax } from 'jquery';

const param = {
  api_key: '9XQHE6avIyXZBtaiQw8sIG7eNE4Ejzk41cgY2THef9YZr4TuG7',
  offset: 0,
  limit: 3,
};

export const fetchData = (tumblr) =>
  ajax({
    type: 'GET',
    url: '//api.tumblr.com/v2/blog/cbcruk.tumblr.com/posts',
    dataType: 'jsonp',
    data: tumblr ? { ...param, type: tumblr } : param,
    cache: false
  });