const path = require('path');

const outputPath = path.resolve(__dirname, 'dist');
console.debug(outputPath);

module.exports = {
    entry: './src/index.js',
    output: {
        path: outputPath,
        filename: "main.js"
    },
    devServer: {
      contentBase: outputPath,
    }
};