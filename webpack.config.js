const path = require('path');
const buildDirName = 'build';
const buildDirPath = path.resolve(__dirname, buildDirName);
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		path: buildDirPath,
		publicPath: `/${buildDirName}`,
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: 'babel-loader'
			}, {
				test: /\.css$/, // This will match either .scss or .css
				use: [
					'style-loader',
					'css-loader',
				],
			},
			{
				test: /\.(png|svg|jpe?g|gif)$/,
				use: [
					'file-loader'
				]
			}
		]
	},
	devServer: {
		contentBase: buildDirPath,
		port: 8080,
	},
	plugins: [
		new CopyPlugin([
			{
				from: 'src/assets',
				to: 'assets'
			}
		])
	],
	resolve: {
		alias: {
			'react': 'preact/compat',
			'react-dom': 'preact/compat'
		}
	}
}