// src/components/SearchBar.js
// ... (kode import dan komponen)
      <style jsx>{`
        /* ... style kontainer tetap ... */
        .search-input {
            width: 100%;
            padding: 15px 20px;
            font-size: 1.1rem;
            font-family: 'Roboto Mono', monospace;
            color: #1a1a1a;
            background-color: #ffffff; /* Container Putih */
            /* Border dan Shadow ala Dokumen */
            border: 3px solid #003366; /* Border Biru Tua */
            box-shadow: 6px 6px 0px 0px #007bff; /* Shadow Biru */
            outline: none; 
        }
        .search-input::placeholder {
            color: #888;
        }
      `}</style>
      {/* ... kode elemen HTML tetap ... */}
