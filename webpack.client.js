const path = require('path')
const merge = require('webpack-merge');
const base = require('./webpack.base.js');

const clientConfig = {
    entry: path.resolve(__dirname, 'src/client/index.js'),
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    }
}


module.exports = merge(clientConfig, base)

