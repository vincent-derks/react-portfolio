import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import Logo from './logo'

@connect((state, ownProps)=>{
    return {
        items: state.contentReducer.content.work.filter(item => item.slug == ownProps.params.item)
    }
})

export default class WorkSinlge extends Component {

    render(){
        const items = this.props.items
        if(items.length > 0){
            const item = items[0]
            return (
                <div>
                    <Link className="back-to-work" to="/work">
                        <i className="fa fa-chevron-left" aria-hidden="true"></i> Back to overview
                    </Link>
                    <Logo />
                    <h1>{item.title}</h1>
                    <img className="item__logo" src={'/'+item.logo} />
                    <div dangerouslySetInnerHTML={{ __html: item.content}} />
                </div>
            )
        }
        return <div>Loading content</div>
    }
}