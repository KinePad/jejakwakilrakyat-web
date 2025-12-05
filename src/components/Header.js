// src/components/Header.js
import React from 'react';

const Header = () => {
  const currentYear = new Date().getFullYear();

  return (
    <header className="main-header-design">
      <style jsx>{`
        /* --- Kontainer Utama Header --- */
        .main-header-design {
          text-align: center;
          margin: 60px 0 30px 0; /* Margin atas dan bawah disesuaikan */
          padding: 20px 0;
          width: 100%;
          max-width: 900px;
        }

        /* --- EST. 2025 Box --- */
        .est-box {
          display: inline-block;
          border: 2px solid #1a1a1a;
          padding: 5px 15px;
          margin-bottom: 20px;
          font-size: 0.9rem;
          font-family: 'Roboto Mono', monospace;
          font-weight: bold;
        }

        /* --- SEMOGA TIDAK LUPA Text --- */
        .main-title {
          font-size: 8vw; 
          line-height: 0.85; 
          font-weight: 900; 
          color: #1a1a1a;
          text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.1); 
        }

        @media (min-width: 900px) {
          .main-title {
            font-size: 72px; 
          }
        }
        
        /* --- Subtitle: AGAR YANG PENTING TETAP DIINGAT --- */
        .subtitle {
          font-family: 'Roboto Mono', monospace;
          font-size: 1rem;
          margin-top: 30px;
          color: #333;
          letter-spacing: 2px;
        }

        /* --- Garis Pemisah Tebal --- */
        .separator {
          width: 30%;
          border: none;
          border-bottom: 4px solid #1a1a1a;
          margin: 20px auto 0 auto;
        }
      `}</style>
      
      <div className="est-box">
        EST. {currentYear > 2025 ? currentYear : 2025}
      </div>

      <h1 className="main-title">
        SEMOGA<br />
        TIDAK LUPA
      </h1>

      <p className="subtitle">
        AGAR YANG PENTING TETAP DIINGAT
      </p>

      <hr className="separator" />
    </header>
  );
};

export default Header;
