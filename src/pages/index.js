// src/pages/index.js
import Head from 'next/head';
import Link from 'next/link';
import OfficialCard from '../components/OfficialCard';
import Footer from '../components/Footer';
import Header from '../components/Header'; // 👈 IMPORT HEADER BARU DI SINI
import { officialsData } from '../data/officials';

// ... (getStaticProps tetap sama)

// 2. Komponen Halaman Home
export default function Home({ officials }) {
  return (
    <div className="container">
      <Head>
        <title>Semoga Tidak Lupa - Jejak Pejabat Arsip Publik</title> 
        {/* Update judul tab browser */}
      </Head>

      {/* --- Panggil Header Baru di sini --- */}
      <Header /> 
      
      <main className="card-list">
        {officials.map((official) => (
          <Link href={`/${official.id}`} key={official.id} passHref>
            <OfficialCard official={official} />
          </Link>
        ))}
      </main>

      <Footer />

      {/* ... (style jsx dan style global tetap sama) ... */}
    </div>
  );
}
