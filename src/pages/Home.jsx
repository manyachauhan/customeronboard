
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const scrollToProducts = () => {
    document.getElementById('products-section').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="home-page">
      <div className="background-video-wrapper">
        <iframe
          className="background-video"
          src="https://www.youtube.com/embed/P1mGETZUQrM?autoplay=1&mute=1&loop=1&playlist=P1mGETZUQrM"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="Background Video"
        ></iframe>
        <div className="video-overlay">
          <div className="video-content">
            <h1 className="main-heading">Learning KYC and AIML Compliance Solution</h1>
            <p>
              Our advanced AI and machine learning solutions streamline the KYC process, ensuring compliance and efficiency.
            </p>
            <div className="features">
              <p>• AI-Driven Verification</p>
              <p>• Comprehensive Compliance</p>
              <p>• Secure and Efficient</p>
            </div>
            <button className="demo-button" onClick={scrollToProducts}>
              Get Free Demo <FaArrowRight />
            </button>
          </div>
        </div>
      </div>

      <div className="docpass-section">
        <div className="docpass-content">
          <div className="docpass-text">
            <h2>DocPass KYC Web Application</h2>
            <p>DocPass provides a seamless and efficient KYC process for your users. Leverage our advanced technology to ensure compliance and security.</p>
            <div className="docpass-features">
              <p>• Easy Integration</p>
              <p>• Real-time Verification</p>
              <p>• Comprehensive Reports</p>
            </div>
            <button className="live-demo-button">Live Demo</button>
          </div>
          <div className="docpass-image">
            <img src="https://www.idenfy.com/wp-content/uploads/2022/06/Automated-ID-Verification2-opti.png" alt="DocPass" />
          </div>
        </div>
      </div>

      <div className="why-ckyc-section">
        <h2>Why Do We Need CKYC?</h2>
        <p>CKYC (Central Know Your Customer) streamlines the KYC process, reducing redundancy and enhancing efficiency. It provides a central repository of KYC records accessible to all financial institutions, ensuring a single, unified approach to KYC compliance.</p>
        <div className="why-ckyc-features">
          <p>• Centralized Data Repository</p>
          <p>• Reduced Redundancy</p>
          <p>• Enhanced Efficiency</p>
        </div>
      </div>

      <div className="for-every-industry-section">
        <h2>For Every Industry</h2>
        <p>Digital identity verification technology will help you grow your business.</p>
        <div className="industry-examples">
          <div className="industry">
            <img src="https://img.freepik.com/premium-vector/kyc-know-your-customer-idea-business-identification-finance-safety_100456-10462.jpg" alt="Banking" />
            <div className="industry-content">
              <h3>KYC</h3>
              <p>Secure and streamline your banking operations with advanced KYC solutions.</p>
            </div>
          </div>
          <div className="industry">
            <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/verified-drivers-3951660-3275623.png" alt="Driver Verification" />
            <div className="industry-content">
              <h3>Driver Verification</h3>
              <p>Ensure compliance and security in your crypto KYC technology.</p>
            </div>
          </div>
          <div className="industry">
            <img src="https://t3.ftcdn.net/jpg/04/14/06/58/360_F_414065827_tTTiPrwO0N01xIXx3Q2KRqY3ZtxWgI6P.jpg" alt="Transport" />
            <div className="industry-content">
              <h3>Transport</h3>
              <p>Enhance your travel services by verifying customer identities seamlessly.</p>
            </div>
          </div>
          <div className="industry">
            <img src="https://img.favpng.com/0/10/19/computer-icons-education-icon-design-academic-degree-academic-certificate-png-favpng-7puiesH5DVCb748zAuTmEwatr.jpg" alt="Education" />
            <div className="industry-content">
              <h3>Education</h3>
              <p>Protect patient data and ensure secure access to healthcare services.</p>
            </div>
          </div>
        </div>
      </div>

      <div id="products-section" className="products-section">
        <h2 className="products-title">Our Products</h2>
        <div className="products">
          <div className="product">
            <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/identity-verification-10262921-8309955.png" alt="Product 1" />
            <h3>Id Verification API</h3>
            <p>Detailed extraction of data and validation of data.</p>
            <Link to="/products/id-verification" className="learn-more-button">Learn More</Link>
          </div>
          <div className="product">
            <img src="https://cdn-icons-png.flaticon.com/512/4841/4841490.png" alt="Product 2" />
            <h3>Biometric API</h3>
            <p>Detailed description of Biometric product with required use case and functionality.</p>
            <Link to="/products/biometric" className="learn-more-button">Learn More</Link>
          </div>
          <div className="product">
            <img src="https://docupass.app/asset/signature.svg" alt="Product 3" />
            <h3>Docupass</h3>
            <p>Detailed description of Docpass with necessary required docpass section and changes.</p>
            <Link to="/products/docupass" className="learn-more-button">Learn More</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
























