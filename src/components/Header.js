// src/components/Header.js
// ... (kode import dan komponen)
      <style jsx>{`
        /* ... style kontainer tetap ... */

        /* --- EST. 2025 Box --- */
        .est-box {
          /* Border Hitam di atas Background Hitam, jadi kita pakai Putih atau Biru */
          border: 2px solid #007bff; /* Aksen Biru */
          padding: 5px 15px;
          margin-bottom: 20px;
          font-size: 0.9rem;
          font-family: 'Roboto Mono', monospace;
          font-weight: bold;
          color: #ffffff; /* Teks Putih agar terlihat di background Hitam */
        }

        /* --- SEMOGA TIDAK LUPA Text --- */
        .main-title {
          /* ... ukuran font tetap ... */
          color: #ffffff; /* Teks Utama Putih */
          text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.1); 
        }

        /* --- Subtitle: AGAR YANG PENTING TETAP DIINGAT --- */
        .subtitle {
          /* ... ukuran font tetap ... */
          color: #007bff; /* Subtitle Biru */
          letter-spacing: 2px;
        }

        /* --- Garis Pemisah Tebal --- */
        .separator {
          width: 30%;
          border: none;
          border-bottom: 4px solid #007bff; /* Garis Biru */
          margin: 20px auto 0 auto;
        }
      `}</style>
      
      {/* ... kode elemen HTML tetap ... */}
