// src/pages/index.js

import Head from 'next/head';
import Link from 'next/link'; 
// Import komponen UI
import OfficialCard from '../components/OfficialCard';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar'; // Diimpor

// Import data statis
import { officialsData } from '../data/officials';

// ... (getStaticProps tetap sama)

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

      <Header /> 
      
      <SearchBar />
      
      <main className="card-list">
        
        {!hasOfficials && (
            <p className="no-data-msg">
                [SYSTEM MESSAGE] Data Arsip Pejabat kosong atau tidak ditemukan.
            </p>
        )}

        {hasOfficials && officials.map((official) => (
          
          // PERBAIKAN: Menggunakan Link modern tanpa legacyBehavior atau passHref,
          // dan styling yang tegas.
          <Link 
            href={`/${official.id}`} 
            key={`link-${official.id}`} // Memberi key pada Link
            // Style yang memastikan Link adalah blok yang menutupi area card
            style={{ 
              display: 'block', 
              textDecoration: 'none', 
              color: 'inherit',
              width: '400px', // Memberi lebar yang sedikit lebih besar dari OfficialCard (380px)
              maxWidth: '100%',
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
