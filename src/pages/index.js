// src/pages/index.js

import Head from 'next/head';
import Link from 'next/link'; 

// Import komponen UI
import OfficialCard from '../components/OfficialCard';
import Footer from '../components/Footer';
import Header from '../components/Header';

// Import data statis
import { officialsData } from '../data/officials';

// Fungsi Next.js: Mengambil data saat proses BUILD (SSG)
export async function getStaticProps() {
  // Data diambil dari file lokal
  const officials = officialsData;

  return {
    props: {
      // Data yang dilewatkan ke komponen Home
      officials: officials || [], // Pastikan selalu array kosong jika data tidak ada
    },
    // Optional: Revalidate jika Anda ingin menggunakan ISR (Incremental Static Regeneration)
    // revalidate: 60, 
  };
}

// Komponen Halaman Home
export default function Home({ officials }) {
  
  // Pengecekan data untuk kasus kegagalan ekstrim atau data kosong
  const hasOfficials = Array.isArray(officials) && officials.length > 0;
  
  return (
    <div className="container">
      <Head>
        <title>Semoga Tidak Lupa - Jejak Pejabat Arsip Publik</title>
      </Head>

      {/* --- Header dengan Desain 'Semoga Tidak Lupa' --- */}
      <Header /> 
      
      <main className="card-list">
        {!hasOfficials && (
            <p className="no-data-msg">
                [SYSTEM MESSAGE] Data Arsip Pejabat tidak ditemukan atau array data kosong. 
                Silakan cek file src/data/officials.js.
            </p>
        )}

        {hasOfficials && officials.map((official) => (
          // Bungkus OfficialCard dengan Link ke halaman detail [id].js
          <Link href={`/${official.id}`} key={official.id} passHref legacyBehavior>
            <OfficialCard official={official} />
          </Link>
        ))}
      </main>

      <Footer />

      <style jsx global>{`
        /* Global style untuk Link agar tidak mengganggu styling card */
        a {
            text-decoration: none;
            color: inherit;
        }
      `}</style>
      
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
