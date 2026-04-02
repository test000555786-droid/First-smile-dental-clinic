import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function Loader({ onComplete }) {
  const [count, setCount] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setDone(true)
            setTimeout(onComplete, 600)
          }, 300)
          return 100
        }
        return prev + Math.floor(Math.random() * 12) + 3
      })
    }, 60)
    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-teal-50"
        >
          {/* Floating circles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full opacity-20"
                style={{
                  width: `${80 + i * 60}px`,
                  height: `${80 + i * 60}px`,
                  background: i % 2 === 0 ? '#0ea5e9' : '#14b8a6',
                  top: `${10 + i * 15}%`,
                  left: `${5 + i * 20}%`,
                  animation: `float ${4 + i}s ease-in-out infinite`,
                  animationDelay: `${i * 0.5}s`,
                }}
              />
            ))}
          </div>
          
          <div className="relative z-10 text-center">
            {/* Logo */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, type: 'spring' }}
              className="w-24 h-24 rounded-3xl bg-gradient-to-br from-primary-500 to-teal-500 mx-auto mb-8 flex items-center justify-center shadow-button"
            >
              <span className="text-5xl">🦷</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-display text-2xl font-bold text-slate-800 mb-1"
            >
              First Smile Dental
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-slate-500 text-sm mb-10"
            >
              Implant Center & Clinic
            </motion.p>
            
            {/* Progress bar */}
            <div className="w-64 h-1.5 bg-slate-100 rounded-full overflow-hidden mx-auto mb-3">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-primary-500 to-teal-500"
                style={{ width: `${count}%` }}
                transition={{ ease: 'easeOut' }}
              />
            </div>
            <p className="text-slate-400 text-xs font-mono">{Math.min(count, 100)}%</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
