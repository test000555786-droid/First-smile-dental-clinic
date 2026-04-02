import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { SectionHeading } from '../ui/SectionHeading'
import { Container } from '../layout/Container'
import { services, serviceColors } from '../../data/services'
import { CLINIC } from '../../lib/utils'

export function Services() {
  return (
    <section className="section-padding bg-white">
      <Container>
        <SectionHeading
          badge="🦷 Our Treatments"
          title="Complete Dental Care"
          highlight="Under One Roof"
          subtitle="From routine checkups to complex implants — we offer comprehensive dental solutions tailored for you and your family."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const colors = serviceColors[service.color]
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="card-service group"
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl ${colors.icon} flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-bold text-slate-800 mb-2">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{service.shortDesc}</p>

                {/* Features */}
                <ul className="space-y-1.5 mb-5">
                  {service.features.slice(0, 3).map(f => (
                    <li key={f} className="flex items-center gap-2 text-xs text-slate-500">
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: colors.accent }} />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Price + CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
                  <span className={`text-sm font-semibold px-3 py-1 rounded-full border ${colors.badge}`}>
                    {service.priceRange}
                  </span>
                  <a
                    href={`https://wa.me/${CLINIC.whatsapp}?text=Hi%2C%20I%20want%20to%20book%20${encodeURIComponent(service.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-semibold text-primary-600 hover:gap-2.5 transition-all duration-200 group-hover:text-primary-700"
                  >
                    Book Now <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link to="/services" className="btn-outline text-base px-8 py-3.5 rounded-xl">
            View All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </Container>
    </section>
  )
}
