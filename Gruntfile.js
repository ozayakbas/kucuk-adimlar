module.exports = function(grunt) {
    grunt.initConfig({
        less: {
          development: {
            options: {
              compress: true,
              yuicompress: true,
              optimization: 2
            },
            files: {
              "_assets/css/kucuk-adimlar.css": "_assets/css/less/all.less"
            }
          }
        },
        concat: {
          options: {
            separator: ';',
         },
         dist: {
            src: ['_assets/js/core/jquery-3.4.1.min.js', '_assets/js/core/bootstrap.min.js', '_assets/js/custom/kucuk-adimlar.js'],
            dest: '_assets/js/kucuk-adimlar.js',
         },
       },
      watch: {
        styles: {
      files: ['**/*.less'],
          tasks: ['less'],
          options: {
            nospawn: true
          }
        },

         script: {
           files: ['**/*.js'],
           tasks: ['concat'],
            options: {
              nospawn: true
            }
         },

      },
      browserSync: {
          dev: {
              bsFiles: {
                  src : [
                    '**/**.css',
                    '**/**.less',
                    '**/**.js',
                    '**/**.html'
                  ]
              },
              options: {
                  server: {
                      baseDir: "./"
                  },
                  watchTask: true
              }
          }
      }                                                                                                                                                                                                                                                             
    });

    require('jit-grunt')(grunt);
    grunt.registerTask('default', ['less', 'concat', 'browserSync', 'watch']);
};