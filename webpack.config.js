const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry:{
		reactcomponents: [
			'./src/components/react-component1.js',
			'./src/components/react-component2.js'
		]
	},
    output: {
        filename: 'bundle.min.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader'
            }
        }]
    },
    plugins: [
        new HtmlWebpackPlugin(
		{
			template: './src/index.html',
			filename: './index.html'
		})
    ]
};