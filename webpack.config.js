var webpack = require("webpack");
var marked = require("marked");
var renderer = new marked.Renderer();
var path = require("path");

module.exports = {
	entry: './index.js',
	output: {
		path: path.resolve(__dirname, "build"),
		filename: 'bundle.js'
	},
	module: {
		rules: [{
			test: /\.md$/,
			use: [
				{
					loader: "html-loader"
				},
				{
					loader: "markdown-loader",
					options: {
						renderer: renderer
					}
				}
			]
		}]
	}

};
