const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const config = require('./cfg/application.config');
const babel = (JSON).parse(fs.readFileSync('./.babelrc'));

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'public/js/'),
        filename: config.name + '.bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [
                    path.resolve('./src'),
                    fs.realpathSync('./node_modules/redux-reducers')
                ],
                query: {
                    //cacheDirectory: true,
                    presets: babel.presets.map(t => require.resolve(t))
                }
            },
            {
                test: /\/js$/,
                loader: 'eslint-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['', config.dev.jsExt, '.json']
    }
};
