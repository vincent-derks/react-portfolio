import React, { Component } from 'react'
import axios from 'axios'

import Logo from './logo'

export default class Contact extends Component {
    
    constructor(props){
        super(props)
        this.submitForm = this.submitForm.bind(this)
        this.handleFormInputChange = this.handleFormInputChange.bind(this)
        this.state = { form: {} }
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
        axios.post('/contact-form/handle-contact-form.php', formData)
        .then(response => {
            if(response.data == true) this.props.router.push('/thanks')
        })
    }

    render(){
        return(
            <div>
                <Logo />
                <h1>Contact me</h1>
                <p>Drop me an <a href="mailto:vincent@vderks.online">email</a></p>
                <p>Or use this contact form</p>
                <form className="form" onSubmit={this.submitForm}>
                    <input className="form-control" type="text" placeholder="Your name" name="name" onChange={this.handleFormInputChange} />
                    <input className="form-control" type="email" placeholder="Your email" name="email" onChange={this.handleFormInputChange} />
                    <textarea className="form-control" placeholder="Your message" name="message" onChange={this.handleFormInputChange} />
                    <button type="submit" value="Send message">Send message</button>
                </form>
            </div>
        )
    }
}
