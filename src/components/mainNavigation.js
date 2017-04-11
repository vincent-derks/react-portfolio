import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import * as Actions from './../actions'

class MainNavigation extends Component {

    toggleMenu(e){
        this.props.dispatch(Actions.toggleMenu())
    }

    render(){
        const classNames = this.props.menuStatus ? 'mainNav open' : 'mainNav closed'
        return(
            <nav className={classNames}>
                <ul>
                    <li><Link onClick={this.toggleMenu.bind(this)} to="/"><i className="fa fa-home" aria-hidden="true"></i> Home</Link></li>
                    <li><Link onClick={this.toggleMenu.bind(this)} to="work"><i className="fa fa-briefcase" aria-hidden="true"></i> Work</Link></li>
                    <li><Link onClick={this.toggleMenu.bind(this)} to="about"><i className="fa fa-male" aria-hidden="true"></i> About me</Link></li>
                    <li><Link onClick={this.toggleMenu.bind(this)} to="contact"><i className="fa fa-envelope" aria-hidden="true"></i> Contact me</Link></li>
                    <li className="toggleSpacer"></li>
                </ul>
            </nav>
        )
    }
}

export default connect(
    state => ({
        menuStatus: state.appReducer.menuOpen
    })
)(MainNavigation)
