import React, { Component } from 'react'
import { connect } from 'react-redux'
import WorkItem from './workItem'
import _ from 'lodash'

import Logo from './logo'

@connect(state => {
    return {
        content: state.contentReducer.content.work
    }
})

export default class Work extends Component {

    renderWork(){
        return this.props.content.map( (item, i) => {
            return <WorkItem index={i} key={'workItem_'+i} item={item} />
        })
    }
    render(){
        return(
            <div>
                <Logo />
                <h1>A selection of my work</h1>
                <ul className="workList">{this.renderWork()}</ul>
            </div>
        )
    }
}
