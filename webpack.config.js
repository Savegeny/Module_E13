module.exports =merge(common, {
    mode: 'development',
    entry: './src/index.js',
   devServer: {
    historyApiFallback: true,
     contentBase: '../dist',
     devtool: 'inline-source-map',
     //open: true,
     //port: 3001,
     hot: true,
     stats:{
      children: false,
      maxModules: 0,
     }
   },
    plugins: [
           new HtmlWebpackPlugin({
        title: 'Development',
      }),
    ],
    output: {
      filename: 'main.js',
    },
  }
  );