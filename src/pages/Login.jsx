
import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
 import './Login.css';


const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.username) newErrors.username = 'Username is required';
    if (!formData.password) newErrors.password = 'Password is required';
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
    <Container className="login-container">
      <Row className="justify-content-md-center">
        <Col md="8">
          <div className="login-header">
            <h1>Welcome Back</h1>
            <p>Please enter your details.</p>
          </div>
          <div className="login-box">
            {success ? (
              <Alert variant="success">Login successful!</Alert>
            ) : (
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="username" className="mb-3">
                  <Form.Control
                    type="text"
                    name="username"
                    placeholder="Username*"
                    value={formData.username}
                    onChange={handleChange}
                    isInvalid={!!errors.username}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.username}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="password" className="mb-3">
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Password*"
                    value={formData.password}
                    onChange={handleChange}
                    isInvalid={!!errors.password}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.password}
                  </Form.Control.Feedback>
                </Form.Group>
                <Row className="align-items-center">
                  <Col xs="6">
                    <Form.Check type="checkbox" label="Remember me" />
                  </Col>
                  <Col xs="6" className="text-end">
                    <Link to="/forgot-password">Forgot password?</Link>
                  </Col>
                </Row>
                <Button variant="primary" type="submit" className="w-100 mt-3">
                  Login
                </Button>
              </Form>
            )}
            <div className="register-link">
              Don't have an account? <Link to="/register">Register</Link>
            </div>
          </div>
        </Col>
      </Row>
    
    </Container>
     
  );
};

export default Login;

