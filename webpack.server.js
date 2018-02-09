const path = require('path')
const merge = require('webpack-merge');
const base = require('./webpack.base.js');

const serverConfig = {
    target: 'node',
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    }
}

module.exports = merge(serverConfig, base)