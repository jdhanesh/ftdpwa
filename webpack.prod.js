const { resolve } = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const DashboardPlugin = require('webpack-dashboard/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const webpack = require('webpack')

module.exports = {
	context: resolve(__dirname, 'src'),
	entry: {
		app: `./index.js`,
		vendor: ['react', 'react-dom', 'react-router']
    },
	output: {
		path: resolve(__dirname, './dist'),
		filename: '[name].[chunkhash:6].js',
		publicPath: '/'
	},
    devServer: {
      historyApiFallback: true
    },
	module: {
		rules: [{
		    test: /\.js$/,
			loader: 'babel-loader',
			exclude: /node-modules/,
			query: {
				presets: ['es2015']
			}			
		}, {
		    test: /\.css$/,
		    use: ExtractTextPlugin.extract(['css-loader?modules,localIdentName="[name]-[local]-[hash:base64:6]",camelCase'])
		}, {
            test: /\.(gif|png|jpe?g|svg)$/i,
            use: [{
              loader: 'file-loader',
              options: {
                query: {
                  name:'assets/[name].[ext]'
                }
              }
            },
            {
              loader: 'image-webpack-loader',
              options: {
                query: {
                  mozjpeg: {
                    progressive: true,
                  },
                gifsicle: {
                  interlaced: true,
                },
                optipng: {
                  optimizationLevel: 7,
                }
                }
              }
            }]
           }]
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			filename: '200.html',
			template: `./index.html`
		}),
		new UglifyJSPlugin(),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor'
		}),
		new ExtractTextPlugin('style.css')
	]

}