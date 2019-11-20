const path = require('path'); 

module.exports = {
    entry: './src/script.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    mode: 'none',
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [ 'style-loader', 'css-loader' ]
        },
        {
          test: /\.scss$/i,
          use: [ 'style-loader', 'css-loader', 'sass-loader' ]
          // chain is invoked from right to left: first sass-loader is
          // invoked, passing the result to css-loader
        }

      ]
    }

}
