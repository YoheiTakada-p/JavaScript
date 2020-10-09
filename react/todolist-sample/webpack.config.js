const path = require('path')
const debug   = process.env.NODE_ENV !== "production";
const webpack = require('webpack');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'js', "main.js"),
    output: {
      path: path.resolve(__dirname, 'src'),
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }]
      }]
    },
    //webpack-dev-serverを立ち上げた時のドキュメントルートを設定
    devServer: {
        contentBase: path.resolve(__dirname, 'src')
    },
    plugins: debug ? [] : [
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    ]
}