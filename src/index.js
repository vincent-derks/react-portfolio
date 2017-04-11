import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

// Components
import App from './components/app'
import Work from './components/work'
import NoMatch from './components/noMatch'
import Home from './components/home'
import About from './components/about'
import Contact from './components/contact'

// Main reducer
import rootReducer from './reducers'

// Create the main store
let store = createStore(rootReducer, window.devToolsExtension && window.devToolsExtension(), applyMiddleware(thunk))

// Fire on route change
const routeChange = () => {

}

ReactDOM.render((
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App} onChange={routeChange}>
                <IndexRoute component={Home}></IndexRoute>
                <Route path="/work" component={Work}></Route>
                <Route path="/about" component={About}></Route>
                <Route path="/contact" component={Contact}></Route>
                <Route path="*" component={NoMatch}/>
            </Route>
        </Router>
    </Provider>
), document.getElementById('app'))
