const path = require('path');

module.exports = {
    mode: 'development',
    entry: './assets/js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: 'main.bundle.js',
    },
};