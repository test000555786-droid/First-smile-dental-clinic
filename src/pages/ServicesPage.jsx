import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { Container } from '../components/layout/Container'
import { PageBanner } from '../components/ui/PageBanner'
import { SectionHeading } from '../components/ui/SectionHeading'
import { services, serviceColors } from '../data/services'
import { CLINIC } from '../lib/utils'
import { Appointment } from '../components/sections/Appointment'
import { FAQ } from '../components/sections/FAQ'

export function ServicesPage() {
  return (
    <>
      <PageBanner 
        badge="🦷 Complete Dental Care"
        title="Our"
        highlight="Services"
        subtitle="From preventive care to complex implants — comprehensive dental solutions for all ages."
        bgImage="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
      />

      {/* Service Detail Cards */}
      <section className="section-padding bg-white">
        <Container>
          <div className="flex flex-col gap-16">
            {services.map((service, i) => {
              const colors = serviceColors[service.color]
              const isEven = i % 2 === 0
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className={`grid lg:grid-cols-2 gap-10 items-center ${!isEven ? 'lg:grid-flow-dense' : ''}`}
                >
                  {/* Visual */}
                  <div className={!isEven ? 'lg:col-start-2' : ''}>
                    <div className="relative rounded-3xl overflow-hidden border border-slate-100 shadow-card aspect-video flex items-center justify-center group">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  {/* Text */}
                  <div className={!isEven ? 'lg:col-start-1' : ''}>
                    <div className={`section-badge mb-4 ${colors.badge}`}>
                      {service.icon} {service.priceRange}
                    </div>
                    <h2 className="font-display text-3xl font-bold text-slate-900 mb-4">{service.title}</h2>
                    <p className="text-slate-500 leading-relaxed mb-6">{service.description}</p>
                    <ul className="space-y-2 mb-8">
                      {service.features.map(f => (
                        <li key={f} className="flex items-center gap-3 text-slate-600">
                          <div className="w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                            <ArrowRight className="w-3 h-3 text-primary-600" />
                          </div>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={`https://wa.me/${CLINIC.whatsapp}?text=Hi%2C%20I%27m%20interested%20in%20${encodeURIComponent(service.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-whatsapp inline-flex text-base px-8 py-3.5"
                    >
                      <FaWhatsapp className="w-5 h-5" /> Book {service.title}
                    </a>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </Container>
      </section>

      <Appointment />
      <FAQ />
    </>
  )
}
