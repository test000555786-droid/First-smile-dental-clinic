import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Menu, X, ChevronDown } from 'lucide-react'
import { CLINIC } from '../../lib/utils'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'About', path: '/about' },
  { label: 'Blogs', path: '/blogs' },
  { label: 'Patient Corner', path: '/patient-corner' },
  { label: 'Contact', path: '/contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMobileOpen(false) }, [location])

  // Dynamic Routing Logic for Text Color
  const isHome = location.pathname === '/'
  
  // Use light text on non-home pages but ONLY when NOT scrolled.
  // Once the user scrolls, the navbar gets a solid white background, so the text needs to be dark again.
  const isLightText = !isHome && !scrolled

  // Base dynamic classes
  const textColorClass = isLightText ? 'text-white' : 'text-slate-700'

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          scrolled
            ? 'py-2 bg-white/95 backdrop-blur-[20px] shadow-[0_4px_30px_rgba(14,165,233,0.1)] border-b border-white/80'
            : isLightText
              ? 'py-4 bg-gradient-to-b from-black/50 via-black/20 to-transparent'
              : 'py-4 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-teal-500 flex items-center justify-center shadow-button group-hover:scale-110 transition-transform duration-300">
              <span className="text-xl">🦷</span>
            </div>
            <div>
              <p className={`font-display font-bold text-sm leading-tight transition-colors duration-300 ${isLightText ? 'text-white' : 'text-slate-800'}`}>
                First Smile
              </p>
              <p className={`text-[10px] font-semibold tracking-wide uppercase transition-colors duration-300 ${isLightText ? 'text-teal-100/90' : 'text-primary-500'}`}>
                Dental & Implant Center
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map(link => {
              const isActive = location.pathname === link.path
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors duration-300 ease-in-out ${
                    isActive
                      ? (isLightText ? 'text-teal-300' : 'text-primary-600')
                      : `${textColorClass} ${isLightText ? 'hover:text-white' : 'hover:text-primary-600'}`
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${CLINIC.phoneRaw}`}
              className={`flex items-center gap-2 text-sm font-semibold transition-colors duration-300 px-3 py-2 rounded-lg 
                ${isLightText 
                  ? 'text-white hover:bg-white/10' 
                  : 'text-slate-700 hover:text-primary-600 hover:bg-primary-50'}
              `}
            >
              <Phone className="w-4 h-4" />
              {CLINIC.phone}
            </a>
            <a
              href={`https://wa.me/${CLINIC.whatsapp}?text=Hi%2C%20I%20want%20to%20book%20a%20dental%20appointment`}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn-primary text-sm px-5 py-2.5 transition-all duration-300 ${
                isLightText ? 'shadow-[0_4px_20px_rgba(255,255,255,0.15)] hover:shadow-[0_4px_25px_rgba(255,255,255,0.25)] border border-white/20' : ''
              }`}
            >
              Book Appointment
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`lg:hidden w-10 h-10 rounded-xl border flex items-center justify-center transition-colors duration-300 ${
              isLightText
                ? 'bg-white/10 border-white/20 text-white hover:bg-white/20'
                : 'bg-primary-50 border-primary-100 text-primary-600 hover:bg-primary-100'
            }`}
            onClick={() => setMobileOpen(v => !v)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            // Mobile menu is always dark text on white bg for readability
            className="fixed top-[60px] left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-b border-slate-100 shadow-glass-lg lg:hidden overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-2">
              {navLinks.map((link, i) => {
                const isActive = location.pathname === link.path
                return (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                  >
                    <Link
                      to={link.path}
                      className={`block px-4 py-3 rounded-xl font-medium transition-colors ${
                        isActive 
                          ? 'bg-primary-50 text-primary-600' 
                          : 'text-slate-700 hover:bg-primary-50 hover:text-primary-600'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                )
              })}
              <div className="pt-4 flex flex-col gap-3 border-t border-slate-100">
                <a href={`tel:${CLINIC.phoneRaw}`} className="flex items-center gap-2 px-4 py-3 text-slate-700 font-medium">
                  <Phone className="w-4 h-4 text-primary-500" />
                  {CLINIC.phone}
                </a>
                <a
                  href={`https://wa.me/${CLINIC.whatsapp}?text=Hi%2C%20I%20want%20to%20book%20an%20appointment`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp justify-center w-full"
                >
                  📱 Book via WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
