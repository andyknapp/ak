module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // concat js files
        concat: {
            basic: {
                src: ['js/src/*js'],
                dest: 'js/site-js.js',
            },
        },

        // Minifies javascript files
        uglify: {
            my_target: {
                files: {
                    'js/site-js.min.js': ['js/site-js.js'],
                }
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

        // minify css
        cssmin: {
          target: {
            files: {
              'css/style.min.css': ['css/style.css']
              //'css/critical.min.css': ['css/critical.css']
            }
          }
        },

        // Watches for changes then executes tasks
        watch: {
          // scripts: {
          //   files: 'js/src/*.js',
          //   tasks: ['concat', 'uglify'],
          //   options: {
          //       spawn: false,
          //   },
          // },
          css: {
            files: ['css/sass/**/*.scss'],
            tasks: ['sass', 'autoprefixer', 'cssmin'],
            options: {
                spawn: false,
            }
          }
        },

        // criticalcss: {
        //     options: {
        //         url : 'http://ak.test',
        //         width: 1200,
        //         height: 2900,
        //         filename : 'http://ak.test/css/style.css',
        //         outputfile : 'http://ak.test/css/critical.css',
        //     }
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
				 'assets/svg-defs.svg': ['assets/svg/*.svg'],
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
              open: false,
              ghostMode: {
                clicks: true,
                forms: true,
                scroll: true
            },
            proxy: "ak.test" // change this to your project's dev URL
            }
          }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-criticalcss');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-svgstore');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['concat', 'uglify', 'sass', 'autoprefixer', 'cssmin', 'svgstore', 'browserSync', 'watch']);
};
