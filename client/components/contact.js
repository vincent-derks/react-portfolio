import React, { Component } from 'react'
import axios from 'axios'

import Logo from './logo'

export default class Contact extends Component {
    
    constructor(props){
        super(props)
        this.submitForm = this.submitForm.bind(this)
        this.handleFormInputChange = this.handleFormInputChange.bind(this)
        this.state = { form: {}, error: '' }
    }

    handleFormInputChange(e){
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    submitForm(e){
        e.preventDefault()
        const formData = this.state.form
        axios.post('/handle-contact-form', formData)
        .then(response => {
            if(response.data.status == 'success') {
                this.setState({
                    error: ''
                }, () => this.props.router.push('/thanks'))
            }
            if(response.data.status == 'error') this.setState({ error: response.data.message })
        })
    }

    render(){
        return(
            <div>
                <Logo />
                <h1>Contact me</h1>
                <p>Drop me an <a href="mailto:vincent@vderks.online">email</a></p>
                <p>Or use this contact form</p>
                {this.state.error && <div className="warning"><p>Oops, seems like something went wrong:</p><p>{this.state.error}</p></div>}
                <form className="form" onSubmit={this.submitForm}>
                    <input className="form-control name" type="text" placeholder="Your name" name="name" onChange={this.handleFormInputChange} />
                    <input className="form-control email" type="email" placeholder="Your email" name="email" onChange={this.handleFormInputChange} />
                    <input className="form-control company" type="text" placeholder="Your company" name="company" onChange={this.handleFormInputChange} />
                    <textarea className="form-control" placeholder="Your message" name="message" onChange={this.handleFormInputChange} />
                    <button type="submit" value="Send message">Send message</button>
                </form>
            </div>
        )
    }
}
