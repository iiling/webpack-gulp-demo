var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

var webpackConfig = {
  entry: {
    aa: ['./src/js/pages/aa.js'],
    bb: ['./src/js/pages/bb.js']
  },
  output: {
    path: path.resolve(__dirname, 'dest'),
    filename: 'js/[hash:8].[name].js',
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  },
  plugins: [
    //提取CSS到dest/css目录下
    new ExtractTextPlugin('css/[contenthash:8].[name].css', {
      //allChunks: true
    }),
    new CommonsChunkPlugin({
        name: 'common',//公共业务打包为名字vendors
        chunks: ['aa', 'bb'],//对应于上面的entry的key，把chunk里面的相同模块抽取出来取名vendors
        // minChunks是指一个文件至少被require几次才会被放到CommonChunk里，如果minChunks等于2，说明一个文件至少被require两次才能放在CommonChunk里
        minChunks: 2 // 提取所有chunks共同依赖的模块    
    }),
    new HtmlWebpackPlugin({
      inject: 'body',//默认值，script标签位于html文件的 body 底部
      chunks: ['common', 'aa'],//要使用的文件
      filename: 'html/a.html',//设置生成的 html 文件的标题。
      template: 'src/html/a.html',
    }),
    new HtmlWebpackPlugin({
      inject: 'body',
      chunks: ['common', 'bb'],
      filename: 'html/b.html',
      template: 'src/html/b.html',
    })
  ]
}

module.exports = webpackConfig;