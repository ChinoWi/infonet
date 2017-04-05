var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require('webpack')
var path = require("path");
const autoprefixer = require('autoprefixer')

const SRC='../src'
const PROD='../distProd'
const NODE_MODULES='../node_modules'

module.exports = {
    entry: {
        app:'./src/app.main.js',
    },
    output: {
        path: path.resolve(__dirname, PROD),
        filename: '[name]-[hash].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    loader: ['css-loader', 'sass-loader','postcss-loader'],
                })
            },
            {
                test: /\.(jpg|jpeg|gif)$/,
                exclude: [/node_modules/],
                loader: 'url-loader?limit=10000&name=./images/[name].[ext]'
            },
            {
                test: /\.(svg|ico|png|eot)$/,
                exclude: [/node_modules/],
                loader: 'url-loader?limit=10000&name=./icons/[name].[ext]'
            },
            {
                test: /\.(ttf|eot)$/,
                exclude: [/node_modules/],
                loader: 'url-loader?limit=1&name=./fonts/[name].[ext]'
            },
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Infonet Soluciones Project',
            // minify: {
            //     collapseWhitespace: true
            // },
            hash: true,
            template: './src/index.ejs', // Load a custom template (ejs by default see the FAQ for details)
        }),
        new ExtractTextPlugin({
            filename: '[name]-[hash].css',
            disable: false,
            allChunks: true
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'commons',
            filename: 'app.commons.js',
            minChunks: 2,
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [
                    autoprefixer({
                        browsers: ['last 2 versions', 'ie >= 9', 'and_chr >= 2.3']
                    })
                ]
            }
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ],
    resolve : {
        modules : [NODE_MODULES, SRC]
    },
}