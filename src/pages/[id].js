// src/pages/[id].js
import Head from 'next/head';
import Link from 'next/link';
import Footer from '../components/Footer';
import { officialsData } from '../data/officials';

// 1. getStaticPaths: Menentukan path (URL) mana saja yang harus di-build
export async function getStaticPaths() {
  const paths = officialsData.map((official) => ({
    params: { id: String(official.id) }, // id harus berupa string
  }));

  return { paths, fallback: false }; // fallback: false berarti semua path harus didefinisikan di sini
}

// 2. getStaticProps: Mengambil data untuk path/halaman yang spesifik
export async function getStaticProps({ params }) {
  const official = officialsData.find(o => String(o.id) === params.id);

  if (!official) {
    return { notFound: true };
  }

  return {
    props: {
      official,
    },
  };
}

// 3. Komponen Halaman Detail
export default function OfficialDetail({ official }) {
  return (
    <div className="detail-container">
      <Head>
        <title>RECORD: {official.name} - Jejak Pejabat</title>
      </Head>

      <div className="detail-box">
        <h1 className="name-title">{official.name}</h1>
        <h2 className="pos-title">{official.title}</h2>
        
        <hr className="divider" />

        <div className="info-grid">
          <div className="info-item">
            <strong>ID CASE:</strong> #{String(official.id).padStart(3, '0')}
          </div>
          <div className="info-item">
            <strong>CATEGORY:</strong> {official.category.toUpperCase()}
          </div>
          <div className="info-item">
            <strong>PARTY:</strong> {official.details.party}
          </div>
          <div className="info-item">
            <strong>BORN:</strong> {official.details.birth}
          </div>
        </div>

        <h3 className="track-title">:: TRACK RECORD ARSIP ::</h3>
        <ul className="track-list">
          {official.details.trackRecord.map((record, index) => (
            <li key={index}>{record}</li>
          ))}
        </ul>

        <Link href="/" passHref className="back-link">
          ← BACK TO ARCHIVE INDEX
        </Link>
      </div>

      <Footer />

      <style jsx>{`
        /* Styling disederhanakan, Anda bisa menambahkan efek dokumen di sini */
        .detail-container {
            max-width: 800px;
            margin: 40px auto;
            padding: 0 20px;
            font-family: 'Roboto Mono', monospace;
        }
        .detail-box {
            border: 3px solid #1a1a1a;
            padding: 40px;
            background-color: #fff;
            box-shadow: 8px 8px 0px 0px #aaa;
        }
        .name-title {
            font-size: 2.2rem;
            margin-bottom: 5px;
        }
        .pos-title {
            font-size: 1.2rem;
            color: #555;
            margin-top: 0;
        }
        .divider {
            border: none;
            border-top: 2px solid #ccc;
            margin: 20px 0;
        }
        .info-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
            margin-bottom: 30px;
        }
        .track-title {
            font-size: 1.1rem;
            border-bottom: 1px dashed #333;
            padding-bottom: 5px;
            margin-top: 40px;
        }
        .track-list {
            list-style: none;
            padding: 0;
        }
        .track-list li {
            margin-bottom: 10px;
            line-height: 1.4;
        }
        .back-link {
            display: inline-block;
            margin-top: 40px;
            font-weight: bold;
            color: #1a1a1a;
        }
      `}</style>
    </div>
  );
}
