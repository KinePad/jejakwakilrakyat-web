// src/pages/[id].js
import Head from 'next/head';
import Link from 'next/link';
import Footer from '../components/Footer';
import { officialsData } from '../data/officials';
import { useRouter } from 'next/router';
// ... (getStaticPaths dan getStaticProps tetap sama) ...

export default function OfficialDetail({ official }) {
    const router = useRouter();

    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container">
            <Head>
                <title>{official.name} - {official.category}</title>
            </Head>

            <main className="detail-container">
                <style jsx>{`
                    .detail-container {
                        max-width: 900px;
                        width: 100%;
                        background-color: #ffffff; 
                        padding: 50px;
                        margin: 60px auto;
                        border: 4px solid #003366; 
                        box-shadow: 8px 8px 0px 0px #007bff; 
                        color: #1a1a1a; 
                    }
                    /* ... (Style lainnya tetap sama untuk judul, link, dll.) ... */
                    h1 {
                        font-size: 2.2rem;
                        font-weight: 700;
                        margin-bottom: 5px;
                        color: #003366; 
                        letter-spacing: 1px;
                    }
                    h2 {
                        font-size: 1.2rem;
                        font-weight: 400;
                        margin-bottom: 40px;
                        border-bottom: 2px solid #ddd;
                        padding-bottom: 10px;
                        color: #555;
                    }
                    .divider {
                        border: none;
                        border-top: 2px dashed #ccc;
                        margin: 20px 0;
                    }
                    .detail-list {
                        margin-top: 30px;
                    }
                    .detail-item {
                        margin-bottom: 20px;
                    }
                    .label {
                        font-weight: 700;
                        color: #007bff; 
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
                    .back-link {
                        display: inline-block;
                        margin-top: 40px;
                        color: #007bff; 
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
                    {/* ... (detail item) ... */}
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
            
            {/* Style Global untuk memastikan container detail menempel di background hitam */}
            <style jsx global>{`
                .container {
                    padding-bottom: 0; 
                    min-height: 100vh;
                    display: flex;
                    flex-direction: column;
                }
                footer {
                    margin-top: auto; 
                    color: #999; 
                }
            `}</style>
        </div>
    );
}
