
const path = require('path');
const extractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    'app': path.resolve(__dirname, 'src/entry/app.js'),
  }, 
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js'
  },
  devServer: {
    open: true,
    compress: true,
    port:3000
  },
  module: {
    rules: [
      //js 
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react', 'stage-2']
          }
        }
      },
      //css
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      //stylus 
      {
        test: /\.styl$/,
        use: extractTextPlugin.extract({
          use: [
            "css-loader",
            {
              loader: 'stylus-loader',
              options: {
                use: [
                  require('nib'),
                  require('rupture')
                ],
                import: [
                  '~nib/lib/nib/index.styl',
                  '~rupture/rupture/index.styl'
                ]
              }
            }
          ]
        })
      },
      //assets 
      {
        test:/\.(jpg|png|gif|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            //Limit (bytes)
            limit: 3000000
          }
        }
      },
      //json 
      {
        test:/\.(json)$/,
        use: 'json-loader'
      }
    ]
  },
  plugins: [
    new extractTextPlugin("css/[name].css")
  ]
}