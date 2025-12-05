// src/data/officials.js

/**
 * Array yang berisi data semua pejabat.
 * Next.js akan membaca array ini saat proses build (getStaticProps).
 */
export const officialsData = [
  {
    id: 1, // ID unik, penting untuk key di React dan untuk dynamic routing (jika dibuat)
    name: "Dr. Asep Sutisna, M.M.",
    title: "Anggota DPR RI - Komisi III",
    category: "Legislative",
    status: "Public Record",
    image: "/image/asep_sutisna.jpg", // Path ke folder public/image
    details: {
      birth: "Bandung, 10 Mei 1975",
      education: ["S3 Manajemen", "S2 Hukum"],
      party: "Partai Harapan Bangsa (PHB)",
      // Detail tambahan yang akan muncul di halaman detail
      trackRecord: [
        "Mengesahkan UU No. 10 Tahun 2024 tentang Energi Terbarukan.",
        "Menginisiasi program beasiswa untuk 1000 mahasiswa kurang mampu.",
        "Pernah menjabat sebagai Ketua Komite Etik Dewan (2020-2023).",
      ],
    },
  },
  {
    id: 2,
    name: "Ir. Bunga Citra Ayu",
    title: "Kepala Dinas ESDM Provinsi X",
    category: "Executive",
    status: "Public Record",
    image: "/image/bunga_ayu.jpg",
    details: {
      birth: "Surabaya, 15 April 1980",
      education: ["S1 Teknik Pertambangan", "Magister Manajemen"],
      party: "Non-Partisan (ASN)",
      trackRecord: [
        "Menerbitkan kebijakan efisiensi energi di lingkup provinsi.",
        "Sukses memimpin negosiasi proyek geothermal di wilayah Selatan.",
      ],
    },
  },
  {
    id: 3,
    name: "Slamet Santoso, S.H.",
    title: "Walikota Kota Harmoni",
    category: "Executive",
    status: "Public Record",
    image: "/image/slamet_santoso.jpg",
    details: {
      birth: "Jakarta, 21 Agustus 1968",
      education: ["S1 Hukum Pidana"],
      party: "Partai Garuda Perkasa (PGP)",
      trackRecord: [
        "Meraih Adipura Kencana 3 tahun berturut-turut.",
        "Meluncurkan program 'Kota Digital' pada tahun 2023.",
        "Memimpin rekonstruksi pasar sentral pasca kebakaran.",
      ],
    },
  },
  // TAMBAHKAN OBJEK PEJABAT BARU DI BAWAH INI
  // Pastikan setiap objek memiliki properti 'id' yang unik.
];
