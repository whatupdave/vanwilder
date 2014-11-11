module.exports = {
  context: __dirname + '/app/assets/javascripts',
  entry: './index.jsx',

  output: {
    filename: '[name].bundle.js',
    path: __dirname + '/app/assets/javascripts',
  },

  module: {
    exports: {
      externals: {
        react: "var React"
      },
    },
    
    loaders: [
      { test: /\.jsx$/,  loader: 'jsx-loader?harmony' },
      { test: /\.css/, loader: "style-loader!css-loader" }
    ]
  }
};
