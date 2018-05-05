/* eslint-disable */
'use strict';

const webpack = require('webpack')

module.exports = {
    devtool: 'source-map',
    entry: './dist/module/index.js',
    output: {
        path: __dirname + '/dist/umd/',
        filename: 'react-lazy.js',
        publicPath: '/build/',
        library: 'ReactLazy',
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
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            comments: /^$/,
            compress: {
                warnings: false
            },
            mangle: true,
            output: {
                comments: false,
                semicolons: false
            },
            sourceMap: true
        }),
        new webpack.optimize.ModuleConcatenationPlugin(),
    ],
    externals: [
        {
            'prop-types': {
                root: 'PropTypes',
                commonjs2: 'prop-types',
                commonjs: 'prop-types',
                amd: 'prop-types'
            }
        }
    ],
}
