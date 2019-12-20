module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Minifies javascript files
        uglify: {
          build: {
            src: 'js/site.js',
            dest: 'js/site.min.js'
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

        criticalcss: {
          'home' : {
            options: {
              outputfile : 'css/critical/critical.css',
              filename : 'css/style.css',
              url : 'http://ak.test/'
            }
          }
        },

        // minify css
        cssmin: {
          target: {
            files: {
              'css/style.min.css': ['css/style.css'],
              'css/critical.min.css': ['css/critical/home.css']
            }
          }
        },

        // Watches for changes then executes tasks
        watch: {
          scripts: {
            files: ['js/**/*.js'],
            tasks: ['uglify'],
            options: {
                spawn: false,
            },
          },
          css: {
            files: ['css/sass/**/*.scss'],
            tasks: ['sass', 'autoprefixer', 'cssmin'],
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
            proxy: "ak.test" // change this to your project's dev URL
            }
          }
        }

    });

    //grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-criticalcss');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['uglify', 'sass', 'autoprefixer', 'cssmin', 'browserSync', 'criticalcss', 'watch']);
};
