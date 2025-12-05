// src/pages/index.js

import Head from 'next/head';
import Link from 'next/link'; 

// Import komponen UI dari folder components
import OfficialCard from '../components/OfficialCard';
import Footer from '../components/Footer';
import Header from '../components/Header';

// Import data statis dari folder data
import { officialsData } from '../data/officials';

// Fungsi Next.js: Mengambil data saat proses BUILD (SSG)
export async function getStaticProps() {
  // Ambil data
  const officials = officialsData;

  return {
    props: {
      // Pastikan 'officials' selalu berupa array (fallback jika data kosong)
      officials: officials || [], 
    },
    // Optional: atur revalidate jika ingin menggunakan ISR
  };
}

// Komponen Halaman Home
export default function Home({ officials }) {
  
  // Pengecekan data untuk mencegah error map
  const hasOfficials = Array.isArray(officials) && officials.length > 0;
  
  return (
    <div className="container">
      <Head>
        <title>Semoga Tidak Lupa - Jejak Pejabat Arsip Publik</title>
      </Head>

      {/* --- Header Desain 'Semoga Tidak Lupa' --- */}
      <Header /> 
      
      <main className="card-list">
        
        {/* Pesan jika data kosong */}
        {!hasOfficials && (
            <p className="no-data-msg">
                [SYSTEM MESSAGE] Data Arsip Pejabat kosong atau tidak ditemukan.
            </p>
        )}

        {/* Pemetaan Data dan Navigasi */}
        {hasOfficials && officials.map((official) => (
          
          // KRITIS: Menggunakan Link yang membungkus OfficialCard
          <Link 
            href={`/${official.id}`} // Tujuannya adalah halaman detail [id].js
            key={official.id} 
            // Style agar Link berperilaku seperti block dan mengisi area card
            style={{ display: 'block', textDecoration: 'none', color: 'inherit' }} 
          >
            <OfficialCard official={official} />
          </Link>
        ))}
      </main>

      <Footer />
      
      {/* Style CSS Komponen */}
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
