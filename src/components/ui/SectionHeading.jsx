import { motion } from 'framer-motion'
import { cn } from '../../lib/utils'

export function SectionHeading({ badge, title, highlight, subtitle, center = true, className }) {
  return (
    <div className={cn('mb-14', center && 'text-center', className)}>
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-badge"
        >
          {badge}
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={cn(
          'font-display text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 leading-tight',
          center && 'mx-auto'
        )}
      >
        {title}{' '}
        {highlight && <span className="gradient-text">{highlight}</span>}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={cn(
            'mt-4 text-lg text-slate-500 leading-relaxed max-w-2xl',
            center && 'mx-auto'
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
