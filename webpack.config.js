/* eslint-disable */
'use strict';

const webpack = require('webpack')

module.exports = {
    devtool: 'source-map',
    entry: './dist/module/index.js',
    output: {
        path: __dirname + '/dist/umd/',
        filename: 'preact-lazy-img.js',
        publicPath: '/build/',
        library: 'preactLazyImg',
        libraryTarget: 'umd'
    },
    module: {
        loaders: [
            { test: /\.(js|jsx)?$/,
                loader: 'babel-loader',
                exclude: [
                    '/dist/',
                    '/demo/',
                    '/node_modules/',
                    '/test/',
                ],
                query: {
                    presets: [['es2015', { loose: true, modules: false }], 'stage-0']
                }
            }
        ]
    },
    externals: {
        preact: 'preact'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            unused: true,
            dead_code: true,
            warnings: false,
            drop_console: true,
            comments: /^$/,
            compress: {
                warnings: false,
                pure_getters: true,
                unsafe: true,
                unsafe_comps: true,
                screw_ie8: true
            },
            mangle: true,
            output: {
                comments: false,
                semicolons: false
            },
            sourceMap: true
        }),
        new webpack.optimize.ModuleConcatenationPlugin(),
    ]
}
