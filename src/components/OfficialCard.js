// src/components/OfficialCard.js
// ... (kode import dan komponen)
      <style jsx>{`
        /* --- Kontainer Utama (Kartu) --- */
        .official-card {
          /* Border Biru Tua */
          border: 4px solid #003366; 
          padding: 40px 30px;
          background-color: #ffffff; /* Container Putih */
          /* Efek Shadow Hitam/Biru */
          box-shadow: 6px 6px 0px 0px #007bff; /* Shadow Biru Terang */
          /* ... style lainnya tetap ... */
          color: #1a1a1a; /* Teks Utama Hitam agar terlihat di background Putih */
        }

        .official-card:hover {
            transform: translateY(-5px);
            box-shadow: 8px 8px 0px 0px #007bff;
        }

        /* --- Header Top Left: PUBLIC DATA --- */
        .public-data-tag {
            /* ... posisi tetap ... */
            background-color: #003366; /* Biru Tua */
            color: white;
            /* ... style lainnya tetap ... */
        }

        /* --- Stempel: POLITICIAN DIRECTORY --- */
        .stamp {
          border: 3px solid #007bff; /* Biru Terang */
          color: #007bff; 
          /* ... style lainnya tetap ... */
        }
        
        /* --- Garis Pemisah Putus-Putus Tebal --- */
        .divider {
            border: none;
            border-top: 3px dashed #333;
            /* ... style lainnya tetap ... */
        }

        /* --- Teks Utama: JEJAK PEJABAT --- */
        .main-title {
          /* ... style tetap ... */
          color: #1a1a1a; /* Teks Hitam */
        }

        /* --- Pesan KLIK UNTUK MEMBUKA ARSIP --- */
        .open-folder-msg {
            background-color: #007bff; /* Biru Terang */
            color: white;
            /* ... style lainnya tetap ... */
        }
      `}</style>
      
      {/* ... kode elemen HTML tetap ... */}
