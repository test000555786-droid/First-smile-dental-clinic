import { motion } from 'framer-motion'
import { Phone, Star, Shield, Award, ChevronDown } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { CLINIC } from '../../lib/utils'
import { FloatingElements } from '../effects/FloatingElements'

const stats = [
  { value: '1000+', label: 'Happy Patients' },
  { value: '10+', label: 'Years Experience' },
  { value: '5.0★', label: 'Google Rating' },
  { value: '98%', label: 'Success Rate' },
]

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden hero-bg-pattern pt-24 pb-16">
      {/* Decorative blobs */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-primary-200/30 to-teal-200/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-teal-200/20 to-accent-200/20 blur-3xl pointer-events-none" />
      
      <FloatingElements count={6} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-sm font-semibold mb-6"
            >
              <Award className="w-4 h-4" />
              #1 Dental Clinic in Cuttack · ⭐ 5.0 (52 Reviews)
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] mb-6"
            >
              Pain-Free Dental
              <span className="block gradient-text">Treatment in</span>
              Cuttack
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-slate-500 leading-relaxed mb-8 max-w-lg"
            >
              Trusted by <strong className="text-slate-700">1000+ patients</strong> with 5-star care. Advanced dental treatments by Dr. Abhas Dash, Gold Medalist — using modern, gentle techniques.
            </motion.p>

            {/* Trust Chips */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-2 mb-8"
            >
              {['Pain-Free Treatment', 'Sterilized Equipment', 'EMI Available', 'Open Daily Till 9 PM'].map(t => (
                <span key={t} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-slate-600 text-sm shadow-sm">
                  <Shield className="w-3.5 h-3.5 text-primary-500" />
                  {t}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href={`https://wa.me/${CLINIC.whatsapp}?text=Hi%2C%20I%20want%20to%20book%20a%20dental%20appointment%20at%20First%20Smile%20Dental%20Clinic`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-base px-8 py-4 rounded-xl flex-1 sm:flex-none justify-center"
              >
                <FaWhatsapp className="w-5 h-5" />
                WhatsApp Now
              </a>
              <a
                href={`tel:${CLINIC.phoneRaw}`}
                className="btn-outline text-base px-8 py-4 rounded-xl flex-1 sm:flex-none justify-center"
              >
                <Phone className="w-5 h-5" />
                {CLINIC.phone}
              </a>
            </motion.div>

            {/* Doctor intro */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-4 mt-8 pt-8 border-t border-slate-200"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-500 to-teal-500 flex items-center justify-center text-white font-bold text-lg shadow-button">
                Dr
              </div>
              <div>
                <p className="font-semibold text-slate-800">Dr. Abhas Dash</p>
                <p className="text-sm text-slate-500">BDS, Gold Medalist · SCB Medical College</p>
              </div>
              <div className="ml-auto flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right — Visual */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 40 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              {/* Main Card */}
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-glass-lg border border-white/80 aspect-[4/5] flex items-center justify-center">
                <img 
                  src="/images/hero.webp" 
                  alt="Happy Dental Patient" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 grid grid-cols-2 gap-3 pb-8">
                  {[
                    { icon: '🏅', label: 'Gold Medalist' },
                    { icon: '🔬', label: 'Advanced Tech' },
                    { icon: '💉', label: 'Pain Free' },
                    { icon: '✨', label: 'Smile Design' },
                  ].map(f => (
                    <div key={f.label} className="bg-white/90 backdrop-blur-md rounded-2xl px-4 py-3 flex items-center gap-2 border border-white shadow-sm hover:scale-105 transition-transform duration-300">
                      <span className="text-lg">{f.icon}</span>
                      <span className="text-xs font-semibold text-slate-700">{f.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating badge — rating */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -left-6 top-16 glass-card rounded-2xl p-4 shadow-glass"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center">
                    <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-800 text-lg leading-none">5.0</p>
                    <p className="text-xs text-slate-500">52 Reviews</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating badge — patients */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -right-6 bottom-20 glass-card rounded-2xl p-4 shadow-glass"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center text-xl">
                    😊
                  </div>
                  <div>
                    <p className="font-bold text-slate-800 text-lg leading-none">1000+</p>
                    <p className="text-xs text-slate-500">Patients Treated</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {stats.map((s, i) => (
            <div key={s.label} className="glass-card rounded-2xl p-5 text-center">
              <p className="font-display text-3xl font-bold gradient-text">{s.value}</p>
              <p className="text-slate-500 text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400"
      >
        <ChevronDown className="w-6 h-6" />
      </motion.div>
    </section>
  )
}
