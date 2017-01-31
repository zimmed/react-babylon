const glob = require('glob');
const fs = require('fs');
const exec = require('child_process').execSync;
const config = require('./cfg/application.config');

module.exports = function(grunt) {
    let changedFiles = [];

    grunt.initConfig({
        watch: {
            testFiles: {
                options: {spawn: false},
                files: [`${config.dev.testPath}/**/*${config.dev.testExt}`],
                tasks: ['test:custom']
            },
            sourceFiles: {
                options: {spawn: false},
                files: [`${config.dev.testPath}/**/!(*.spec)${config.dev.jsExt}`],
                tasks: ['test:custom']
            }
        },
        test: {
            custom: {
                src: [],
                exe: config.dev.testExe
            },
            all: {
                src: ['src/**/*.spec.js'],
                exe: config.dev.testExe
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.event.on('watch', function(action, filepath) {
        if (!filepath.endsWith(config.dev.testExt)) {
            filepath = filepath.slice(0, filepath.indexOf(config.dev.jsExt)) + config.dev.testExt;
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
