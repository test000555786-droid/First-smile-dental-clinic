import { motion } from 'framer-motion'
import { SectionHeading } from '../ui/SectionHeading'
import { Container } from '../layout/Container'
import { Stagger, StaggerItem } from '../animations/Stagger'

const reasons = [
  { 
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop',
    title: 'Pain-Free Treatment', 
    shortDesc: 'Comfortable dentistry without the fear.',
    desc: 'Advanced local anesthesia and sedation options ensure your comfort. Most patients feel nothing at all.', 
  },
  { 
    image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Latest Technology', 
    shortDesc: 'State-of-the-art equipment for precision.',
    desc: 'Digital X-rays, laser dentistry, rotary instruments — state-of-the-art equipment for precise results.', 
  },
  { 
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop',
    title: 'Strict Sterilization', 
    shortDesc: 'Hospital-grade hygiene protocols.',
    desc: 'Hospital-grade autoclave sterilization. All instruments disinfected, single-use items where possible.', 
  },
  { 
    image: 'https://images.unsplash.com/photo-1726137569772-791c3b20b4cf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Transparent Pricing', 
    shortDesc: 'Clear costs, no hidden surprises.',
    desc: 'No hidden costs. Clear treatment plans with flexible EMI options for all budgets.', 
  },
  { 
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop',
    title: 'Expert Specialist', 
    shortDesc: 'Care from highly qualified professionals.',
    desc: 'Dr. Abhas Dash — Gold Medalist BDS with PG training at a premier cancer research institute.', 
  },
  { 
    image: 'https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?q=80&w=800&auto=format&fit=crop',
    title: 'Open Every Day', 
    shortDesc: 'Available whenever you need us.',
    desc: 'Available morning to evening, including Sundays and public holidays. Emergency care always available.', 
  },
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

        <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12">
          {reasons.map((r, i) => (
            <StaggerItem key={r.title} className="h-full">
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="relative overflow-hidden group rounded-[2rem] h-[380px] w-full shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out cursor-pointer"
              >
                {/* Background Image */}
                <img 
                  src={r.image} 
                  alt={r.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
                
                {/* Gradient Overlay for Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/30 to-transparent transition-opacity duration-500 ease-in-out group-hover:from-slate-900/95 group-hover:via-slate-900/60" />

                {/* Content Container */}
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex flex-col justify-end z-10 pointer-events-none">
                  <div className="relative pointer-events-auto">
                    
                    {/* Default visible content */}
                    <div className="transform transition-transform duration-500 ease-in-out md:group-hover:-translate-y-32">
                      <h3 className="font-display text-2xl font-bold text-white mb-1.5 drop-shadow-md">
                        {r.title}
                      </h3>
                      <p className="text-teal-300 font-medium text-sm drop-shadow-md">
                        {r.shortDesc}
                      </p>
                    </div>

                    {/* Hidden content (Slide up) */}
                    <div className="md:absolute md:w-full md:bottom-0 md:opacity-0 md:translate-y-8 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-500 ease-in-out mt-5 md:mt-0">
                      <div className="border-t border-white/20 pt-4">
                        <p className="text-white/90 text-sm leading-relaxed mb-4 line-clamp-3">
                          {r.desc}
                        </p>
                        
                        <button className="flex items-center text-sm font-bold text-teal-400 hover:text-teal-300 transition-colors w-max">
                          Learn More
                          <svg className="w-4 h-4 ml-1.5 transition-transform duration-300 md:group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  )
}
