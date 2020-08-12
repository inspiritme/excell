const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')
<<<<<<< HEAD
const CopyPlugin = require('copy-webpack-plugin')
=======
// const CopyPlugin = require('copy-webpack-plugin')
>>>>>>> 0fb64cd7cc9831050368f95ce513d253d3e6695c
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const isProd = process.env.NODE_ENV === 'production';
const isDev = !isProd

console.log( 'isProd', isProd )
console.log('isDev', isDev)

const filename = ext => isDev? `bundle.${ext}` : `bundle.[hash].${ext}`;
const jsLoaders = () => {
    const loaders = [
        {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env']
            },
        },
    ]

    if (isDev) {
        loaders.push('eslint-loader')
    }

    return loaders
}

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
<<<<<<< HEAD
    entry: ['@babel/polyfill','./index.js'],
=======
    entry: ['@babel/polyfill', './index.js'],
>>>>>>> 0fb64cd7cc9831050368f95ce513d253d3e6695c
    output: {
        filename: filename('js'),
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js'],
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@core': path.resolve(__dirname, 'src/core')
        }
    },
    devtool: isDev? 'source-map' : false,
    devServer: {
        port: 3000,
        hot: isDev
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            template: 'index.html',
            minify: {
                removeComments: isProd,
                collapseWhitespace: isProd
            }
        }),

        // new CopyPlugin({
        //     from: path.resolve(__dirname, 'src/favicon.ico'), 
        //     to: path.resolve(__dirname, 'dist') 
        // }),

        new MiniCssExtractPlugin({
            filename: filename('css')
        })
    ],

    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: isDev,
                            reloadAll: true
                        }
                    },
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: jsLoaders(),
                // loader: {
                //     loader: 'babel-loader',
                //     options: {
                //         presets: ['@babel/preset-env']
                //     }
                // }
            }
        ],
    }
}
