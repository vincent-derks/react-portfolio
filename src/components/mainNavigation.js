import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import * as Actions from './../actions'

@connect(state => {
    return {
        menuStatus: state.appReducer.menuOpen
    }
})

export default class MainNavigation extends Component {

    toggleMenu(e){
        this.props.dispatch(Actions.toggleMenu())
    }

    render(){
        const classNames = this.props.menuStatus ? 'mainNav open' : 'mainNav closed'
        return(
            <nav className={classNames}>
                <ul>
                    <li style={{ transitionDelay: '0.2s'}}><Link onClick={this.toggleMenu.bind(this)} to="/"><i className="fa fa-home" aria-hidden="true"></i> Home</Link></li>
                    <li style={{ transitionDelay: '0.25s'}}><Link onClick={this.toggleMenu.bind(this)} to="/work"><i className="fa fa-briefcase" aria-hidden="true"></i> Work</Link></li>
                    <li style={{ transitionDelay: '0.3s'}}><Link onClick={this.toggleMenu.bind(this)} to="/about"><i className="fa fa-male" aria-hidden="true"></i> About me</Link></li>
                    <li style={{ transitionDelay: '0.35s'}}><Link onClick={this.toggleMenu.bind(this)} to="/contact"><i className="fa fa-envelope" aria-hidden="true"></i> Contact me</Link></li>
                </ul>
            </nav>
        )
    }
}