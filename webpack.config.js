const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: [path.join(__dirname, '/src/index.js')],
    output: {
        path: path.join(__dirname, '/build'),
        filename: 'react-babylon.bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: path.join(__dirname, '/src'),
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    presets: ['react', 'es2015']
                }
            }, {
                test: /\.js$/,
                loader: 'eslint-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['', '.js']
    }
};
