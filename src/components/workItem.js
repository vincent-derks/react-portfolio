import React, { Component } from 'react'
import _ from 'lodash'
import TechniqueList from './techniqueList'
import { Link } from 'react-router'

export default class WorkItem extends Component {

    render(){

        const item = this.props.item
        return(
            <li ref="item">
                <Link to={`/work/${item.slug}`} className="workItemWrapper">
                    <div className="workItemContent">
                        <h3>{item.title}</h3>
                        <div dangerouslySetInnerHTML={{ __html: item.content}}/>
                    </div>
                    <TechniqueList techniques={item.techniques} />
                </Link>
            </li>
        )
    }
}
