require('babel-register')({
    presets: ['react']
})

let nodemailer = require('nodemailer')
let express = require('express')
let HtmlTemplate = require('./HtmlTemplate')
let bodyParser = require('body-parser')
let handleMail = require('./handleMail')

const App = express()

App.use(express.static('web'))
App.use(bodyParser.json())

App.post('/handle-contact-form', (req, res) => {
    handleMail(req, res)
})

App.get('*', (req, res) => {
    res.send(HtmlTemplate())
})

const Port = 3000

App.listen(Port, () => {
    console.log(`listening on http://localhost:${Port}`)
})