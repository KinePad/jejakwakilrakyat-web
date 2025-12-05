// src/pages/_app.js
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  // Semua halaman (Component) dibungkus di sini
  return <Component {...pageProps} />
}

export default MyApp
