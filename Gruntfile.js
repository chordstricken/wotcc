module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

    grunt.initConfig({

        concat: {
            js: {
                options: {
                    separator: ";\n"
                },
                src: [
                    // 'bower_components/director/build/director.min.js',
                    'bower_components/jquery/dist/jquery.min.js',
                    // 'bower_components/bootstrap/dist/js/bootstrap.min.js',
                    'bower_components/vue/dist/vue.min.js',
                ],
                dest: 'www/res/js/plugins.min.js'
            },
            css_bootstrap: {
                options: {separator: "\n"},
                src: [
                    'bower_components/bootstrap/dist/css/bootstrap.css',
                ],
                dest: 'www/res/css/plugins.css',
            },

        },

        sass: {
            dist: {
                files: {
                    'www/res/css/index.css': 'www/res/css/index.scss'
                }
            }
        },

        watch: {
            styles: {
                files: [
                    'www/res/css/*.scss',
                ],
                tasks: ['sass']
            }
        }

    })

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.registerTask('default', ['concat', 'sass']);

}