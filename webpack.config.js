const { resolve } = require('path')
const DashboardPlugin = require('webpack-dashboard/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const srcDir = resolve(__dirname,'src')

module.exports = {
	entry: `${srcDir}/index.js`,
	output: {
		filename: 'bundle.js',
		publicPath: '/'
	},
    devServer: {
      historyApiFallback: true
    },
	module: {
		rules: [{
			enforce: 'pre',
			test: /\.js$/,
			loader: 'standard-loader',
			exclude: /node-modules/
		}, {
		    test: /\.js$/,
			loader: 'babel-loader',
			exclude: /node-modules/			
		}, {
		    test: /\.css$/,
		    use: [{
              loader: 'style-loader'
            }, {
               loader: 'css-loader',
               options: {
                modules: true,
                localIdentName: '[name]-[local]-[hash:base64:6]',
                camelCase: true
               }
            }]
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
		new HtmlWebpackPlugin({
			template: `${srcDir}/index.html`
		}),
		new ExtractTextPlugin('style.css'),
		new DashboardPlugin()
	]

}