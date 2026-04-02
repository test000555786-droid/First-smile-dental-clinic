import { motion } from 'framer-motion'
import { Award, BookOpen, Star, Users } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { SectionHeading } from '../ui/SectionHeading'
import { Container } from '../layout/Container'
import { doctor } from '../../data/doctor'
import { CLINIC } from '../../lib/utils'

export function Doctor() {
  return (
    <section className="section-padding bg-white">
      <Container>
        <SectionHeading
          badge="👨‍⚕️ Meet Your Doctor"
          title="Expert Care by"
          highlight="Dr. Abhas Dash"
          subtitle="Gold Medalist · BDS · SCB Medical College, Cuttack"
        />

        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Visual Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Doctor Card */}
            <div className="relative rounded-[2.5rem] overflow-hidden border border-primary-100 shadow-glass-lg aspect-[3/4] flex items-center justify-center">
              <img 
                src="/images/doctor.png" 
                alt="Dr. Abhas Dash" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/80 to-transparent p-8 pt-20">
                <div className="grid grid-cols-2 gap-3 w-full">
                  {doctor.achievements.map(a => (
                    <div key={a.title} className="bg-white/90 backdrop-blur-md rounded-2xl p-3 text-center border border-white shadow-sm hover:scale-105 transition-transform duration-300">
                      <span className="text-2xl block mb-1">{a.icon}</span>
                      <p className="text-xs font-bold text-slate-800">{a.title}</p>
                      <p className="text-[10px] text-slate-500">{a.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Experience badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity }}
              className="absolute -right-6 top-12 glass-card rounded-2xl p-4 shadow-glass"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center">
                  <Award className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <p className="font-bold text-slate-800">{doctor.experience} Yrs</p>
                  <p className="text-xs text-slate-500">Experience</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Gold Medal highlight */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-sm font-semibold mb-6">
              🏅 Gold Medalist — SCB Medical College
            </div>

            <p className="text-slate-600 leading-relaxed mb-4">{doctor.bio}</p>
            <p className="text-slate-600 leading-relaxed mb-8">{doctor.bio2}</p>

            {/* Specializations */}
            <div className="mb-8">
              <h4 className="font-display font-bold text-slate-800 mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary-500" /> Specializations
              </h4>
              <div className="flex flex-wrap gap-2">
                {doctor.specializations.map(s => (
                  <span key={s} className="px-4 py-2 rounded-full bg-primary-50 text-primary-700 text-sm font-medium border border-primary-100">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { v: doctor.patientsServed, l: 'Patients', icon: <Users className="w-5 h-5" /> },
                { v: doctor.experience, l: 'Experience', icon: <Award className="w-5 h-5" /> },
                { v: doctor.successRate, l: 'Success Rate', icon: <Star className="w-5 h-5" /> },
              ].map(s => (
                <div key={s.l} className="text-center p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <p className="font-display text-2xl font-bold gradient-text">{s.v}</p>
                  <p className="text-slate-500 text-xs mt-1">{s.l}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href={`https://wa.me/${CLINIC.whatsapp}?text=Hi%20Dr.%20Abhas%2C%20I%20would%20like%20to%20book%20a%20consultation`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp inline-flex text-base px-8 py-4"
            >
              <FaWhatsapp className="w-5 h-5" />
              Book Consultation
            </a>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
