import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export function ParallaxBackground({ children, className }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="absolute inset-0 scale-110">
        {children}
      </motion.div>
    </div>
  )
}
