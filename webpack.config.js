const path = require('path');

module.exports = {
    target: 'node',
    mode: 'development',
    entry: './src/index.ts',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.ts', '.js'],
        alias: {
            'src': path.resolve(__dirname, 'src/'),
        },
        fallback: {
            "assert": require.resolve("assert"),
            "buffer": require.resolve("buffer/"),
            "crypto": require.resolve("crypto-browserify"),
            "fs": false,
            "http": require.resolve("stream-http"),
            "https": require.resolve("https-browserify"),
            "net": require.resolve("net-browserify"),
            "os": require.resolve("os-browserify"),
            "path": require.resolve("path-browserify"),
            "querystring": require.resolve("querystring-es3"),
            "stream": require.resolve("stream-browserify"),
            "url": require.resolve("url"),
            "util": require.resolve("util"),
            "zlib": require.resolve("browserify-zlib"),
        },
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
};