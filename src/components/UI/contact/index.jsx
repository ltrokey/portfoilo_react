import { useState } from "react";
import { emailValidate } from "../../utils/helper";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");

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
    } else {
      setEmail(inputValue);
    }
  };

  return (
    <Form name="contact-form" method="POST">
      {/* Added for Netlify */}
      <input type="hidden" name="form-name" value="contact" />

      <Form.Group controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="First & Last Name"
          name="name"
          required
          onChange={handleChange}
          onBlur={handleNameBlur}
        />
        {nameError && <div className="error-message">{nameError}</div>}
      </Form.Group>

      <Form.Group controlId="formEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Your Email"
          name="email"
          required
          onChange={handleChange}
          onBlur={handleEmailBlur}
        />
        {emailError && <div className="error-message">{emailError}</div>}
      </Form.Group>

      <Form.Group controlId="formMessage">
        <Form.Label>Message</Form.Label>
        <Form.Control
          as="textarea"
          rows={5}
          placeholder="Your Message"
          name="message"
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Send
      </Button>
    </Form>
  );
}
