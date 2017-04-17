import React, { Component } from 'react'
import _ from 'lodash'
import TechniqueList from './techniqueList'
import { TweenLite } from 'gsap'

export default class WorkItem extends Component {

    constructor(props){
        super(props)
        this.state = {
            open: false
        }
    }

    toggleItem(event){
        const circle = this.refs.item.getElementsByClassName('circle')[0]
        const moreContent = this.refs.moreContent
        const x = event.clientX - 20
        const y = event.clientY - 20

        moreContent.classList.toggle('open')
        circle.classList.toggle('open')
        this.setState({
            open: !this.state.open
        }, ()=>{
            if(this.state.open){
                circle.style.left = x + 'px'
                circle.style.top = y + 'px'
                TweenLite.to(circle, 0.6, { width: '300rem', height: '300rem'})
            } else {
                TweenLite.to(circle, 0.2, { width: '0rem', height: '0rem', top: y, left: x})
            }
        })
    }

    render(){
        const item = this.props.item
        return(
            <li ref="item" onClick={this.toggleItem.bind(this)}>
                <div className="workItemWrapper">
                {/* <div className="thumbnail"><img src={item.logo} /></div> */}
                    <div className="workItemContent">
                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                    </div>
                    <TechniqueList techniques={item.techniques} />
                    <div ref="moreContent" className="workItemMoreContent">
                        <div className="moreContent">
                            <h2 style={{transitionDelay: '0.2s'}}>{item.title}</h2>
                            <p style={{transitionDelay: '0.3s'}}>{item.text}</p>
                        </div>
                        <div className="circle"/>
                    </div>
                </div>
            </li>
        )
    }
}
