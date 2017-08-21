import React, { Component } from 'react'

class RegistrationForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    console.log('form is submitted. Email walue is', this.state.email)
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="e-mail"
          value={this.state.email}
          onChange={this.handleEmailChange}
        />
        <button>Save</button>
      </form>
    )
  }
}

export default RegistrationForm
