const commonConfig = require('./webpack.common.config');

module.exports = Object.assign(commonConfig,
    {
        watch: false,
        devtool: 'eval',
    }
);