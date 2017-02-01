module.exports = {
    name: 'react-babylon',

    build: {
        basePath: 'public',
        scriptDir: 'js',
        styleDir: 'css',
        index: 'index.html',
        scriptExt: '.bundle.js',
        styleExt: '.bundle.css'
    },

    dev: {
        srcPath: 'src',
        testPath: 'src',
        index: 'index.js',
        jsExt: '.js',
        styleExt: '.sass',
        testExt: '.spec.js',
        testExe: 'node ./node_modules/mocha/bin/mocha test-browser.js --require babel-core/register',
    }

};
