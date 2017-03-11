var webpack = require('webpack');
var path = require('path');
var fs = require('fs');

var nodeModules = {};
fs.readdirSync('node_modules')
    .filter(function(x) {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function(mod) {
        nodeModules[mod] = 'commonjs ' + mod;
    });

module.exports = {
    entry: [
        './src/app.js',
        'babel-polyfill'
    ],
    target: 'node',
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'lucy.js'
    },
    externals: nodeModules,
    devtool: "source-map",
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin({banner: '#!/usr/bin/env node', raw: true, entryOnly: true})
    ]
}