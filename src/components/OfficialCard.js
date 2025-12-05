// src/components/OfficialCard.js
import React from 'react';

const OfficialCard = ({ official }) => {
  return (
    <div className="official-card">
      <style jsx>{`
        /* --- Kontainer Utama (Kotak Arsip) --- */
        .official-card {
          /* Border Biru Tua */
          border: 4px solid #003366; 
          padding: 40px 30px;
          margin-bottom: 40px;
          background-color: #ffffff; 
          /* Efek Border 3D Tipis */
          box-shadow: 6px 6px 0px 0px #1a1a1a; 
          position: relative;
          width: 380px; 
          height: 550px; 
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          font-family: 'Roboto Mono', monospace;
          transition: transform 0.2s;
        }

        .official-card:hover {
            transform: translateY(-5px); /* Efek hover kecil */
        }

        /* --- Header Top Left: PUBLIC DATA --- */
        .public-data-tag {
            position: absolute;
            top: 0;
            left: 0;
            background-color: #003366; /* Biru Tua */
            color: white;
            padding: 5px 10px;
            font-size: 0.8rem;
            letter-spacing: 1px;
        }

        /* --- Stempel: POLITICIAN DIRECTORY --- */
        .stamp-container {
            margin-top: 20px;
            margin-bottom: 30px;
            text-align: center;
        }
        .stamp {
          border: 3px solid #007bff; /* Biru Terang */
          color: #007bff; 
          padding: 8px 25px;
          font-weight: bold;
          display: inline-block;
          transform: rotate(-3deg); 
          font-size: 0.9rem;
          letter-spacing: 2px;
        }
        
        /* --- Garis Pemisah Putus-Putus Tebal --- */
        .divider {
            border: none;
            border-top: 3px dashed #333;
            width: 100%;
            margin: 30px 0;
        }

        /* --- Teks Utama: JEJAK PEJABAT --- */
        .main-title {
          font-size: 3.5rem; 
          font-weight: 900;
          line-height: 1.1;
          margin: 0;
          text-align: center;
        }

        /* --- Detail Case File --- */
        .card-details {
            text-align: center;
            margin-top: 30px;
            flex-grow: 1; 
        }
        .card-details p {
            font-size: 0.85rem;
            margin: 8px 0;
            letter-spacing: 1px;
        }

        /* --- Tombol OPEN FOLDER --- */
        .open-folder-btn {
            background-color: #007bff; /* Biru Terang */
            color: white;
            padding: 15px 30px;
            border: 2px solid #007bff;
            cursor: pointer;
            width: 100%;
            font-size: 1rem;
            letter-spacing: 2px;
            text-transform: uppercase;
        }
      `}</style>
      
      <div className="public-data-tag">PUBLIC DATA</div>

      <div className="stamp-container">
          <div className="stamp">POLITICIAN DIRECTORY</div>
      </div>

      <hr className="divider" />
      
      <h1 className="main-title">JEJAK PEJABAT</h1>

      <div className="card-details">
        <p>// CASE FILE: #{String(official.id).padStart(3, '0')}</p> 
        <p>CATEGORY: {official.category.toUpperCase()}</p>
        <p>STATUS: {official.status.toUpperCase()}</p>
      </div>

      <button className="open-folder-btn">OPEN FOLDER →</button>
    </div>
  );
};

export default OfficialCard;
