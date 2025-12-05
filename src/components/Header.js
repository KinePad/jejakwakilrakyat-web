// src/components/Header.js
import React from 'react';

const Header = () => {
  const currentYear = new Date().getFullYear();

  return (
    <header className="main-header-design">
      <style jsx>{`
        .main-header-design {
          text-align: center;
          margin: 60px 0 30px 0;
          width: 100%;
          max-width: 900px;
        }
        .est-box {
          display: inline-block;
          border: 2px solid #007bff; /* Aksen Biru */
          padding: 5px 15px;
          margin-bottom: 20px;
          font-weight: bold;
          color: #ffffff; /* Teks Putih */
        }
        .main-title {
          font-size: 8vw; 
          line-height: 0.85; 
          font-weight: 900; 
          color: #ffffff; /* Teks Utama Putih */
          text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.1); 
        }
        @media (min-width: 900px) {
          .main-title { font-size: 72px; }
        }
        .subtitle {
          font-size: 1rem;
          margin-top: 30px;
          color: #007bff; /* Subtitle Biru */
          letter-spacing: 2px;
        }
        .separator {
          width: 30%;
          border: none;
          border-bottom: 4px solid #007bff; /* Garis Biru */
          margin: 20px auto 0 auto;
        }
      `}</style>
      
      <div className="est-box">EST. {currentYear > 2025 ? currentYear : 2025}</div>
      <h1 className="main-title">SEMOGA<br />TIDAK LUPA</h1>
      <p className="subtitle">AGAR YANG PENTING TETAP DIINGAT</p>
      <hr className="separator" />
    </header>
  );
};

export default Header;
