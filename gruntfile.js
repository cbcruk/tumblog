module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      server: {
        options: {
          port: 8000,
          hostname: 'localhost'
        }
      }
    },
    compass: {
      dist: {
        options: {
          sassDir: 'css/',
          cssDir: 'css/',
          outputStyle: 'compressed',
          environment: 'production',
          assetCacheBuster: false
        }
      }
    },
    browserify: {
      dev: {
        options: {
          debug: true,
          transform: ['reactify']
        },
        files: {
          'js/build/tumblr.js': 'js/src/tumblr.js'
        }
      }
    },
    watch: {
      css: {
        files: 'css/*.scss',
        tasks: ['compass'],
        options: {
          livereload: true
        }
      },
      browserify: {
        files: ['js/src/**/*.js'],
        tasks: ['browserify:dev'],
        options: {
          livereload: true
        }
      }
    },
    uglify: {
      my_target: {
        files: {
          'js/build/tumblr.min.js': ['js/build/tumblr.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-browserify');

  grunt.registerTask('default', ['connect', 'watch', 'compass', 'browserify']);
};