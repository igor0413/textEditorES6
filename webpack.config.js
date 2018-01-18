const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');

module.exports = {
	entry: "./src/index.js",
	output: {
    path: path.resolve(__dirname,"dist"),
		filename: "bundle.js"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: "babel-loader",
				query: {
					presets: ["stage-0", "react"]
				}
			},
      {
        test: /\.css$/,
        exclude: /node_modules/,
        // loaders: [
        //   'style-loader',
        //   'css-loader'
        // ],
        loaders: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg|jpg)$/,
        exclude: /node_modules/,
        loader: 'url-loader?limit=4000&name=[name]-[hash].[ext]'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
		]
	},
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/assets/index.html'),
      path: path.resolve(__dirname, './dist')
    }),
    new ExtractTextPlugin("styles.css")
  ]
}







