import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as Actions from './../actions'

@connect((state)=>{
    return {
        menuStatus: state.appReducer.menuOpen
    }
})

export default class ToggleMenu extends Component {

    toggleMenu(e){
        this.props.dispatch(Actions.toggleMenu())
    }

    render() {
        let icon = this.props.menuStatus ? <i className="fa fa-times" aria-hidden="true"></i> : <i className="fa fa-bars" aria-hidden="true"></i>
        return (
            <a className="toggleMenu" onClick={this.toggleMenu.bind(this)}>{icon}</a>
        )
    }

}
