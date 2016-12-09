module.exports = {
    entry: './src/index.js',
    output: {
        path: './web/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    babelrc: false,
                    presets: [
                        'es2015',
                        'stage-0',
                        'react'
                    ],
                    plugins: [
                        'transform-decorators-legacy',
                        'transform-object-rest-spread'
                    ]
                }
            }
        ],

    }
}
