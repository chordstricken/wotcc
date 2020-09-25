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
                    'node_modules/jquery/dist/jquery.min.js',
                    'node_modules/axios/dist/axios.min.js',
                    // 'bower_components/bootstrap/dist/js/bootstrap.min.js',
                    'node_modules/vue/dist/vue.min.js',
                ],
                dest: 'www/res/js/vendor.min.js'
            },
            css_bootstrap: {
                options: {separator: "\n"},
                src: [
                    'node_modules/bootstrap/dist/css/bootstrap.min.css',
                ],
                dest: 'www/res/css/vendor.min.css',
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

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.registerTask('default', ['concat', 'sass']);

}