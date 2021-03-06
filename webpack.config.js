var path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    //Doesn't modify function names into minified version (e.g function a, b..)
    optimization: {
    	minimize: false
  	}
};