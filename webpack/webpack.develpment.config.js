const commonConfig = require('./webpack.common.config')
const path = require('path')


const PROD  = '../distProd';

module.exports = Object.assign(commonConfig,
    {
        watch: true,
        devtool: 'source-map',
        devServer: {
            contentBase: path.join(__dirname, PROD),
            compress: true,
            stats: "errors-only",
            open: true
        },
    }
);