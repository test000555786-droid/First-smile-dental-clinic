import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star, Users, Clock, Award, Shield } from 'lucide-react'

const stats = [
  { icon: <Star className="w-6 h-6" />, value: 5.0, suffix: '★', label: 'Google Rating', color: 'amber', decimals: 1 },
  { icon: <Users className="w-6 h-6" />, value: 1000, suffix: '+', label: 'Patients Treated', color: 'blue', decimals: 0 },
  { icon: <Clock className="w-6 h-6" />, value: 10, suffix: '+', label: 'Years Experience', color: 'teal', decimals: 0 },
  { icon: <Award className="w-6 h-6" />, value: 52, suffix: '', label: 'Google Reviews', color: 'violet', decimals: 0 },
  { icon: <Shield className="w-6 h-6" />, value: 98, suffix: '%', label: 'Success Rate', color: 'emerald', decimals: 0 },
]

const colorMap = {
  amber: { icon: 'bg-amber-100 text-amber-600', value: 'text-amber-600' },
  blue: { icon: 'bg-blue-100 text-blue-600', value: 'text-blue-600' },
  teal: { icon: 'bg-teal-100 text-teal-600', value: 'text-teal-600' },
  violet: { icon: 'bg-violet-100 text-violet-600', value: 'text-violet-600' },
  emerald: { icon: 'bg-emerald-100 text-emerald-600', value: 'text-emerald-600' },
}

function CountUp({ target, suffix, decimals, active }) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!active) return
    let start = 0
    const duration = 1800
    const step = 16
    const totalSteps = duration / step
    const increment = target / totalSteps
    const timer = setInterval(() => {
      start += increment
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(parseFloat(start.toFixed(decimals)))
    }, step)
    return () => clearInterval(timer)
  }, [active, target, decimals])

  return <span>{decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}{suffix}</span>
}

export function TrustBar() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-16 bg-gradient-to-br from-slate-50 to-blue-50/40 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center group"
            >
              <div className={`w-14 h-14 rounded-2xl ${colorMap[s.color].icon} mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                {s.icon}
              </div>
              <p className={`font-display text-3xl font-bold ${colorMap[s.color].value} leading-none mb-1 counter-value`}>
                <CountUp target={s.value} suffix={s.suffix} decimals={s.decimals} active={inView} />
              </p>
              <p className="text-slate-500 text-sm font-medium">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
