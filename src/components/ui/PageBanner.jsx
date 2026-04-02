import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Container } from '../layout/Container'

export function PageBanner({ badge, title, highlight, subtitle, bgImage }) {
  const ref = useRef(null)
  
  // Setup scroll progress tracking on this specific banner section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })
  
  // Parallax mapping: as user scrolls down, background moves down slightly
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  return (
    <section 
      ref={ref}
      className="relative pt-32 pb-24 overflow-hidden flex items-center min-h-[450px]"
    >
      {/* Background Image Container */}
      <div className="absolute inset-0 overflow-hidden bg-slate-900">
        <motion.div 
          style={{ y, backgroundImage: `url(${bgImage})` }}
          className="absolute inset-x-0 -top-20 -bottom-20 bg-cover bg-center bg-no-repeat opacity-80"
        />
      </div>
      
      {/* Dark & Brand Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-teal-900/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />

      {/* Foreground Content */}
      <Container className="relative z-10 w-full">
        <div className="text-center max-w-3xl mx-auto">
          {badge && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-semibold mb-6 shadow-xl"
            >
              {badge}
            </motion.div>
          )}
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            {title} {highlight && <span className="text-teal-300">{highlight}</span>}
          </motion.h1>
          
          {subtitle && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg text-slate-200 leading-relaxed font-light"
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </Container>
    </section>
  )
}
