module.exports = {
  options: {
    separator: ';',
  },
  dist: {
    src: [
      'bower_components/jquery/dist/jquery.js',
      'bower_components/bootstrap/dist/js/bootstrap.js',
      'bower_components/zoom.js/dist/zoom.js',
      'bower_components/lazyloadxt/dist/jquery.lazyloadxt.js',
      'bower_components/awesomplete/awesomplete.js'
    ],
    dest: './js/build/vendor.js',
  }
};
