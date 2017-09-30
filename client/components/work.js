import React, { Component } from 'react'
import { connect } from 'react-redux'
import WorkItem from './workItem'
import _ from 'lodash'

import Logo from './logo'

@connect(state => {
    return {
        title: state.contentReducer.content.work.title,
        content: state.contentReducer.content.work.content,
        workItems: state.contentReducer.content.work.workItems
    }
})

export default class Work extends Component {

    renderWork(){
        return this.props.workItems.map( (item, i) => {
            return <WorkItem index={i} key={'workItem_'+i} item={item} />
        })
    }
    render(){
        return(
            <div>
                <Logo />
                <h1>{this.props.title}</h1>
                {this.props.content}
                <ul className="workList">{this.renderWork()}</ul>
            </div>
        )
    }
}
