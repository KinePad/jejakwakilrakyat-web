// src/components/OfficialCard.js

const OfficialCard = ({ official }) => {
  return (
    <div className="official-card">
      <style jsx>{`
        /* --- Efek Visual Mirip Dokumen/Border --- */
        .official-card {
          border: 3px solid #333;
          padding: 20px;
          margin-bottom: 30px;
          background-color: #f7f7f7;
          box-shadow: 10px 10px 0px 0px #aaa; /* Efek "terangkat" */
          position: relative;
          overflow: hidden;
        }

        /* Border Garis Putus-Putus di Atas */
        .official-card::before {
            content: '';
            position: absolute;
            top: 10px;
            left: 20px;
            right: 20px;
            border-top: 2px dashed #999;
        }
        
        .status-stamp {
          border: 2px solid red;
          color: red;
          padding: 5px 10px;
          font-weight: bold;
          display: inline-block;
          transform: rotate(-5deg); /* Efek Stempel Miring */
          margin-bottom: 15px;
        }
        /* --- Akhir Efek Visual --- */

        .card-header h2 {
          font-size: 1.8rem;
          margin-bottom: 5px;
        }
        .card-header p {
          color: #555;
          margin-bottom: 15px;
        }
      `}</style>

      <div className="status-stamp">{official.status.toUpperCase()}</div>
      
      <div className="card-header">
        <h2>{official.name}</h2>
        <p><strong>{official.title}</strong></p>
      </div>

      <div className="card-body">
        <ul>
          <li>**Category:** {official.category}</li>
          <li>**Party:** {official.details.party}</li>
          <li>**Born:** {official.details.birth}</li>
        </ul>
      </div>
      {/* Tombol 'Open Folder' sederhana, bisa diarahkan ke halaman detail (jika dibuat) */}
      <button className="open-folder-btn">OPEN RECORD →</button>
    </div>
  );
};

export default OfficialCard;
