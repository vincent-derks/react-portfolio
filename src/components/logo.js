import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Logo extends Component {
    render(){
        return (
            <Link to="/"><img src="/images/vincent-derks.svg" className="logo__static" alt="Vincent Derks | FrontEnd Develop" /></Link>
        )
    }
}