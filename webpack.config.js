module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: './src/app.js',
  output: {
    publicPath: '/',
    filename: 'app.js',
  },
  devServer: {
    contentBase: './dist',
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.ejs$/i,
        use: 'raw-loader',
      },
    ],
  }
};
