
import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.subject) newErrors.subject = 'Subject is required';
    if (!formData.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
     
      setSuccess(true);
      setErrors({});
    }
  };

  return (
    <Container className="contact-container">
      <Row className="justify-content-md-center">
        <Col md="8">
          <div className="contact-header">
            <h1>Contact Us</h1>
            <div className="breadcrumb">
              <Link to="/">Home</Link> &gt; <span>Contact Us</span>
            </div>
          </div>
          <div className="contact-box">
            <h2>Send Us a Message</h2>
            {success ? (
              <Alert variant="success">Message sent successfully!</Alert>
            ) : (
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="name" className="mb-3">
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Name*"
                    value={formData.name}
                    onChange={handleChange}
                    isInvalid={!!errors.name}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.name}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="email" className="mb-3">
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Email*"
                    value={formData.email}
                    onChange={handleChange}
                    isInvalid={!!errors.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="subject" className="mb-3">
                  <Form.Control
                    type="text"
                    name="subject"
                    placeholder="Subject*"
                    value={formData.subject}
                    onChange={handleChange}
                    isInvalid={!!errors.subject}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.subject}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="message" className="mb-3">
                  <Form.Control
                    as="textarea"
                    name="message"
                    placeholder="Message*"
                    value={formData.message}
                    onChange={handleChange}
                    isInvalid={!!errors.message}
                    rows={5}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.message}
                  </Form.Control.Feedback>
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100">
                  Send Message
                </Button>
              </Form>
            )}
          </div>
        </Col>
      </Row>
      <Row className="justify-content-md-center contact-info-row">
        <Col md="8">
          <div className="contact-info">
            <h2>Contact Information</h2>
            <p><strong>Email:</strong> support@example.com</p>
            <p><strong>Phone:</strong> +1 234 567 890</p>
            <p><strong>Address:</strong> 1234 Example St, City, Country</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;