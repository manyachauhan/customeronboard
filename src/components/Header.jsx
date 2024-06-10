

import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <img src="https://static.vecteezy.com/system/resources/previews/010/213/047/non_2x/kyc-letter-technology-logo-design-on-white-background-kyc-creative-initials-letter-it-logo-concept-kyc-letter-design-vector.jpg" alt="Logo" />
        </Link>
        <nav className="nav">
          <Link to="/" className="nav-link">Home</Link>
          <div className="nav-link dropdown">
            <span>Solutions</span>
            <div className="dropdown-content">
              <Link to="/solutions/document-ocr-scanner" className="dropdown-item">Document OCR Scanner</Link>
              <Link to="/solutions/identity-verification" className="dropdown-item">Identity Verification</Link>
              <Link to="/solutions/document-authentication" className="dropdown-item">Document Authentication</Link>
            </div>
          </div>
          <div className="nav-link dropdown">
            <span>Products</span>
            <div className="dropdown-content">
              <Link to="/products/id-verification" className="dropdown-item">Id Verification API</Link>
              <Link to="/products/biometric" className="dropdown-item">Biometric API</Link>
              <Link to="/products/docupass" className="dropdown-item">Docupass</Link>
            </div>
          </div>
          <Link to="/contact" className="nav-link">Contact</Link>
          <Link to="/about" className="nav-link">About</Link>
        </nav>
        <div className="header-actions">
          <Link to="/register" className="btn btn-primary">Register</Link>
          <Link to="/login" className="btn btn-secondary">Login</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
