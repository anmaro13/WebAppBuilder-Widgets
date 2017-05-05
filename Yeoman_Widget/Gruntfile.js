module.exports = function (grunt) {
    'use strict';
    grunt.loadNpmTasks('grunt-sync');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-sass');
    var appDir = '/Student/WebAppBuilderForArcGIS/server/apps/6';
    var stemappDir = '/Student/WebAppBuilderForArcGIS/client/stemapp';
    grunt.initConfig({
        sync: {
            main: {
                verbose: true,
                files: [{
                        cwd: 'dist/',
                        src: '**',
                        dest: stemappDir
                    },{
                        cwd: 'dist/',
                        src: '**',
                        dest: appDir
                    }]
            }
        },
        babel: {
            'main': {
                'files': [{
                        'expand': true,
                        'src': [
                            'widgets/*.js',
                            'widgets/**/*.js',
                            'widgets/**/**/*.js',
                            'widgets/!**/**/nls/*.js',
                            'themes/*.js',
                            'themes/**/*.js',
                            'themes/**/**/*.js',
                            'themes/!**/**/nls/*.js'
                        ],
                        'dest': 'dist/'
                    }]
            }
        },
        watch: {
            main: {
                files: [
                    'widgets/**',
                    'themes/**'
                ],
                tasks: [
                    'clean',
                    'sass',
                    'babel',
                    'copy',
                    'sync'
                ],
                options: {
                    spawn: false,
                    atBegin: true
                }
            }
        },
        copy: {
            'main': {
                'src': [
                    'widgets/**/**.html',
                    'widgets/**/**.json',
                    'widgets/**/**.css',
                    'widgets/**/images/**',
                    'widgets/**/nls/**',
                    'themes/**/**.html',
                    'themes/**/**.json',
                    'themes/**/**.css',
                    'themes/**/images/**',
                    'themes/**/nls/**'
                ],
                'dest': 'dist/',
                'expand': true
            }
        },
        clean: { 'dist': { 'src': 'dist/**' } },
        sass: {
            dist: {
                options: { sourceMap: true },
                files: [{
                        expand: true,
                        src: ['widgets/**/*.scss'],
                        rename: function (dest, src) {
                            return src.replace('scss', 'css');
                        }
                    }]
            }
        }
    });
    grunt.registerTask('default', ['watch']);
};
