// src/components/OfficialCard.js
import React from 'react';

const OfficialCard = ({ official }) => {
  return (
    <div className="official-card">
      <style jsx>{`
        .official-card {
          border: 4px solid #003366;
          padding: 40px 30px;
          background-color: #ffffff; 
          box-shadow: 6px 6px 0px 0px #007bff; 
          position: relative;
          width: 380px; 
          height: 550px; 
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          color: #1a1a1a; 
          transition: transform 0.2s;
        }
        .official-card:hover {
            transform: translateY(-5px);
            box-shadow: 8px 8px 0px 0px #007bff;
        }
        .public-data-tag {
            position: absolute;
            top: 0;
            left: 0;
            background-color: #003366; 
            color: white;
            padding: 5px 10px;
            font-size: 0.8rem;
        }
        .stamp-container {
            margin-top: 20px;
            margin-bottom: 30px;
            text-align: center;
        }
        .stamp {
          border: 3px solid #007bff; 
          color: #007bff; 
          padding: 8px 25px;
          font-weight: bold;
          transform: rotate(-3deg); 
          font-size: 0.9rem;
        }
        .divider {
            border: none;
            border-top: 3px dashed #333;
            width: 100%;
            margin: 30px 0;
        }
        .main-title {
          font-size: 3.5rem; 
          font-weight: 900;
          line-height: 1.1;
          margin: 0;
          text-align: center;
          color: #1a1a1a;
        }
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
        .open-folder-msg {
            background-color: #007bff; 
            color: white;
            padding: 15px 30px;
            text-align: center;
            font-size: 1rem;
            letter-spacing: 2px;
            text-transform: uppercase;
            margin-top: 15px; 
        }
      `}</style>
      
      <div className="public-data-tag">PUBLIC DATA</div>
      <div className="stamp-container"><div className="stamp">POLITICIAN DIRECTORY</div></div>
      <hr className="divider" />
      <h1 className="main-title">JEJAK PEJABAT</h1>
      <div className="card-details">
        <p>// CASE FILE: #{String(official.id).padStart(3, '0')}</p> 
        <p>CATEGORY: {official.category.toUpperCase()}</p>
        <p>STATUS: {official.status.toUpperCase()}</p>
      </div>
      <p className="open-folder-msg">OPEN ARCHIVE →</p>
    </div>
  );
};

export default OfficialCard;
