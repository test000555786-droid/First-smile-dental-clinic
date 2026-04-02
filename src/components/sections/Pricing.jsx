import { motion } from 'framer-motion'
import { Check, Zap } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { SectionHeading } from '../ui/SectionHeading'
import { Container } from '../layout/Container'
import { pricingPlans, pricingTable } from '../../data/pricing'
import { CLINIC } from '../../lib/utils'

export function Pricing() {
  return (
    <section className="section-padding bg-gradient-to-br from-blue-50/40 via-white to-teal-50/30">
      <Container>
        <SectionHeading
          badge="💰 Transparent Pricing"
          title="Affordable Care,"
          highlight="No Hidden Costs"
          subtitle="Quality dental care shouldn't break the bank. Clear pricing with flexible EMI options for every budget."
        />

        {/* Plan Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16 items-center">
          {pricingPlans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`price-card relative ${plan.featured ? 'price-card-featured' : ''}`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full bg-amber-400 text-amber-900 text-xs font-bold shadow-md flex items-center gap-1.5 whitespace-nowrap">
                  <Zap className="w-3 h-3" /> {plan.badge}
                </div>
              )}

              <p className={`text-xs font-bold uppercase tracking-widest mb-2 ${plan.featured ? 'text-white/70' : 'text-primary-500'}`}>
                {plan.subtitle}
              </p>
              <h3 className={`font-display text-2xl font-bold mb-4 ${plan.featured ? 'text-white' : 'text-slate-800'}`}>
                {plan.name}
              </h3>
              <div className="mb-6">
                <span className={`font-display text-4xl font-bold ${plan.featured ? 'text-white' : 'gradient-text'}`}>
                  {plan.price}
                </span>
                <span className={`text-sm ml-2 ${plan.featured ? 'text-white/70' : 'text-slate-400'}`}>
                  {plan.period}
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.services.map(s => (
                  <li key={s} className={`flex items-start gap-3 text-sm ${plan.featured ? 'text-white/90' : 'text-slate-600'}`}>
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${plan.featured ? 'bg-white/20' : 'bg-primary-100'}`}>
                      <Check className={`w-3 h-3 ${plan.featured ? 'text-white' : 'text-primary-600'}`} />
                    </div>
                    {s}
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/${CLINIC.whatsapp}?text=Hi%2C%20I%27m%20interested%20in%20the%20${encodeURIComponent(plan.name)}%20plan`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold transition-all duration-300 ${
                  plan.featured
                    ? 'bg-white text-primary-600 hover:bg-white/90 hover:-translate-y-0.5'
                    : 'btn-primary'
                }`}
              >
                <FaWhatsapp className="w-4 h-4" /> {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Price Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-card rounded-3xl p-8"
        >
          <h3 className="font-display text-2xl font-bold text-slate-800 mb-6 text-center">
            Treatment <span className="gradient-text">Price Guide</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-x-12">
            {pricingTable.map((item, i) => (
              <div key={item.service} className={`flex items-center justify-between py-3 ${i < pricingTable.length - 2 ? 'border-b border-slate-100' : ''}`}>
                <span className="text-slate-600 text-sm">{item.service}</span>
                <span className="font-semibold text-primary-600 text-sm">{item.price}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-slate-400 text-xs mt-6">* Prices may vary based on case complexity. Free consultation available.</p>
        </motion.div>
      </Container>
    </section>
  )
}
