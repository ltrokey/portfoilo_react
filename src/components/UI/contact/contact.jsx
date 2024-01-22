import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function ContactForm() {
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
        />
      </Form.Group>

      <Form.Group controlId="formEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Your Email"
          name="email"
          required
        />
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
