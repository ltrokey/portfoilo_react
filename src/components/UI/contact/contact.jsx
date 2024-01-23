import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function ContactForm() {
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  // const validateEmail = (email) => {
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   return emailRegex.test(email);
  // };

  const handleBlur = (event, fieldName) => {
    switch (fieldName) {
      case "name":
        setNameError(!event.target.value);
        break;
      case "email":
        setEmailError(!event.target.value);
        break;
      case "message":
        setMessageError(!event.target.value);
        break;
      default:
        console.log(fieldName);
        break;
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
          onBlur={() => handleBlur("name")}
        />
        {nameError && <p style={{ color: "#a82435" }}>Name is required</p>}
      </Form.Group>

      <Form.Group controlId="formEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Your Email"
          name="email"
          required
          onBlur={() => handleBlur("email")}
        />
        {emailError && <p style={{ color: "#a82435" }}>Email is required</p>}
      </Form.Group>

      <Form.Group controlId="formMessage">
        <Form.Label>Message</Form.Label>
        <Form.Control
          as="textarea"
          rows={5}
          placeholder="Your Message"
          name="message"
          required
          onBlur={() => handleBlur("message")}
        />
        {messageError && (
          <p style={{ color: "#a82435" }}>Message is required</p>
        )}
      </Form.Group>

      <Button variant="primary" type="submit">
        Send
      </Button>
    </Form>
  );
}
