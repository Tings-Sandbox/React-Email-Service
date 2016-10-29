const path = require('path')
const webpack = require('webpack')

module.exports = {
  devtool: 'source-map',

  entry: {
    javascript: './client/app/js/app.jsx',
    html: './client/app/index.html'
  },
  
  output: {
    filename: "bundle.js",
    path: path.join(__dirname + '/dist'),
    publicPath: '/dist/'
  },

  // entry: [
  //   './src/index'
  // ],

  // output: {
  //   path: path.join(__dirname, 'public'),
  //   filename: 'bundle.js',
  //   publicPath: '/public/'
  // },

  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({  
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],

  module: {
    loaders: [
      {
        test: /\.css$/, loader:"style!css"
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]"
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ["react-hot", 'babel?'+JSON.stringify(
          {
            presets: ['react', 'es2015'],
            "plugins": [
              "syntax-class-properties",
              "syntax-decorators",
              "syntax-object-rest-spread",
              "transform-class-properties",
              "transform-object-rest-spread"
            ]
          }
        )]
      }
    ]
  }
  
}