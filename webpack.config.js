const path = require('path');
const slsw = require('serverless-webpack');
var nodeExternals = require('webpack-node-externals');

module.exports = {
    // entry: slsw.lib.entries,
    entry: {
        'capitalize-handler': './handlers/Http/capitalize-handler.ts',
        'hello-handler': './handlers/PubSub/hello-handler.ts',
        'one-minute-handler': './handlers/Schedule/one-minute-handler.ts',
    },
    resolve: {
        extensions: [
            '.js',
            '.json',
            '.ts',
            '.tsx'
        ]
    },
    output: {
        libraryTarget: 'commonjs',
        path: path.join(__dirname, '.webpack'),
        filename: '[name].js'
    },
    target: 'node',
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                use: [
                    {
                        loader: 'ts-loader'
                    }
                ],
            }
        ]
    }
};