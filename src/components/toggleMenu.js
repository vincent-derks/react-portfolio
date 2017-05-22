import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as Actions from './../actions'

@connect((state, ownProps)=>{
    return {
        menuOpen: state.appReducer.menuOpen
    }
})

export default class ToggleMenu extends Component {

    toggleMenu(e){
        e.preventDefault()
        this.props.dispatch(Actions.toggleMenu())
    }

    render() {
        return (
            <a href="#" ref="toggleMenu" className={this.props.menuOpen ? 'toggleMenu open' : 'toggleMenu'} onClick={this.toggleMenu.bind(this)}><i className="bar"></i></a>
        )
    }

}

