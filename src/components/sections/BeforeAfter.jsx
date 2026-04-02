import { motion } from 'framer-motion'
import { SectionHeading } from '../ui/SectionHeading'
import { Container } from '../layout/Container'
import { CLINIC } from '../../lib/utils'

const cases = [
  { before: '/transformations/whitening_before.png', after: '/transformations/whitening_after.png', treatment: 'Teeth Whitening', tag: 'Whitening', color: 'from-yellow-100 to-white', afterColor: 'from-blue-100 to-white' },
  { before: '/transformations/implant_before.png', after: '/transformations/implant_after.png', treatment: 'Dental Implant', tag: 'Implant', color: 'from-red-50 to-white', afterColor: 'from-teal-50 to-white' },
  { before: '/transformations/braces_before.png', after: '/transformations/braces_after.png', treatment: 'Braces & Aligners', tag: 'Orthodontics', color: 'from-orange-50 to-white', afterColor: 'from-green-50 to-white' },
  { before: '/transformations/root_canal_before.png', after: '/transformations/root_canal_after.png', treatment: 'Root Canal', tag: 'Pain Relief', color: 'from-rose-50 to-white', afterColor: 'from-emerald-50 to-white' },
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
            <motion.div
              key={c.treatment}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group rounded-3xl overflow-hidden border border-slate-100 shadow-card hover:shadow-card-hover transition-all duration-500"
            >
              <div className="grid grid-cols-2">
                {/* Before */}
                <div className={`bg-gradient-to-br ${c.color} p-6 flex flex-col items-center justify-center gap-4 border-r border-slate-100`}>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Before</p>
                  <div className="overflow-hidden rounded-2xl shadow-sm w-full max-w-[160px] aspect-square">
                    <img src={c.before} alt={`${c.treatment} Before`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="px-3 py-1 rounded-full bg-red-100 text-red-600 text-xs font-semibold">Before Treatment</div>
                </div>
                {/* After */}
                <div className={`bg-gradient-to-br ${c.afterColor} p-6 flex flex-col items-center justify-center gap-4`}>
                  <p className="text-xs font-bold text-primary-500 uppercase tracking-widest">After</p>
                  <div className="overflow-hidden rounded-2xl shadow-sm w-full max-w-[160px] aspect-square">
                    <img src={c.after} alt={`${c.treatment} After`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-600 text-xs font-semibold">After Treatment</div>
                </div>
              </div>
              <div className="p-5 bg-white border-t border-slate-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-display font-bold text-slate-800">{c.treatment}</p>
                    <div className="flex mt-1">
                      {[...Array(5)].map((_, j) => (
                        <span key={j} className="text-amber-400 text-sm">★</span>
                      ))}
                    </div>
                  </div>
                  <span className="section-badge text-xs">{c.tag}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-slate-500 mb-6">Want to see your own transformation?</p>
          <a
            href={`https://wa.me/${CLINIC.whatsapp}?text=Hi%2C%20I%20want%20to%20book%20a%20smile%20consultation`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-base px-9 py-4"
          >
            ✨ Start Your Smile Journey
          </a>
        </motion.div>
      </Container>
    </section>
  )
}
