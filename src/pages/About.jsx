import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { Container } from '../components/layout/Container'
import { PageBanner } from '../components/ui/PageBanner'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Doctor } from '../components/sections/Doctor'
import { Testimonials } from '../components/sections/Testimonials'
import { TrustBar } from '../components/sections/TrustBar'
import { CLINIC } from '../lib/utils'
import { doctor } from '../data/doctor'

export function About() {
  return (
    <>
      <PageBanner 
        badge="🏥 About Us"
        title="About"
        highlight="First Smile"
        subtitle="Cuttack's most trusted dental clinic, combining Gold Medal expertise with genuine compassionate care. We believe every smile deserves to shine."
        bgImage="/images/bg_about.png"
      />

      <TrustBar />
      <Doctor />

      {/* Clinic Story */}
      <section className="section-padding bg-gradient-to-br from-blue-50/40 to-white">
        <Container size="sm">
          <SectionHeading badge="📖 Our Story" title="Why We Built" highlight="First Smile" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-slate max-w-none space-y-4 text-slate-600 leading-relaxed"
          >
            <p>First Smile Dental Clinic & Implant Center was founded with a single mission: to make premium dental care accessible, comfortable, and affordable for every family in Cuttack and Odisha.</p>
            <p>Located in the heart of Mangalabag, Cuttack, our clinic is equipped with state-of-the-art dental technology and staffed by compassionate professionals who truly care about your dental health.</p>
            <p>Dr. Abhas Dash — our Gold Medalist Chief Dental Surgeon — believes that dental anxiety should never be a barrier to treatment. That's why we've built every process, every environment, and every interaction to put you at ease from the moment you walk in.</p>
            <p>With transparent pricing, flexible EMI options, and evening hours available daily, we've made it easy for busy professionals, parents, and seniors to prioritize their dental health.</p>
          </motion.div>
        </Container>
      </section>

      <Testimonials />

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-teal-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_60%)]" />
        <Container className="relative z-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Ready for a Healthier Smile?
          </motion.h2>
          <p className="text-white/80 mb-8 text-lg">Book your free consultation with Dr. Abhas Dash today.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/${CLINIC.whatsapp}?text=Hi%2C%20I%27d%20like%20to%20book%20a%20consultation`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-base px-9 py-4"
            >
              <FaWhatsapp className="w-5 h-5" /> Book Consultation
            </a>
            <a href={`tel:${CLINIC.phoneRaw}`} className="bg-white/20 backdrop-blur text-white border-2 border-white/40 hover:bg-white/30 px-9 py-4 rounded-xl font-semibold transition-all duration-300 text-base">
              📞 {CLINIC.phone}
            </a>
          </div>
        </Container>
      </section>
    </>
  )
}
