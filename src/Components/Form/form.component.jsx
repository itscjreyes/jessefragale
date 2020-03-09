import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      name: '', 
      email: '',
      message: ''
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <form className="test-mailing">
        <h3>Have a question? Send me a message!</h3>
        <div className="form-content">
          <input
            type="text"
            id="form-name"
            name="form-name"
            onChange={this.handleNameChange}
            placeholder="Name"
            required
            value={this.state.name}
          />
          <input
            type="email"
            id="form-email"
            name="form-email"
            onChange={this.handleEmailChange}
            placeholder="Email"
            required
            value={this.state.email}
          />
          <textarea
            id="form-message"
            name="form-message"
            onChange={this.handleMessageChange}
            placeholder="Message"
            required
            value={this.state.message}
          />
        </div>
        <input type="button" value="Send Message" className="btn btn--submit" onClick={this.handleSubmit} />
      </form>
    )
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value })
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value })
  }

  handleMessageChange(event) {
    this.setState({ message: event.target.value })
  }

  handleSubmit(event) {
    const templateId = 'template_R6HHxYQp';

    if (this.state.name && this.state.email && this.state.message !== '') {
      this.sendFeedback(templateId, { 
        message_html: this.state.message, 
        from_name: this.state.name, 
        from_email: this.state.email 
      })
    } else {
      console.log('form incomplete')
    }
  }

  sendFeedback(templateId, variables) {
    window.emailjs.send(
      'gmail', templateId,
      variables
    ).then(res => {
      console.log('Email successfully sent!')
      const formFields = document.querySelector('.form-content');
      formFields.innerHTML = "<p>Thank you for your message! I'll get back to you as soon as I can.</p>"
    })
      // Handle errors here however you like, or use a React error boundary
      .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
  }
}

export default Form;