require('babel-register')({
    presets: ['react']
})

var express = require('express')
var React = require('react')
var ReactDOMServer = require('react-dom/server')
var MainComponent = require('./MainComponent')

const App = express()

App.use(express.static('web'))
App.get('*/*', (req, res) => {
    const html = ReactDOMServer.renderToString(
        React.createElement(MainComponent)
    )
    res.send(html)
})

const Port = 3000

App.listen(Port, () => {
    console.log(`listening on http://localhost:${Port}`)
})