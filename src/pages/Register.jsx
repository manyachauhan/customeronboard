
import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Register.css';



const Register = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    postcode: '',
    contactNumber: '',
    Company: '',  
    country: ''   
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = 'Passwords do not match';
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.address) newErrors.address = 'Address is required';
    if (!formData.city) newErrors.city = 'City is required';
    if (!formData.postcode) newErrors.postcode = 'Postcode is required';
    if (!formData.contactNumber) newErrors.contactNumber = 'Contact number is required';
    if (!formData.Company) newErrors.Company = 'Company/Organization is required';
    if (!formData.country) newErrors.country = 'Country is required'; 
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Perform API call to register user (replace with your API endpoint)
      setSuccess(true);
      setErrors({});
    }
  };

  return (
    <Container className="register-container">
      <Row className="justify-content-md-center">
        <Col md="8">
          <div className="register-header">
            <h1>Create Account</h1>
            <div className="breadcrumb">
              <Link to="/">Home</Link> &gt; <span>Create Account</span>
            </div>
          </div>
          <div className="register-box">
            <h2>Create your free account</h2>
            <p>Get started to create your account!</p>
            {success ? (
              <Alert variant="success">Registration successful!</Alert>
            ) : (
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="email" className="mb-3">
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder='Email*'
                    value={formData.email}
                    onChange={handleChange}
                    isInvalid={!!errors.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>
                <Row>
                  <Col>
                    <Form.Group controlId="password" className="mb-3">
                      <Form.Control
                        type="password"
                        name="password"
                        placeholder='Password*'
                        value={formData.password}
                        onChange={handleChange}
                        isInvalid={!!errors.password}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.password}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="confirmPassword" className="mb-3">
                      <Form.Control
                        type="password"
                        name="confirmPassword"
                        placeholder='Confirm Password*'
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        isInvalid={!!errors.confirmPassword}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.confirmPassword}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group controlId="firstName" className="mb-3">
                      <Form.Control
                        type="text"
                        name="firstName"
                        placeholder='First Name*'
                        value={formData.firstName}
                        onChange={handleChange}
                        isInvalid={!!errors.firstName}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.firstName}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="lastName" className="mb-3">
                      <Form.Control
                        type="text"
                        name="lastName"
                        placeholder='Last Name*'
                        value={formData.lastName}
                        onChange={handleChange}
                        isInvalid={!!errors.lastName}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.lastName}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group controlId="Company" className="mb-3">
                  <Form.Control
                    type="text"
                    name="Company"
                    placeholder='Company/Organization*'
                    value={formData.Company}
                    onChange={handleChange}
                    isInvalid={!!errors.Company}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.Company}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="address" className="mb-3">
                  <Form.Control
                    type="text"
                    name="address"
                    placeholder='Address*'
                    value={formData.address}
                    onChange={handleChange}
                    isInvalid={!!errors.address}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.address}
                  </Form.Control.Feedback>
                </Form.Group>
                <Row>
                  <Col>
                    <Form.Group controlId="country" className="mb-3">
                      <Form.Control
                        type="text"
                        name="country"
                        placeholder='Country*'
                        value={formData.country}
                        onChange={handleChange}
                        isInvalid={!!errors.country}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.country}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="city" className="mb-3">
                      <Form.Control
                        type="text"
                        name="city"
                        placeholder='City*'
                        value={formData.city}
                        onChange={handleChange}
                        isInvalid={!!errors.city}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.city}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="postcode" className="mb-3">
                      <Form.Control
                        type="text"
                        name="postcode"
                        placeholder='Postcode*'
                        value={formData.postcode}
                        onChange={handleChange}
                        isInvalid={!!errors.postcode}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.postcode}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group controlId="contactNumber" className="mb-3">
                  <Form.Control
                    type="text"
                    name="contactNumber"
                    placeholder='Contact Number*'
                    value={formData.contactNumber}
                    onChange={handleChange}
                    isInvalid={!!errors.contactNumber}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.contactNumber}
                  </Form.Control.Feedback>
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100">
                  Register Now
                </Button>
              </Form>
            )}
            <div className="login-link">
              Already have an account? <Link to="/login">Login</Link>
            </div>
          </div>
        </Col>
      </Row>
   
    </Container>
    

  );
};

export default Register;

