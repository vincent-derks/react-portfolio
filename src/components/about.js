import React, { Component } from 'react'
import { connect } from 'react-redux'

@connect((state, ownProps) => {
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
                    <h1>{about.title}</h1>
                    {about.content}
                </div>
            )
        }
        return <div>Loading content...</div>
    }
}
