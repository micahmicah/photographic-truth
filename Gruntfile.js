(function () {
    'use strict';
})();

module.exports = function(grunt) {

    // ----------------------------------------------------------
    // WARNING, BRAVE DEVELOPER
    // ----------------------------------------------------------
    // Webhook allows you to use local grunt tasks and files.
    // However, these tasks are ONLY RUN LOCALLY and not when
    // your live site needs to be rebuilt. This means you should
    // only use grunt for pre-processing tasks like building
    // Sass, less or coffescript files, not for reading things
    // from your templates and making dynamic changes during
    // the build process. Doing so will cause your live site
    // not to regerate.
    //
    // You have been warned!
    grunt.initConfig({
        pkc: grunt.file.readJSON('package.json'),

        // When files change, run the tasks above.
        // Along with the webhook defined tasks of
        // building pages, and reloading assets.
        watch: {
            sass: {
                files: ['scss/**/*.scss'],
                tasks: ['sass',
                'build-static']
            }
        },


        // Build scss to css
        sass: {
            dev: {
                options: {
                    // WebHook will minifiy, so we don't have to here
                    style: 'expanded',
                    loadPath: require('node-bourbon').includePaths,
                    loadPath: require('node-neat').includePaths
                },
                files: [{
                    expand: 'true',
                    cwd: 'scss',
                    src: ['site.scss'],
                    dest: 'static/css',
                    ext: '.css'
                }, {
                    expand: 'true',
                    cwd: 'scss',
                    src: ['components/cms-custom.scss'],
                    dest: 'static/css',
                    ext: '.css',
                    flatten: true
                }]
            }
        }


    });

  
    grunt.loadNpmTasks('grunt-contrib-sass');

    // NEVER REMOVE THESE LINES, OR ELSE YOUR PROJECT MAY NOT WORK
    require('./options/generatorOptions.js')(grunt);
    grunt.loadTasks('tasks');
};
