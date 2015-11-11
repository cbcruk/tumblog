module.exports = {
  all: {
    dest: './js/build/vendor.js',
    include: ['jquery', 'bootstrap', 'zoom.js', 'lazyloadxt', 'awesomplete'],
    dependencies: {
      'lazyloadxt': 'jquery',
      'bootstrap': 'jquery',
      'zoom.js': ['jquery', 'bootstrap']
    },
    bowerOptions: {
      relative: false
    },
    mainFiles: {
      'zoom.js': 'dist/zoom.js',
      'lazyloadxt': 'dist/jquery.lazyloadxt.js'
    }
  }
};
