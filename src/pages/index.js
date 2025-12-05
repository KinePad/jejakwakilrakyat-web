// src/pages/index.js
import React from 'react'; 
import Head from 'next/head';
import Link from 'next/link'; 

// IMPOR KOMPONEN (Harus Default Export)
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
          <Link 
            href={`/${official.id}`} 
            key={`link-${official.id}`} 
            style={{ 
              display: 'block', 
              textDecoration: 'none', 
              color: 'inherit',
              width: '400px',
              maxWidth: '100%',
              margin: '0 15px 30px 15px', // Margin horizontal untuk centering card
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
