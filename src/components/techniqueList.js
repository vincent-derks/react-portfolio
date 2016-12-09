import React, { Component } from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import ReactTooltip from 'react-tooltip'

@connect((state)=>{
    return {
        techniqueLogos: state.appReducer.techniqueLogos
    }
})

export default class TechniqueList extends Component {

    getTechniqueLogo(technique){
        return this.props.techniqueLogos[technique]
    }

    render(){
        return(
            <ul className="techniqueList">
                {this.props.techniques.map(technique => {
                    const techniqueNiceName = technique === 'wordpress' ? 'WordPress' : technique.charAt(0).toUpperCase() + technique.slice(1)
                    return <li data-tip={techniqueNiceName} key={_.uniqueId()}><span className={this.getTechniqueLogo(technique)}></span><ReactTooltip class="tooltip" type="info" effect="solid"/></li>
                })}
            </ul>
        )
    }

}
