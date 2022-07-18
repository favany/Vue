// node 模块
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'), //绝对路径
    filename: 'bundle.js',
  },
};
