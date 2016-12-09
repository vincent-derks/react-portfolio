import React, { Component } from 'react'
import { connect } from 'react-redux'
import WorkItem from './workItem'
import _ from 'lodash'

@connect((state)=>{
    return {
        content: state.contentReducer.content.work
    }
})

export default class Work extends Component {

    toggleItem(event){
        console.log('clicked')
    }

    renderWork(){
        return this.props.content.map( item => {
            return (
                <WorkItem key={_.uniqueId()} item={item} />
            )
        })
    }
    render(){
        const work = this.renderWork()
        return(
            <div>
                <h1>A selection of my work</h1>
                <ul className="workList">{work}</ul>
            </div>
        )
    }
}
