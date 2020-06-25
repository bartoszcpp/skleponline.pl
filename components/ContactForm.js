import { Component } from "react";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      subject: "",
      email: "",
      message: "",
    };
  }

  render() {
    return (
      <div className="contact">
        <h2>Skontaktuj się z nami!</h2>
        <form className="form" action="/action_page.php">
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Imie"
            value={this.state.fname}
            onChange={(e) => this.setState({ fname: e.target.value })}
          />

          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Temat"
            value={this.state.subject}
            onChange={(e) => this.setState({ subject: e.target.value })}
          />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={(e) => this.setState({ email: e.target.value })}
          />
          <textarea
            id="message"
            name="message"
            placeholder="Wiadomość"
            onChange={(e) => this.setState({ message: e.target.value })}
            value={this.state.message}
          ></textarea>
          <button
            className="submit btn-mod btn-border btn-large"
            onClick={(e) => this.handleFormSubmit(e)}
          >
            WYŚLIJ WIADOMOŚĆ
          </button>
        </form>
      </div>
    );
  }

  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }

  handleSubmit(event) {}
}

export default ContactForm;
