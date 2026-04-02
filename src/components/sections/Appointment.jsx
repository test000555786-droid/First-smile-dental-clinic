import { motion } from 'framer-motion'
import { SectionHeading } from '../ui/SectionHeading'
import { Container } from '../layout/Container'
import { AppointmentForm } from '../forms/AppointmentForm'
import { MapPin, Phone, Clock } from 'lucide-react'
import { CLINIC } from '../../lib/utils'

export function Appointment() {
  return (
    <section className="section-padding bg-gradient-to-br from-blue-50/50 via-white to-teal-50/30">
      <Container>
        <SectionHeading
          badge="📅 Book Appointment"
          title="Schedule Your"
          highlight="Visit Today"
          subtitle="Fill the form below or WhatsApp us directly. We'll confirm your appointment within 30 minutes."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <AppointmentForm />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Contact Cards */}
            {[
              { icon: <MapPin className="w-5 h-5 text-primary-600" />, title: 'Our Location', desc: CLINIC.address, bg: 'bg-blue-50' },
              { icon: <Phone className="w-5 h-5 text-teal-600" />, title: 'Phone & WhatsApp', desc: CLINIC.phone, bg: 'bg-teal-50', href: `tel:${CLINIC.phoneRaw}` },
              { icon: <Clock className="w-5 h-5 text-emerald-600" />, title: 'Working Hours', desc: CLINIC.timing, bg: 'bg-emerald-50' },
            ].map(item => (
              <div key={item.title} className={`flex gap-4 p-5 rounded-2xl ${item.bg} border border-white`}>
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="font-semibold text-slate-800 text-sm">{item.title}</p>
                  {item.href
                    ? <a href={item.href} className="text-slate-600 text-sm hover:text-primary-600 transition-colors">{item.desc}</a>
                    : <p className="text-slate-600 text-sm">{item.desc}</p>
                  }
                </div>
              </div>
            ))}

            {/* Map */}
            <div className="rounded-3xl overflow-hidden border border-slate-100 shadow-card h-56">
              <iframe
                src="https://maps.google.com/maps?q=Mangalabag+Cuttack&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full"
                loading="lazy"
                title="Clinic Map"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
