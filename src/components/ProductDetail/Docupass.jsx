
import React from 'react';
import './IdVerification.css'; // Reuse the same CSS file

const DocuPass = () => {
  return (
    <div className="id-verification-page">
      <header className="id-verification-header">
        <h1>DocuPass Product</h1>
        <p>Advanced document verification with AI-driven technology</p>
        <div className="buttons">
          <button className="demo-button">Get Free Demo</button>
          <button className="trial-button">Start Free Trial</button>
        </div>
      </header>

      <section className="id-verification-section id-verification-overview">
        <div className="text-content">
          <h2>Overview</h2>
          <p>
            Our DocuPass product provides advanced document verification services using cutting-edge AI technology. Ensure the authenticity of documents, streamline your KYC process, and comply with regulatory requirements.
          </p>
        </div>
        <img src="https://docupass.app/asset/signature.svg" alt="DocuPass Overview" />
      </section>

      <section className="id-verification-section id-verification-features">
        <img src="https://cdn-icons-png.flaticon.com/512/1231/1231093.png" alt="DocuPass Features" />
        <div className="text-content">
          <h2>Features</h2>
          <ul>
            <li>Real-time document validation</li>
            <li>Advanced data extraction</li>
            <li>Secure and compliant verification</li>
            <li>Multi-language support</li>
            <li>Easy integration</li>
          </ul>
        </div>
      </section>

      <section className="id-verification-section id-verification-benefits">
        <img src="https://files.blueprism.com/uploads/resources/document-automation-hero.png" alt="DocuPass Benefits" />
        <div className="text-content">
          <h2>Benefits</h2>
          <p>
            Implementing our DocuPass product provides numerous benefits including enhanced security, reduced fraud, and streamlined compliance processes.
          </p>
        </div>
      </section>
    </div>
  );
};

export default DocuPass;

