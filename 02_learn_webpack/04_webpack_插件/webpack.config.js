// node 模块
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { DefinePlugin } = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  // 设置模式
  // development 开发阶段，方便调试和定位问题
  // production 准备打包上线，设置production
  mode: 'development',
  // 设置 source-map 建立 js 映射文件，方便调试代码和错误
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './build'), //绝对路径
    filename: 'js/bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/, //正则表达式
        // 1. loader的写法（语法糖）
        // loader: 'css-loader',

        // 2. 完整的写法
        // use 的执行顺序是从后往前的
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          // {
          //   loader: 'postcss-loader',
          //   options: {
          //     postcssOptions: {
          //       plugins: [require('autoprefixer')],
          //     },
          //   },
          // },
        ],
      },
      {
        test: /\.less$/, // (less|css)
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      // {
      //   test: /\.(jpeg|jpg|png|gif|svg)$/,
      //   use: {
      //     loader: 'url-loader',
      //     // loader: 'file-loader',
      //     options: {
      //       // outputPath: 'img',
      //       name: 'img/[name]_[hash:6].[ext]',
      //       limit: 100 * 1024,
      //     },
      //   },
      // },
      {
        test: /\.(jpe?g|png|gif|svg)&/,
        type: 'asset',
        generator: {
          name: 'img/[name]_[hash:6][ext]',
        },
        parser: {
          dataUrlCondition: {
            maxSize: 10000000 * 1024,
          },
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ template: './public/index.html', title: '哈哈哈' }),
    new DefinePlugin({ BASE_URL: "'123'" }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'public',
          to: 'build',
          globOptions: {
            ignore: ['index.html'],
          },
        },
      ],
    }),
  ],
};
