import React, { useState, Component } from "react";
import axios from "axios";
import { ContactFormComponent, labelComponent } from "./contact.styles";
import ContactFormInput from "./contact-form.component";
import CustomButton from "../../components/custom-button/custom-button.component";

class ContactPage extends Component {
  // const [name, setName ] = useState('');
  // const [message, setMessage = useState('');
  // const [email, setEmail] = useState('');
  // const [sent, setSent]= useState('false');
  // const [buttonText, setButtontext] = useState('Send Message');

  state = {
    name: "",
    message: "",
    email: "",
    sent: false,
    buttonText: "Send Message"
  };

  resetForm = () => {
    this.setState({
      name: "",
      message: "",
      email: "",
      buttonText: "Message Sent"
    });
  };

  formSubmit = e => {
    e.preventDefault();

    this.setState({
      buttonText: "...sending"
    });

    let data = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    };

    axios
      .post("/email", data)
      .then(res => {
        this.setState({ sent: true }, this.resetForm());
        console.log("Message sent",data );
      })
      .catch(() => {
        console.log("Message not sent");
      });
  };

  render() {
    
    return (
      <ContactFormComponent>
        <h2> Contact Page</h2>
        <span>
          Send us a message and we will get back to you as soon as possible
        </span>
        <form onSubmit={e => this.formSubmit(e)}>
          <ContactFormInput
            type="text"
            name="name"
            value={this.state.name}
            onChange={e => this.setState({ name: e.target.value })}
            label="Name"
            required
          />
          <ContactFormInput
            type="text"
            name="email"
            value={this.state.email}
            onChange={e => this.setState({ email: e.target.value })}
            label="Email"
            required
          />
          <ContactFormInput
            type="text"
            name="message"
            value={this.state.message}
            onChange={e => this.setState({ message: e.target.value })}
            label="Message"
            required
          />
          <CustomButton type="submit">{this.state.buttonText}</CustomButton>
        </form>
      </ContactFormComponent>
    );
  }
}

export default ContactPage;
