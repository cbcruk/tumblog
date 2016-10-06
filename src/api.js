const tumblrApi = '//api.tumblr.com/v2/blog/cbcruk.tumblr.com/posts';
const tumblrApiKey = '9XQHE6avIyXZBtaiQw8sIG7eNE4Ejzk41cgY2THef9YZr4TuG7';
const tumblrLimit = 3;

function removeScript(script) {
  document.body.removeChild(script);
}

function removeFunction(jsonp) {
  delete window[jsonp];
}

export const fetchData = (tumblr) =>
  new Promise((resolve, reject) => {
    const jsonp = 'jsonp' + (+new Date());
    const script = document.createElement('script');
    const param = Object.keys(tumblr).reduce((p, n) => {
      const value = tumblr[n];
      return p += value ? `&${n}=${value}` : '';
    }, '');

    script.src = `${tumblrApi}?callback=${jsonp}&api_key=${tumblrApiKey}&limit=${tumblrLimit}${param}`;
    script.onerror = (error) => {
      reject('SERVER ERROR');
    };
    document.body.appendChild(script);

    window[jsonp] = (response) => {
      resolve(response);
      removeScript(script);
      removeFunction(jsonp);
    };
  });
