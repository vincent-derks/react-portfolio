const prod = process.argv.indexOf('-p') !== -1

if(prod){

    var webpack = require('webpack');

    module.exports = {
        entry: __dirname + '/src/client/index.js',
        output: {
            path: __dirname + '/web/js',
            filename: 'bundle.js'
        },
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                    query: {
                        babelrc: false,
                        presets: ['env', 'react'],
                        plugins: [
                            'transform-decorators-legacy',
                            'transform-object-rest-spread'
                        ]
                    }
                }
            ],

        },
        plugins: [
            new webpack.DefinePlugin({
              'process.env':{
                'NODE_ENV': JSON.stringify('production')
              }
            }),
            new webpack.optimize.UglifyJsPlugin({
              compress:{
                warnings: true
              }
            }),
        ]
    }

} else {

    module.exports = {
        entry: __dirname + '/src/client/index.js',
        output: {
            path: __dirname + '/web/js',
            filename: 'bundle.js'
        },
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                    query: {
                        babelrc: false,
                        presets: ['env', 'react'],
                        plugins: [
                            'transform-decorators-legacy',
                            'transform-object-rest-spread'
                        ]
                    }
                }
            ],

        }
    }

}
