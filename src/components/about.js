import React, { Component } from 'react'
import { connect } from 'react-redux'

import Logo from './logo'

@connect(state => {
    return {
        about: state.contentReducer.content.about
    }
})

export default class About extends Component {
    render(){
        const { about } = this.props
        if(about){
            return (
                <div>
                    <Logo/>
                    <h1>{about.title}</h1>
                    <p dangerouslySetInnerHTML={{ __html: about.content}} />
                </div>
            )
        }
        return <div>Loading content...</div>
    }
}
