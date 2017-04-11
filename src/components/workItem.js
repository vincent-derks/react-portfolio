import React, { Component } from 'react'
import _ from 'lodash'
import TechniqueList from './techniqueList'

export default class WorkItem extends Component {

    toggleItem(event){
        const item = this.refs.item
        if(item.classList == 'open') {
            item.classList = ''
        } else {
            item.classList = 'open'
        }
    }

    render(){
        const item = this.props.item
        return(
            <li ref="item" onClick={this.toggleItem.bind(this)}>
                {/* <div className="thumbnail"><img src={item.logo} /></div> */}
                <div className="workItemContent">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                </div>
                <TechniqueList techniques={item.techniques} />
            </li>
        )
    }
}
