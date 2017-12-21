var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './app/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'editor-bundle.js'
	},
	module: {
		rules: [
			{ 
				test: /\.(js)$/, 
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env'],
						plugins: [require('babel-plugin-transform-decorators-legacy').default
							,require('babel-plugin-transform-object-rest-spread')]
					}
				}
			},
			{ test: /\.css$/, use: ['style-loader', 'css-loader']}
		]
	},
	plugins: [new HtmlWebpackPlugin({
		template: 'app/index.html'
	})],
	devServer: {
		disableHostCheck: true
	}
}
