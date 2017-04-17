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
        return(
            <div>
                <h1>A selection of my work</h1>
                <ul className="workList">{this.renderWork()}</ul>
            </div>
        )
    }
}

export default connect(
    state => ({
        content: state.contentReducer.content.work
    })
)(Work)
