import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { SectionHeading } from '../ui/SectionHeading'
import { Container } from '../layout/Container'
import { testimonials } from '../../data/testimonials'
import { TestimonialSlider } from '../sliders/TestimonialSlider'

export function Testimonials() {
  return (
    <section className="section-padding bg-gradient-to-br from-slate-50 to-blue-50/40">
      <Container>
        <SectionHeading
          badge="💬 Patient Stories"
          title="What Our Patients"
          highlight="Say About Us"
          subtitle="Real reviews from real patients. See why we're rated 5.0★ on Google by 52+ patients."
        />
        <TestimonialSlider testimonials={testimonials} />
      </Container>
    </section>
  )
}
