import { useEffect, useState } from 'react'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { ScrollToTop } from './components/layout/ScrollToTop'
import { Cursor } from './components/effects/Cursor'
import { Loader } from './components/ui/Loader'
import { AppRoutes } from './routes/AppRoutes'
import { AppProvider } from './context/AppContext'
import { CLINIC } from './lib/utils'
import { FaWhatsapp } from 'react-icons/fa'
import { initLenis } from './lib/lenis'

function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${CLINIC.whatsapp}?text=Hi%2C%20I%20want%20to%20book%20a%20dental%20appointment`}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
      aria-label="Chat on WhatsApp"
      title="Book via WhatsApp"
    >
      <FaWhatsapp className="w-7 h-7 text-white" />
    </a>
  )
}

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!loading) {
      const lenis = initLenis()
    }
  }, [loading])

  return (
    <AppProvider>
      <Cursor />
      {loading && <Loader onComplete={() => setLoading(false)} />}
      {!loading && (
        <>
          <ScrollToTop />
          <Navbar />
          <main>
            <AppRoutes />
          </main>
          <Footer />
          <FloatingWhatsApp />
        </>
      )}
    </AppProvider>
  )
}
