module.exports = function(grunt) {
    grunt.initConfig({

        bump  : {
            options: {
                files             : ['package.json', 'wdtLoading.jquery.json', 'wdtLoading.js'],
                updateConfigs     : [],
                commit            : false,
                commitMessage     : 'Release v%VERSION%',
                commitFiles       : ['-a'],
                createTag         : false,
                tagName           : 'v%VERSION%',
                tagMessage        : 'Version %VERSION%',
                push              : false,
                pushTo            : 'upstream',
                gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d'
            }
        },

        uglify: {
            minifyJS: {
                files: {
                    'wdtLoading.min.js': ['wdtLoading.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-bump');

    grunt.registerTask('build', ['bump', 'uglify:minifyJS']);
};
