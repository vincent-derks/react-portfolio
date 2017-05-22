import React, { Component } from 'react'

export default class NoMatch extends Component {
    render(){
        return(
            <div>
                <img src="/images/vincent-derks.svg" className="logo__static" alt="Vincent Derks | FrontEnd Develop" />
                <h1>404 - no route found</h1>
            </div>
        )
    }
}
