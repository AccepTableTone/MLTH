const webpack = require('webpack');

module.exports = {
	devtool: 'cheap-module-source-map',
	entry: [ 'babel-polyfill', 'react-hot-loader/patch', './src/index.js' ],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: [ 'babel-loader' ]
			},
			{
				test: /\.css/,
				loader: 'style-loader!css-loader'
			}
		]
	},
	resolve: {
		extensions: [ '*', '.js', '.jsx' ]
	},
	output: {
		path: __dirname + '/dist',
		publicPath: '/',
		filename: 'bundle.js'
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('production')
			}
		})
	],
	devServer: {
		contentBase: './dist',
		historyApiFallback: true
	}
};
