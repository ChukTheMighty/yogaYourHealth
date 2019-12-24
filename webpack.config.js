var path = require('path');


module.exports = {
  mode: 'development',
  entry: './js/script.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'build.js',
    library: 'script'
  },
  watch: true,
  watchOptions: {
    aggregateTimeout: 300
  }, 
  devtool:  'source-map',

};