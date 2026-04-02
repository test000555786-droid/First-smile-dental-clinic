import { motion } from 'framer-motion'
import { SectionHeading } from '../ui/SectionHeading'
import { Container } from '../layout/Container'
import { Stagger, StaggerItem } from '../animations/Stagger'

const reasons = [
  { icon: '💉', title: 'Pain-Free Treatment', desc: 'Advanced local anesthesia and sedation options ensure your comfort. Most patients feel nothing at all.', color: 'bg-blue-100' },
  { icon: '🔬', title: 'Latest Technology', desc: 'Digital X-rays, laser dentistry, rotary instruments — state-of-the-art equipment for precise results.', color: 'bg-teal-100' },
  { icon: '🧼', title: 'Strict Sterilization', desc: 'Hospital-grade autoclave sterilization. All instruments disinfected, single-use items where possible.', color: 'bg-emerald-100' },
  { icon: '💰', title: 'Transparent Pricing', desc: 'No hidden costs. Clear treatment plans with flexible EMI options for all budgets.', color: 'bg-violet-100' },
  { icon: '🏅', title: 'Expert Specialist', desc: 'Dr. Abhas Dash — Gold Medalist BDS with PG training at a premier cancer research institute.', color: 'bg-amber-100' },
  { icon: '⏰', title: 'Open Every Day', desc: 'Available morning to evening, including Sundays and public holidays. Emergency care always available.', color: 'bg-rose-100' },
]

export function WhyChooseUs() {
  return (
    <section className="section-padding bg-gradient-to-br from-blue-50/50 via-white to-teal-50/30">
      <Container>
        <SectionHeading
          badge="💎 Why Choose Us"
          title="Experience the"
          highlight="First Smile Difference"
          subtitle="We combine clinical excellence with compassionate care to give you the best dental experience in Cuttack."
        />

        <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <StaggerItem key={r.title}>
              <motion.div
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="bg-white rounded-3xl p-7 border border-slate-100 shadow-card hover:shadow-card-hover transition-shadow duration-300 h-full"
              >
                <div className={`w-14 h-14 rounded-2xl ${r.color} flex items-center justify-center text-2xl mb-5`}>
                  {r.icon}
                </div>
                <h3 className="font-display text-lg font-bold text-slate-800 mb-3">{r.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{r.desc}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  )
}
