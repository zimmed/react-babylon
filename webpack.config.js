const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const config = require('./cfg/application.config');
const babel = (JSON).parse(fs.readFileSync('./.babelrc'));

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, config.build.basePath, config.build.scriptDir),
        filename: config.name + config.build.scriptExt
    },
    module: {
        loaders: [
            {
                test: new RegExp(`\\${config.dev.jsExt}$`),
                loader: 'babel-loader',
                include: [
                    path.resolve(`./${config.dev.srcPath}`),
                ],
                query: {
                    cacheDirectory: true,
                    presets: babel.presets.map(t => require.resolve(t))
                }
            },
            {
                test: new RegExp(`\\/${config.dev.jsExt.substr(1)}$`),
                loader: 'eslint-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['', config.dev.jsExt, '.json']
    }
};
