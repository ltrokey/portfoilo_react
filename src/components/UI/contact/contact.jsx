import { useState } from "react";
import { emailValidate } from "../../utils/helper";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleNameBlur = () => {
    if (!name.trim()) {
      setNameError("Invalid - Please enter your name.");
    } else {
      setNameError("");
    }
  };

  const handleEmailBlur = () => {
    if (!email.trim()) {
      setEmailError("Invalid - Please enter your Email");
    } else if (!emailValidate(email)) {
      setEmailError("Oops 🤔, Please check your email address");
    } else {
      setEmailError("");
    }
  };

  const handleChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "name") {
      setName(inputValue);
    } else if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "message") {
      setMessage(inputValue);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!emailValidate(email) || !name) {
      alert("Invalid entry, please check email and name.");
      return;
    }

    setSuccess(true);

    setName("");
    setEmail("");
    setMessage("");
    setNameError("");
    setEmailError("");
  };
  return (
    <Form name="contact" method="POST" onSubmit={handleSubmit}>
      {/* Added for Netlify */}
      <input type="hidden" name="form-name" value="contact" />

      <Form.Group controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          value={name}
          type="text"
          placeholder="First & Last Name"
          name="name"
          onChange={handleChange}
          onBlur={handleNameBlur}
          required
        />
        {nameError && <div className="error-message">{nameError}</div>}
      </Form.Group>

      <Form.Group controlId="formEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          value={email}
          type="email"
          placeholder="Your Email"
          name="email"
          onChange={handleChange}
          onBlur={handleEmailBlur}
          required
        />
        {emailError && <div className="error-message">{emailError}</div>}
      </Form.Group>

      <Form.Group controlId="formMessage">
        <Form.Label>Message</Form.Label>
        <Form.Control
          value={message}
          as="textarea"
          rows={5}
          placeholder="Your Message"
          name="message"
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Send
      </Button>

      {success && (
        <div className="success-alert">
          <p>Message sent!</p>
          <p>I look forward to connecting with you!</p>
        </div>
      )}
    </Form>
  );
}
