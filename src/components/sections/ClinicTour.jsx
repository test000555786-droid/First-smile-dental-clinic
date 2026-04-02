import { motion } from 'framer-motion'
import { Play, Shield, Award, Microscope } from 'lucide-react'
import { Container } from '../layout/Container'

const features = [
  { icon: <Shield className="w-5 h-5" />, label: 'Sterilized Equipment' },
  { icon: <Award className="w-5 h-5" />, label: 'Certified Specialists' },
  { icon: <Microscope className="w-5 h-5" />, label: 'Latest Technology' },
]

export function ClinicTour() {
  return (
    <section className="section-padding bg-slate-900 relative overflow-hidden">
      {/* BG Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 via-slate-900 to-teal-900/60" />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary-500/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-teal-500/10 blur-3xl" />

      <Container className="relative z-10">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/80 text-sm font-semibold mb-4"
          >
            🏥 Virtual Clinic Tour
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl md:text-5xl font-bold text-white mb-4"
          >
            A Clinic Designed
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-teal-400">
              for Your Comfort
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 max-w-lg mx-auto"
          >
            Step into a modern, welcoming environment equipped with the latest dental technology and designed for your comfort.
          </motion.p>
        </div>

        {/* Video Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden aspect-video max-w-4xl mx-auto mb-12 border border-white/10"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/80 to-teal-900/60 flex flex-col items-center justify-center gap-6">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/40 flex items-center justify-center hover:bg-white/30 transition-colors"
            >
              <Play className="w-8 h-8 text-white ml-1" />
            </motion.button>
            <div className="text-center">
              <p className="text-white font-semibold text-lg">Clinic Walkthrough Video</p>
              <p className="text-white/60 text-sm">First Smile Dental & Implant Center</p>
            </div>
            {/* Floating icons */}
            <div className="absolute top-6 left-6 text-4xl animate-float">🦷</div>
            <div className="absolute bottom-6 right-6 text-4xl animate-float-slow">✨</div>
            <div className="absolute top-6 right-6 text-3xl" style={{ animation: 'float 7s ease-in-out infinite', animationDelay: '1s' }}>🔬</div>
          </div>
        </motion.div>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-4">
          {features.map((f, i) => (
            <motion.div
              key={f.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/10 backdrop-blur border border-white/20 text-white"
            >
              <span className="text-primary-400">{f.icon}</span>
              <span className="font-medium text-sm">{f.label}</span>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
