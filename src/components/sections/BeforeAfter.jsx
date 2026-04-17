import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { SectionHeading } from '../ui/SectionHeading'
import { Container } from '../layout/Container'
import { CLINIC } from '../../lib/utils'

const cases = [
  { before: '/transformations/whitening_before.webp', after: '/transformations/whitening_after.webp', treatment: 'Teeth Whitening', tag: 'Whitening' },
  { before: '/transformations/implant_before.webp',   after: '/transformations/implant_after.webp',   treatment: 'Dental Implant',  tag: 'Implant' },
  { before: '/transformations/braces_before.webp',    after: '/transformations/braces_after.webp',    treatment: 'Braces & Aligners', tag: 'Orthodontics' },
  { before: '/transformations/root_canal_before.webp',after: '/transformations/root_canal_after.webp',treatment: 'Root Canal',     tag: 'Pain Relief' },
]

export function BeforeAfter() {
  return (
    <section className="section-padding bg-white">
      <Container>
        <SectionHeading
          badge="📸 Smile Transformations"
          title="Real Results, Real"
          highlight="Transformations"
          subtitle="See the amazing smile makeovers we've achieved for our patients. Every smile tells a story."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {cases.map((c, i) => (
            <motion.article
              key={c.treatment}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              aria-label={`${c.treatment} before and after transformation`}
              className="group rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-500"
            >
              {/* ── Image Split ─────────────────────────────── */}
              <div className="grid grid-cols-2 h-64 sm:h-72">

                {/* BEFORE half */}
                <div className="relative overflow-hidden">
                  <img
                    src={c.before}
                    alt={`${c.treatment} Before`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* dark top gradient for label contrast */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-transparent to-black/30 pointer-events-none" />

                  {/* BEFORE badge — top left */}
                  <span className="absolute top-3 left-3 px-2.5 py-[5px] rounded-full bg-red-500/90 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-widest shadow-sm">
                    Before
                  </span>

                  {/* Divider line */}
                  <div className="absolute top-0 right-0 bottom-0 w-px bg-white/40 z-10" />
                </div>

                {/* AFTER half */}
                <div className="relative overflow-hidden">
                  <img
                    src={c.after}
                    alt={`${c.treatment} After`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* dark top gradient for label contrast */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-transparent to-black/30 pointer-events-none" />

                  {/* AFTER badge — top right */}
                  <span className="absolute top-3 right-3 px-2.5 py-[5px] rounded-full bg-emerald-500/90 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-widest shadow-sm">
                    After
                  </span>
                </div>
              </div>

              {/* ── Bottom Info Bar ──────────────────────────── */}
              <div className="flex items-center justify-between px-5 py-4 bg-white border-t border-slate-100">
                <div>
                  <p className="font-display font-bold text-slate-800 text-sm sm:text-base leading-tight">
                    {c.treatment}
                  </p>
                  {/* Stars */}
                  <div className="flex gap-0.5 mt-1" aria-label="5 star rating">
                    {[...Array(5)].map((_, j) => (
                      <span key={j} className="text-amber-400 text-sm leading-none">★</span>
                    ))}
                  </div>
                </div>
                <span className="section-badge text-xs">{c.tag}</span>
              </div>
            </motion.article>
          ))}
        </div>

        {/* ── CTA ─────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-slate-500 mb-6">Want to see your own transformation?</p>
          <a
            href={`https://wa.me/${CLINIC.whatsapp}?text=Hi%2C%20I%20want%20to%20book%20a%20smile%20consultation`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-base px-9 py-4 inline-flex items-center gap-2 group/cta"
          >
            ✨ Start Your Smile Journey
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/cta:translate-x-1" />
          </a>
        </motion.div>
      </Container>
    </section>
  )
}
