module.exports = {
  dev: {
    options: {
      debug: true,
      transform: [
        ['babelify', {
          'optional': ['es7']
        }]
      ]
    },
    files: {
      'js/build/tumblr.js': 'js/src/tumblr.js',
      'js/build/vendor.js': 'js/vendor/vendor.js'
    }
  }
};
