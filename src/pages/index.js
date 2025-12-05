// src/pages/index.js
import Head from 'next/head';
import Link from 'next/link'; // Import Link untuk navigasi
import OfficialCard from '../components/OfficialCard';
import Footer from '../components/Footer';
import { officialsData } from '../data/officials';

// 1. Menggunakan getStaticProps: Mengambil data saat proses BUILD
export async function getStaticProps() {
  // Data statis diambil dari file lokal
  const officials = officialsData;

  return {
    props: {
      officials,
    },
  };
}

// 2. Komponen Halaman Home
export default function Home({ officials }) {
  return (
    <div className="container">
      <Head>
        <title>Jejak Pejabat - Direktori Arsip Publik</title>
      </Head>

      <header className="main-header">
        <h1 className="title-jejak">JEJAK PEJABAT</h1>
        <p className="subtitle-case">// ARCHIVE TOTAL: {String(officials.length).padStart(3, '0')}</p>
        <p className="subtitle-category">CATEGORY: LEGISLATIVE & EXECUTIVE</p>
      </header>
      
      <main className="card-list">
        {officials.map((official) => (
          // Bungkus OfficialCard dengan Link ke halaman detail
          <Link href={`/${official.id}`} key={official.id} passHref>
            <OfficialCard official={official} />
          </Link>
        ))}
      </main>

      <Footer />

      <style jsx global>{`
        /* Style global untuk Link */
        a {
            text-decoration: none;
            color: inherit;
        }
      `}</style>

      <style jsx>{`
        .container {
          /* ... style container ... */
        }
        .main-header {
          /* ... style header ... */
        }
        .card-list {
          /* ... style card-list ... */
          justify-content: center;
          display: flex;
          flex-wrap: wrap;
          gap: 30px;
        }
      `}</style>
    </div>
  );
}
