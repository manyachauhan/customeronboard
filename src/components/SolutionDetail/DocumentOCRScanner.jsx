

import React from 'react';
import './DocumentOCRScanner.css'; 

const DocumentOCRScanner = () => {
    return (
        <div className="document-ocr-scanner">
          
            <main>
                <section className="hero">
                    <img src="https://www.dynamsoft.com/webres/wwwroot/images/DCV/flutter-banner.png" alt="OCR Scanner Banner" />
                </section>
                <section className="features">
                    <h2>Key Features</h2>
                    <ul>
                        <li>High Accuracy Text Extraction</li>
                        <li>Supports Various Document Types</li>
                        <li>Easy Integration</li>
                        <li>Fast Processing</li>
                    </ul>
                </section>
                <section className="cta">
                    <h2>Ready to Get Started?</h2>
                    <button>Try Now</button>
                </section>
            </main>
            <footer>
                <p>&copy; 2024 Your Company. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default DocumentOCRScanner;

