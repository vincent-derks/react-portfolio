var React = require('react')
var Component = React.Component

class MainComponent extends Component {
    render(){
        return (
            <html>
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <title>Online portfolio of Vincent Derks</title>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
                <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
                <link href='/css/devicons.min.css' rel='stylesheet' />
                <link href="https://fonts.googleapis.com/css?family=Neuton" rel="stylesheet" />
                <link href="/css/custom-icons.css" rel="stylesheet" />
                <link href="/css/preloader.css" rel="stylesheet" />
                <link href="/css/style.css" rel="stylesheet" />
            </head>
            <body>
                <div id="preloader-wrapper">
                    <div className="md-preloader"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="30" width="30" viewBox="0 0 75 75"><circle cx="37.5" cy="37.5" r="33.5" strokeWidth="8"/></svg></div>
                </div>
                <div id="app" />
            <script src="/js/bundle.js" />
            </body>
            </html>
        )
    }
}

module.exports = MainComponent