require('babel-register')({
    presets: ['react']
})

let nodemailer = require('nodemailer')
let express = require('express')
let React = require('react')
let ReactDOMServer = require('react-dom/server')
let MainComponent = require('./MainComponent')
let bodyParser = require('body-parser')

const App = express()

App.use(express.static('web'))
App.use(bodyParser.json())

App.post('/handle-contact-form', (req, res) => {
    
    let response = {
        status: 'success',
        message: ''
    }

    if(!req.body || !req.body.name || !req.body.email || !req.body.message) {
        response.status = 'error'
        response.message = 'Not all fields are filled out'
        res.send(response)
    } else if(req.body.company) {
        // Simple honeypot to prevent spam
        response.status = 'error'
        response.message = 'Spam detected'
        res.send(response)
    } else {

        let transporter = nodemailer.createTransport({
            sendmail: true
        })

        let mailOptions = {
            from: '"'+req.body.name+'" <'+req.body.email+'>', // sender address
            to: 'vincent.derks@gmail.com', // list of receivers
            subject: 'Hello from my portfolio', // Subject line
            text: req.body.message, // plain text body
        }

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                response.status = 'error'
                response.message = error
            } else {
                response.status = 'success'
                response.message = 'Message send!'
            }
            res.send(response)
        })

    }

})

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