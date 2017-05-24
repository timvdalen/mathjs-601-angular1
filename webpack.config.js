var webpack = require('webpack'),
	path = require('path'),
	HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	devtool: '#inline-source-map',
	entry: './app.js',
	output: {
		path: path.resolve(__dirname, "./dist"),
		filename: "bundle.js"
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './index.html'
		})
	],
	node: {
		fs: "empty"
	},
	module: {
		loaders: [
		]
	}
};
