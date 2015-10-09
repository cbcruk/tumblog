module.exports = {
  compass: {
    files: 'css/*.scss',
    tasks: ['compass'],
    options: {
      livereload: true
    }
  },
  browserify: {
    files: ['js/src/**/*.js', 'js/vendor/**/*.js'],
    tasks: ['browserify:dev'],
    options: {
      livereload: true
    }
  }
};
