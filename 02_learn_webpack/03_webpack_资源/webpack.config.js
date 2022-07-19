// node 模块
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './build'), //绝对路径
    filename: 'bundle.js',
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
      {
        test: /\.(jpeg|jpg|png|gif|svg)$/,
        use: {
          loader: 'url-loader',
          // loader: 'file-loader',
          options: {
            // outputPath: 'img',
            name: 'img/[name]_[hash:6].[ext]',
            limit: 100 * 1024,
          },
        },
      },
    ],
  },
};
