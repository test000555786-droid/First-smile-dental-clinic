import { motion } from 'framer-motion'

const floatingIcons = ['🦷', '✨', '😁', '🏥', '💎', '⭐', '🔬', '🩺']

export function FloatingElements({ count = 6 }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {floatingIcons.slice(0, count).map((icon, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl select-none"
          style={{
            top: `${10 + (i * 14) % 80}%`,
            left: `${(i * 17 + 5) % 90}%`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, i % 2 === 0 ? 10 : -10, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 4 + i * 0.8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.6,
          }}
        >
          <div className="w-12 h-12 rounded-2xl bg-white/70 backdrop-blur-sm border border-white/80 shadow-card flex items-center justify-center text-lg">
            {icon}
          </div>
        </motion.div>
      ))}
    </div>
  )
}
