module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Notify changes via Growl
        notify: {
          js: {
            options: {
              message: 'JS minified'
            }
          },
          sass: {
            options: {
              message: 'SASS compiled'
            }
          },
          watch: {
            options: {
              message: 'Watch is running'
            }
          }
        },

        // Concats javascript files
        concat: {
          basic: {
            src: [
              'js/global/*.js',
              '!js/global.js',
              '!js/global.min.js'
            ],
            dest: 'js/global.js',
          },
        },

        // Minifies javascript files
        uglify: {
          build: {
            src: 'js/global.js',
            dest: 'js/global.min.js'
          }
        },

        // Compiles Sass
        sass: {
          options: {
            style: 'expanded',
            lineNumbers: true
          },
          dist: {
          files: {
            'css/style.css': 'css/sass/style.scss'
          }
          }
        },

        // Auto-prefixes css
        autoprefixer: {
          single_file: {
            options: {
              browsers: ['> 1%']
            },
            src: 'css/style.css',
            dest: 'css/style.css'
          },
        },

        // criticalcss: {
        //   'home' : {
        //     options: {
        //       outputfile : 'css/critical/home.css',
        //       filename : 'css/style.css',
        //       url : 'http://ak.dev/'
        //     }
        //   }
        // },

        // 'string-replace': {
        //   files: {
        //     src: 'css/critical/*.css',
        //     dest: 'css/critical/'

        //   },
        //   options: {
        //     saveUnchanged: false,
        //     replacements: [{
        //       pattern: /url\(\.\.\//ig, // g needed to execute all instances
        //       //replacement: 'url(/wp-content/themes/birdseye/assets/'
        //     }]
        //   }
        // },

        // cacheBust: {
        //   options: {
        //     jsonOutput: true,
        //     jsonOutputFilename : 'grunt-cache-bust.json',
        //     assets: ['css/style.css']
        //   }, 
        //   src: ['no.php']
        // },

        // svg sprite system
        svgstore: {
          options: {
            prefix : 'icon-',
            cleanup : ['fill'],
            svg: {
              style : 'display:none;'
            }
          },
          default : {
            files: {
              'icons/svg-defs.svg': ['icons/svg/*.svg'],
            }
          }
        },

        // Watches for changes then executes tasks
        watch: {
          scripts: {
            files: ['js/**/*.js'],
            tasks: ['concat', 'uglify', 'notify:js'],
            options: {
                spawn: false,
            },
          },
          css: {
            files: ['css/sass/**/*.scss'],
            tasks: ['sass', 'autoprefixer'],
            options: {
                spawn: false,
            }
          }
        },

        // Live reload of style sheet in browser
        browserSync: {
          dev: {
            bsFiles: {
              src : 'css/style.css'
            },
            options: {
              watchTask: true,
              ghostMode: {
                clicks: true,
                forms: true,
                scroll: true
            },
            proxy: "ak.dev" // change this to your project's dev URL
            }
          }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-notify');
    grunt.loadNpmTasks('grunt-svgstore');
    // grunt.loadNpmTasks('grunt-cache-bust');
    // grunt.loadNpmTasks('grunt-criticalcss');
  //  grunt.loadNpmTasks('grunt-string-replace');

    grunt.registerTask('default', ['concat', 'uglify', 'sass', 'autoprefixer', 'svgstore', 'browserSync', 'watch']);
};