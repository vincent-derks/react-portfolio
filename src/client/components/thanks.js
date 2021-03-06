import React, { Component } from 'react'
import { connect } from 'react-redux'

import Logo from './logo'

class Thanks extends Component {
    render(){
        const { thanks } = this.props
        if(thanks){
            return (
                <div>
                    <Logo/>
                    <h1>{thanks.title}</h1>
                    <p dangerouslySetInnerHTML={{ __html: thanks.content}} />
                </div>
            )
        }
        return <div>Loading content...</div>
    }
}

export default connect(state => {
    return {
        thanks: state.contentReducer.content.thanks
    }
})(Thanks)