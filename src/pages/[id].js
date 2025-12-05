// src/pages/[id].js

import Head from 'next/head';
import Link from 'next/link';
import Footer from '../components/Footer';
import { officialsData } from '../data/officials';
import { useRouter } from 'next/router';

// 1. Get all possible paths (for SSG)
export async function getStaticPaths() {
  const paths = officialsData.map((official) => ({
    params: { id: official.id.toString() },
  }));

  return { paths, fallback: false };
}

// 2. Get specific data for the page (for SSG)
export async function getStaticProps({ params }) {
  const official = officialsData.find((o) => o.id.toString() === params.id);

  if (!official) {
    return { notFound: true };
  }

  return {
    props: { official },
  };
}

// 3. Detail Component
export default function OfficialDetail({ official }) {
    const router = useRouter();

    if (router.isFallback) {
        return <div>Loading...</div>; // Tampilkan ini saat fallback
    }

    return (
        <div className="container">
            <Head>
                <title>{official.name} - {official.category}</title>
            </Head>

            <main className="detail-container">
                <style jsx>{`
                    /* Detail Container Putih di atas Background Hitam */
                    .detail-container {
                        max-width: 900px;
                        width: 100%;
                        background-color: #ffffff; 
                        padding: 50px;
                        margin: 60px auto;
                        border: 4px solid #003366; /* Border Biru Tua */
                        box-shadow: 8px 8px 0px 0px #007bff; /* Shadow Biru */
                        color: #1a1a1a; /* Teks Hitam di dalam Putih */
                    }

                    /* Judul Utama */
                    h1 {
                        font-size: 2.2rem;
                        font-weight: 700;
                        margin-bottom: 5px;
                        color: #003366; /* Judul Biru Tua */
                        letter-spacing: 1px;
                    }

                    /* Subtitle/Category */
                    h2 {
                        font-size: 1.2rem;
                        font-weight: 400;
                        margin-bottom: 40px;
                        border-bottom: 2px solid #ddd;
                        padding-bottom: 10px;
                        color: #555;
                    }

                    /* Garis Pemisah */
                    .divider {
                        border: none;
                        border-top: 2px dashed #ccc;
                        margin: 20px 0;
                    }

                    /* Daftar Detail */
                    .detail-list {
                        margin-top: 30px;
                    }
                    .detail-item {
                        margin-bottom: 20px;
                    }
                    .label {
                        font-weight: 700;
                        color: #007bff; /* Label Biru Terang */
                        text-transform: uppercase;
                        display: block;
                        margin-bottom: 5px;
                        border-bottom: 1px dotted #ccc;
                        padding-bottom: 2px;
                        font-size: 0.9rem;
                    }
                    .value {
                        font-size: 1.1rem;
                        line-height: 1.4;
                    }

                    /* Link Kembali */
                    .back-link {
                        display: inline-block;
                        margin-top: 40px;
                        color: #007bff; /* Link Biru Terang */
                        text-decoration: none;
                        font-weight: 700;
                        letter-spacing: 1px;
                        border-bottom: 2px solid transparent;
                        transition: border-bottom 0.2s;
                    }
                    .back-link:hover {
                        border-bottom: 2px solid #007bff;
                    }
                `}</style>

                <h1>{official.name || 'Nama Pejabat Tidak Ditemukan'}</h1>
                <h2>{official.category || 'Kategori Tidak Diketahui'}</h2>

                <hr className="divider" />
                
                <div className="detail-list">
                    
                    <div className="detail-item">
                        <span className="label">Status Arsip</span>
                        <p className="value">{official.status || '-'}</p>
                    </div>
                    
                    <div className="detail-item">
                        <span className="label">Jabatan Terakhir</span>
                        <p className="value">{official.position || '-'}</p>
                    </div>

                    <div className="detail-item">
                        <span className="label">Partai Politik</span>
                        <p className="value">{official.party || '-'}</p>
                    </div>
                    
                    <div className="detail-item">
                        <span className="label">Ringkasan Jejak Karir</span>
                        <p className="value">{official.summary || 'Ringkasan data belum tersedia.'}</p>
                    </div>

                </div>

                <Link href="/" passHref legacyBehavior>
                    <a className="back-link">← BACK TO ARCHIVE INDEX</a>
                </Link>

            </main>

            <Footer /> 
            
            {/* Global style container untuk halaman detail */}
            <style jsx global>{`
                .container {
                    padding-bottom: 0; 
                    min-height: 100vh;
                    display: flex;
                    flex-direction: column;
                }
                /* Mengubah warna footer agar terlihat di background hitam */
                footer {
                    margin-top: auto; 
                    color: #999; 
                }
            `}</style>
        </div>
    );
}
