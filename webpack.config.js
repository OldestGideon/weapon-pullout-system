const path = require('path');
const buildPath = path.resolve(__dirname, 'dist');

const client = {
    entry: './src/client/client.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                include: path.resolve(__dirname, 'src')
            }
        ]
    },

    watchOptions: {
        ignored: /node_modules/
    },

    resolve: {
        extensions: [".ts", ".js"],
    },

    output: {
        filename: '[name].client.js',
        path: path.resolve(buildPath, 'client'),
        clean: true
    }
}

const server = {
    entry: './src/server/server.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                include: path.resolve(__dirname, 'src')
            }
        ]
    },

    watchOptions: {
        ignored: /node_modules/
    },

    resolve: {
        extensions: [".ts", ".js"],
    },

    output: {
        filename: '[name].server.js',
        path: path.resolve(buildPath, 'server'),
        clean: true
    }
}

module.exports = [client, server];