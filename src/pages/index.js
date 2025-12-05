// src/pages/index.js

import React, { useState, useMemo } from 'react'; // Import hooks yang diperlukan
import Head from 'next/head';
import Link from 'next/link'; 

// Import komponen UI
import OfficialCard from '../components/OfficialCard';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar'; 

// Import data statis
import { officialsData } from '../data/officials';

export async function getStaticProps() {
  const officials = officialsData;
  return {
    props: {
      officials: officials || [], 
    },
  };
}

export default function Home({ officials }) {
  // 1. STATE UNTUK PENCARIAN
  const [searchTerm, setSearchTerm] = useState('');
  
  // 2. LOGIKA FILTERING (Menggunakan useMemo agar efisien)
  const filteredOfficials = useMemo(() => {
    if (!searchTerm) {
      return officials; // Tampilkan semua jika input kosong
    }

    const lowerCaseSearch = searchTerm.toLowerCase();

    return officials.filter(official => {
        // Cek Nama Pejabat
        const nameMatch = official.name && official.name.toLowerCase().includes(lowerCaseSearch);
        // Cek Kategori
        const categoryMatch = official.category && official.category.toLowerCase().includes(lowerCaseSearch);
        // Cek Partai
        const partyMatch = official.party && official.party.toLowerCase().includes(lowerCaseSearch);

        // Akan tampil jika salah satu kriteria cocok
        return nameMatch || categoryMatch || partyMatch;
    });
  }, [officials, searchTerm]); // Akan dihitung ulang jika officials atau searchTerm berubah

  const hasOfficials = Array.isArray(filteredOfficials) && filteredOfficials.length > 0;
  
  return (
    <div className="container">
      <Head>
        <title>Semoga Tidak Lupa - Jejak Pejabat Arsip Publik</title>
      </Head>

      <Header /> 
      
      {/* 3. TERAPKAN HANDLER PENCARIAN */}
      <SearchBar onSearch={setSearchTerm} />
      
      <main className="card-list">
        
        {!hasOfficials && (
            <p className="no-data-msg">
                [SYSTEM MESSAGE] Arsip tidak ditemukan untuk pencarian "{searchTerm}".
            </p>
        )}

        {filteredOfficials.map((official) => ( // MAPPING MENGGUNAKAN DATA YANG SUDAH DIFILTER
          <Link 
            href={`/${official.id}`} 
            key={`link-${official.id}`} 
            style={{ 
              display: 'block', 
              textDecoration: 'none', 
              color: 'inherit',
              width: '400px',
              maxWidth: '100%',
              margin: '0 15px 30px 15px',
            }} 
          >
            <OfficialCard official={official} />
          </Link>
        ))}
      </main>

      <Footer />
      
      <style jsx>{`
        .container {
          max-width: 1200px;
          margin: 40px auto;
          padding: 0 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          min-height: 100vh; 
          color: #ffffff;
        }
        .card-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0; 
          justify-content: center;
          width: 100%;
          margin-top: 40px;
        }
        .no-data-msg {
            color: #007bff;
            border: 1px dashed #007bff;
            padding: 20px;
            text-align: center;
        }
      `}</style>
    </div>
  );
}
