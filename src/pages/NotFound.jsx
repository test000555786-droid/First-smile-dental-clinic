import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export function NotFound() {
  return (
    <section className="min-h-screen hero-bg-pattern flex items-center">
      <div className="max-w-xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-8xl mb-6"
        >
          🦷
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-display text-6xl font-bold gradient-text mb-4"
        >
          404
        </motion.h1>
        <p className="text-xl text-slate-600 mb-8">Oops! Page not found. Let's get you back to a healthy smile.</p>
        <Link to="/" className="btn-primary text-base px-8 py-4">← Back to Home</Link>
      </div>
    </section>
  )
}
