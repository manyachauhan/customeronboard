
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import IdVerification from './components/ProductDetail/IdVerification';
import Biometric from './components/ProductDetail/Biometric';
import Docupass from './components/ProductDetail/Docupass';
import Contact from './components/Contact/Contact';

import DocumentOCRScanner from './components/SolutionDetail/DocumentOCRScanner';
import IdentityVerification from './components/SolutionDetail/IdentityVerification';
import DocumentAuthentication from './components/SolutionDetail/DocumentAuthentication';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products/id-verification" element={<IdVerification />} />
        <Route path="/products/biometric" element={<Biometric />} />
        <Route path="/products/docupass" element={<Docupass />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/solutions/document-ocr-scanner" element={<DocumentOCRScanner />} />
        <Route path="/solutions/identity-verification" element={<IdentityVerification />} />
        <Route path="/solutions/document-authentication" element={<DocumentAuthentication />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
