import React, { Component } from 'react'

export default class Home extends Component {
    render(){
        return(
            <div>
                <h1>Vincent Derks<br/>*<br/> FrontEnd Developer</h1>
                <ul className="lovesList">
                    <li>ReactJS fanatic</li>
                    <li>*</li>
                    <li>Loves WordPress (<span style={{opacity: 0.6}}>&hearts;</span> WP REST API)</li>
                    <li>*</li>
                    <li>Everything new and FrontEnd related</li>
                    <li>*</li>
                    <li>A good sandwich can make my day</li>
                    <li>*</li>
                    <li>Flyfishing</li>
                </ul>
            </div>
        )
    }
}
