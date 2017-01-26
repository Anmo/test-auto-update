var path = require('path')

module.exports = {
  target: 'electron-renderer',
  node: {
    __dirname: false,
    __filename: false
  },
  devtool: 'source-map',
  entry: {
    window: path.join(__dirname, 'window.js')
  },
  output: {
    path: __dirname,
    filename: '[name].bundle.js'
  }
}
