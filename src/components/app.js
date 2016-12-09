import React, { Component } from 'react'
import _ from 'lodash'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

// Components
import ToggleMenu from './toggleMenu'
import MainNavigation from './mainNavigation'


export default class App extends Component {

    componentWillMount(){
        const preloader = document.getElementById('preloader-wrapper')
        preloader.classList = 'fadeOut'
        setTimeout(()=>{
            preloader.parentNode.removeChild(preloader)
        }, 500)
    }

    render(){
        return(
            <ReactCSSTransitionGroup
                transitionName="loadPage"
                transitionAppear={true}
                transitionAppearTimeout={1000}
                transitionEnter={false}
                transitionLeave={false}
            >
                <div>
                    <ToggleMenu />
                    <MainNavigation />
                    <div className="mainContent">
                        <ReactCSSTransitionGroup transitionName="mainContentWrapper" transitionEnterTimeout={200} transitionLeaveTimeout={200} >
                            {React.cloneElement(this.props.children, { key: _.uniqueId() })}
                        </ReactCSSTransitionGroup>
                    </div>
                </div>
            </ReactCSSTransitionGroup>
        )
    }

}
