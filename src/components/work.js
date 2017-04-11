import React, { Component } from 'react'
import { connect } from 'react-redux'
import WorkItem from './workItem'
import _ from 'lodash'

class Work extends Component {

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

export default connect(
    state => ({
        content: state.contentReducer.content.work
    })
)(Work)
