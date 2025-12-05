// src/components/SearchBar.js
import React from 'react';

const SearchBar = () => {
  // Catatan: Fungsi pencarian riil akan diterapkan di index.js
  
  return (
    <div className="search-container">
      <style jsx>{`
        .search-container {
            width: 100%;
            max-width: 650px; /* Lebar search bar */
            margin: 40px auto 60px auto;
        }
        .search-input {
            width: 100%;
            padding: 15px 20px;
            font-size: 1.1rem;
            font-family: 'Roboto Mono', monospace;
            color: #1a1a1a;
            background-color: #ffffff;
            /* Border dan Shadow ala Dokumen */
            border: 3px solid #003366; /* Border biru tua */
            box-shadow: 6px 6px 0px 0px #1a1a1a; /* Shadow hitam */
            /* Hilangkan border default browser */
            outline: none; 
        }
        .search-input::placeholder {
            color: #888;
        }
      `}</style>
      
      <input 
        type="text" 
        className="search-input" 
        placeholder="SEARCH POLITICIAN OR PARTY..." 
        // Karena ini komponen display, kita belum menambahkan state/onChange
      />
    </div>
  );
};

export default SearchBar;
