import { Hero } from '../components/sections/Hero'
import { TrustBar } from '../components/sections/TrustBar'
import { Services } from '../components/sections/Services'
import { WhyChooseUs } from '../components/sections/WhyChooseUs'
import { BeforeAfter } from '../components/sections/BeforeAfter'
import { Doctor } from '../components/sections/Doctor'
import { Testimonials } from '../components/sections/Testimonials'
import { Pricing } from '../components/sections/Pricing'
import { ClinicTour } from '../components/sections/ClinicTour'
import { Appointment } from '../components/sections/Appointment'
import { FAQ } from '../components/sections/FAQ'
import { PageSEO } from '../components/seo/PageSEO'

export function Home() {
  return (
    <>
      <PageSEO />
      <Hero />
      <TrustBar />
      <Services />
      <WhyChooseUs />
      <BeforeAfter />
      <Doctor />
      <Testimonials />
      <Pricing />
      <ClinicTour />
      <Appointment />
      <FAQ />
    </>
  )
}

