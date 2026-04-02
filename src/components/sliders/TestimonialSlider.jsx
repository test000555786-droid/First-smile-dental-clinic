import { useRef } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'

export function TestimonialSlider({ testimonials }) {
  const scrollRef = useRef(null)

  const scroll = (dir) => {
    const el = scrollRef.current
    if (!el) return
    el.scrollBy({ left: dir * 340, behavior: 'smooth' })
  }

  return (
    <div className="relative">
      {/* Navigation */}
      <div className="flex justify-end gap-3 mb-6">
        {[{ dir: -1, icon: <ChevronLeft className="w-5 h-5" /> }, { dir: 1, icon: <ChevronRight className="w-5 h-5" /> }].map(b => (
          <button
            key={b.dir}
            onClick={() => scroll(b.dir)}
            className="w-11 h-11 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-primary-50 hover:border-primary-200 hover:text-primary-600 transition-all duration-200 shadow-sm"
          >
            {b.icon}
          </button>
        ))}
      </div>

      {/* Slider */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-4 scrollbar-none snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {testimonials.map((t, i) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="flex-shrink-0 w-80 md:w-96 snap-start"
          >
            <div className="bg-white rounded-3xl p-7 border border-slate-100 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
              {/* Quote icon */}
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: `${t.color}18` }}>
                <Quote className="w-5 h-5" style={{ color: t.color }} />
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Review */}
              <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-5 italic">"{t.review}"</p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm" style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}aa)` }}>
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-slate-800 text-sm">{t.name}</p>
                  <p className="text-slate-400 text-xs">{t.treatment} · {t.date}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Google Review badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="text-center mt-8"
      >
        <a
          href="https://maps.google.com/?q=First+Smile+Dental+Clinic+Cuttack"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-card border border-amber-200/60 text-slate-600 text-sm hover:shadow-card transition-all duration-300"
        >
          <span className="flex gap-0.5">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />)}
          </span>
          <span className="font-semibold">5.0 · 52 Reviews on Google</span>
          <span className="text-xs text-slate-400">View All →</span>
        </a>
      </motion.div>
    </div>
  )
}
