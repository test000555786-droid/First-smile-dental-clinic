import { motion } from 'framer-motion'
import { MapPin, Phone, Clock, Star } from 'lucide-react'
import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa'
import { Container } from '../components/layout/Container'
import { PageBanner } from '../components/ui/PageBanner'
import { AppointmentForm } from '../components/forms/AppointmentForm'
import { FAQ } from '../components/sections/FAQ'
import { CLINIC } from '../lib/utils'
import { PageSEO } from '../components/seo/PageSEO'

export function Contact() {
  return (
    <>
      <PageSEO />
      <PageBanner 
        badge="📅 Book Appointment"
        title="Contact"
        highlight="Us"
        subtitle="We're here to help. Book online, call, or just walk in. Appointments confirmed within 30 minutes."
        bgImage="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
      />

      {/* Main Content */}
      <section className="section-padding bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-14">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <AppointmentForm />
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="flex flex-col gap-6"
            >
              {/* Info Cards */}
              {[
                { icon: <MapPin className="w-5 h-5" />, color: 'text-primary-600 bg-primary-100', title: 'Visit Us', desc: CLINIC.address },
                { icon: <Phone className="w-5 h-5" />, color: 'text-teal-600 bg-teal-100', title: 'Call / WhatsApp', desc: CLINIC.phone, href: `tel:${CLINIC.phoneRaw}` },
                { icon: <Clock className="w-5 h-5" />, color: 'text-emerald-600 bg-emerald-100', title: 'Open Hours', desc: CLINIC.timing },
                { icon: <Star className="w-5 h-5" />, color: 'text-amber-600 bg-amber-100', title: 'Rating', desc: '5.0★ · 52 Google Reviews' },
              ].map(item => (
                <div key={item.title} className="flex gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className={`w-10 h-10 rounded-xl ${item.color} flex items-center justify-center flex-shrink-0`}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800 text-sm mb-0.5">{item.title}</p>
                    {item.href
                      ? <a href={item.href} className="text-slate-600 text-sm hover:text-primary-600">{item.desc}</a>
                      : <p className="text-slate-500 text-sm">{item.desc}</p>
                    }
                  </div>
                </div>
              ))}

              {/* Social Links */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
                <p className="font-semibold text-slate-800 text-sm mb-4">Follow Us</p>
                <div className="flex flex-wrap gap-3">
                  {[
                    { icon: <FaWhatsapp className="w-5 h-5" />, label: 'WhatsApp', href: `https://wa.me/${CLINIC.whatsapp}`, color: 'hover:bg-green-500' },
                    { icon: <FaInstagram className="w-5 h-5" />, label: 'Instagram', href: '#', color: 'hover:bg-pink-500' },
                    { icon: <FaFacebook className="w-5 h-5" />, label: 'Facebook', href: '#', color: 'hover:bg-blue-600' },
                  ].map(s => (
                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-white ${s.color} transition-all duration-300 text-sm font-medium`}
                    >
                      {s.icon} {s.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Map */}
              <div className="w-full overflow-hidden rounded-xl border border-slate-100 shadow-card h-[300px]">
                <iframe
                  src="https://maps.google.com/maps?q=First+Smile+Dental+Clinic+Mangalabag+Kathagola+Cuttack+Odisha+753001+India&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full"
                  loading="lazy"
                  title="Clinic Location Map"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      <FAQ />
    </>
  )
}
