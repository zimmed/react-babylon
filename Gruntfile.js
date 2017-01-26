const glob = require('glob');
const fs = require('fs');
const exec = require('child_process').execSync;

module.exports = function(grunt) {
    let changedFiles = [];

    grunt.initConfig({
        watch: {
            testFiles: {
                options: {spawn: false},
                files: ['src/**/*.spec.js'],
                tasks: ['test:custom']
            },
            sourceFiles: {
                options: {spawn: false},
                files: ['src/**/!(*.spec).js'],
                tasks: ['test:custom']
            }
        },
        test: {
            custom: {
                src: [],
                exe: 'node ./node_modules/mocha/bin/mocha'
            },
            all: {
                src: ['src/**/*.spec.js'],
                exe: 'node ./node_modules/.bin/mocha'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.event.on('watch', function(action, filepath) {
        if (!filepath.endsWith('.spec.js')) {
            filepath = filepath.slice(0, filepath.indexOf('.js')) + '.spec.js';
        }
        try {
            fs.accessSync(filepath, fs.F_OK);
            if (changedFiles.indexOf(filepath) === -1) {
                changedFiles.push(filepath);
            }
        } catch (e) {
            // Nothing
        }
        grunt.config('test.custom.src', changedFiles);
    });

    grunt.registerMultiTask('test', 'Run tests', function() {
        let paths,
            src = grunt.config(`test.${this.target}.src`);

        if (!src.length) {
            grunt.log.writeln("Nothing to test.");
            return;
        }
        paths = `'${src.join("' '")}'`;
        exec(`${this.data.exe} ${paths}`, {stdio: [0, 1, 2]});
        if (this.target === 'custom') {
            changedFiles = [];
            grunt.config('test.custom.src', changedFiles);
        }
    });

    grunt.registerTask('default', ['test:all']);

};
