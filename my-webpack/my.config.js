const path = require('path');

module.exports = {
  enter: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
  },
};
