// src/pages/index.js

import Head from 'next/head';
import Link from 'next/link'; 

// Import semua komponen UI
import OfficialCard from '../components/OfficialCard';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar'; // Diimpor

// Import data statis
import { officialsData } from '../data/officials';

// Fungsi Next.js: Mengambil data saat proses BUILD (SSG)
export async function getStaticProps() {
  const officials = officialsData;

  return {
    props: {
      officials: officials || [], 
    },
  };
}

// Komponen Halaman Home
export default function Home({ officials }) {
  
  const hasOfficials = Array.isArray(officials) && officials.length > 0;
  
  return (
    <div className="container">
      <Head>
        <title>Semoga Tidak Lupa - Jejak Pejabat Arsip Publik</title>
      </Head>

      {/* --- 1. Header --- */}
      <Header /> 
      
      {/* --- 2. SearchBar --- */}
      <SearchBar />
      
      {/* --- 3. Daftar Kartu Pejabat --- */}
      <main className="card-list">
        
        {!hasOfficials && (
            <p className="no-data-msg">
                [SYSTEM MESSAGE] Data Arsip Pejabat kosong atau tidak ditemukan.
            </p>
        )}

        {hasOfficials && officials.map((official) => (
          
          <Link 
            href={`/${official.id}`} 
            key={official.id} 
            style={{ display: 'block', textDecoration: 'none', color: 'inherit' }} 
          >
            <OfficialCard official={official} />
          </Link>
        ))}
      </main>

      {/* --- 4. Footer --- */}
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
        }
        .card-list {
          display: flex;
          flex-wrap: wrap;
          gap: 30px;
          justify-content: center;
          width: 100%;
          margin-top: 40px;
        }
        .no-data-msg {
            font-family: 'Roboto Mono', monospace;
            color: red;
            border: 1px dashed red;
            padding: 20px;
            text-align: center;
        }
      `}</style>
    </div>
  );
}
