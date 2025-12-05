// src/pages/index.js
import OfficialCard from '../components/OfficialCard';
import { officialsData } from '../data/officials';

// 1. Menggunakan getStaticProps untuk mengambil data saat BUILD
export async function getStaticProps() {
  // Data diambil dari file lokal, Next.js akan memproses ini saat build
  const data = officialsData;

  return {
    props: {
      officials: data,
    },
    // revalidate: 60, // Opsional: Untuk ISR (Incremental Static Regeneration)
  };
}

// 2. Komponen Halaman
export default function Home({ officials }) {
  return (
    <div className="container">
      <h1>JEJAK PEJABAT - PUBLIC DATA</h1>
      <p>Data diambil secara statis dari file officials.js</p>
      
      <div className="card-list">
        {officials.map((official) => (
          <OfficialCard key={official.id} official={official} />
        ))}
      </div>

      <style jsx>{`
        .container {
          max-width: 900px;
          margin: 40px auto;
          padding: 0 20px;
          font-family: Arial, sans-serif;
        }
        h1 {
            border-bottom: 2px solid black;
            padding-bottom: 10px;
        }
      `}</style>
    </div>
  );
}
