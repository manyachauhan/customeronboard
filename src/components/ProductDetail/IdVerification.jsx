
import React from 'react';
import './IdVerification.css';

const IdVerification = () => {
  return (
    <div className="id-verification-page">
      <header className="id-verification-header">
        <h1>ID Verification API</h1>
        <p>Advanced identity verification with AI-driven technology</p>
        <div className="buttons">
          <button className="demo-button">Get Free Demo</button>
          <button className="trial-button">Start Free Trial</button>
        </div>
      </header>

      <section className="id-verification-section id-verification-overview">
        <div className="text-content">
          <h2>Overview</h2>
          <p>
            Our ID Verification API provides advanced identity verification services using cutting-edge AI technology. Ensure the authenticity of IDs, streamline your KYC process, and comply with regulatory requirements.
          </p>
        </div>
        {/* <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/identity-verification-10262921-8309955.png" alt="ID Verification Overview" /> */}
        <img src="https://www.klippa.com/wp-content/uploads/2023/04/document-verification-ID-use-case-1.png" alt="ID Verification Overview" />
      </section>

      <section className="id-verification-section id-verification-features">
      <img src="https://shuftipro.com/wp-content/uploads/n-img-document-verification-banner.png" alt="ID Verification Features" />
        <div className="text-content">
          <h2>Features</h2>
          <ul>
            <li>Real-time ID validation</li>
            <li>Advanced data extraction</li>
            <li>Secure and compliant verification</li>
            <li>Multi-language support</li>
            <li>Easy integration</li>
          </ul>
        </div>
        {/* <img src="https://cdn-icons-png.flaticon.com/512/1231/1231093.png" alt="ID Verification Features" /> */}
      </section>

      <section className="id-verification-section id-verification-benefits">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpUvLYOUfRLCUyxWyIfCWGVBylJyde9ZniRkZY0yCXMgH_ul8tqdbAG6RQ6Or0D0jJM4Q&usqp=CAU" alt="ID Verification Benefits" />
        <div className="text-content">
          <h2>Benefits</h2>
          <p>
            Implementing our ID Verification API provides numerous benefits including enhanced security, reduced fraud, and streamlined compliance processes.
          </p>
        </div>
        {/* <img src="https://files.blueprism.com/uploads/resources/document-automation-hero.png" alt="ID Verification Benefits" /> */}
      </section>
    </div>
  );
};

export default IdVerification;
