// src/components/Footer.js
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <style jsx>{`
        .site-footer {
          margin-top: 60px;
          padding: 20px 0;
          text-align: center;
          font-family: 'Roboto Mono', monospace;
          font-size: 0.8rem;
          color: #555;
          /* Garis pemisah di atas footer */
          border-top: 1px dashed #aaa; 
          width: 100%;
        }

        .footer-text {
            margin: 5px 0;
        }

        .disclaimer {
            font-size: 0.75rem;
            margin-top: 10px;
            color: #777;
        }

        .developer-link {
            color: #333;
            text-decoration: none;
            font-weight: bold;
        }
        .developer-link:hover {
            text-decoration: underline;
        }
      `}</style>

      <div className="footer-content">
        <p className="footer-text">
          &copy; {currentYear} Jejak Wakil Rakyat. All Rights Reserved.
        </p>
        <p className="footer-text">
          Made with by Silo Kusuma
        </p>
        <p className="disclaimer">
          **Disclaimer**: This entire website is open source, and all data on this site is original as provided by reliable sources.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
