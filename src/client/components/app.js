import React, { Component } from 'react'
import _ from 'lodash'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import * as Actions from './../actions'
import ParallaxInit from './../libs/parallax'

// Components
import ToggleMenu from './toggleMenu'
import MainNavigation from './mainNavigation'

export default class App extends Component {

    constructor(props){
        super(props)
        this.body = document.querySelector('body')
    }

    componentWillMount(){
        const preloader = document.getElementById('preloader-wrapper')
        if(preloader) preloader.classList.add('fadeOut')
        setTimeout(()=>{
            preloader.parentNode.removeChild(preloader)
        }, 500)

        this.props.dispatch(Actions.loadContent(this.props.dispatch))
    }

    componentDidMount(){
        const scene = document.getElementById('scene')
        if(scene) {
            ParallaxInit()
            const parallax = new Parallax(scene)
        }
    }

    setRandomColor(){
        const colors = ['blue', 'green', 'red'].filter(color => color !== this.body.getAttribute('data-color')),
              rand = Math.round(Math.random()),
              randColor = colors[rand]
        this.body.setAttribute('data-color', randColor)
    }

    render(){
        this.setRandomColor()
        window.scrollTo(0, 0)
        document.body.scrollTop = 0;
        return(
            <ReactCSSTransitionGroup
                transitionName="loadPage"
                transitionAppear={true}
                transitionEnter={true}
                transitionLeave={true}
                transitionEnterTimeout={0}
                transitionAppearTimeout={0}
                transitionLeaveTimeout={0}
            >
                <ul id="scene">
                    <li className="layer" data-depth="0.10"><div/></li>
                </ul>
                    <ToggleMenu />
                    <MainNavigation />
                    <div className="mainContent">
                        <ReactCSSTransitionGroup transitionName="mainContentWrapper" transitionEnterTimeout={0} transitionAppearTimeout={0} transitionLeaveTimeout={200} >
                            {this.props.children && React.cloneElement(this.props.children, { key: _.uniqueId() })}
                        </ReactCSSTransitionGroup>
                    </div>
            </ReactCSSTransitionGroup>
        )
    }

}