// src/components/SearchBar.js
import React from 'react';

const SearchBar = () => {
  return (
    <div className="search-container">
      <style jsx>{`
        .search-container {
            width: 100%;
            max-width: 650px; 
            margin: 40px auto 60px auto;
        }
        .search-input {
            width: 100%;
            padding: 15px 20px;
            font-size: 1.1rem;
            color: #1a1a1a; /* Teks input Hitam */
            background-color: #ffffff; /* Background input Putih */
            border: 3px solid #003366; /* Border Biru Tua */
            box-shadow: 6px 6px 0px 0px #007bff; /* Shadow Biru */
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
      />
    </div>
  );
};

export default SearchBar;
