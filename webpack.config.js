const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
	resolve: {
		alias: {
			app: path.resolve(__dirname, 'src')
		}
	},
	mode: 'development',
	entry: ['babel-polyfill', './src/index.js'],
	performance: { hints: false }, //uncomment to see recomendations
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: './src/index.html',
			filename: 'index.html'
		})
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			}
		]
	}
};
