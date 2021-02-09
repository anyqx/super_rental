const path = require('path');
module.exports = {
    context: __dirname,
    entry: './frontend/super_rental.jsx',
    output: {
        path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: [/\.jsx?$/],
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env', '@babel/react']
                }
            }
        ]
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx', '*']
    }
}

//Configure your module.rules to use Babel transpilation for:
// JSX
// ES6