import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export { gsap, ScrollTrigger }

export const gsapDefaults = {
  ease: 'power3.out',
  duration: 0.8,
}

export function createScrollReveal(element, options = {}) {
  return gsap.fromTo(element,
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        end: 'bottom 15%',
        toggleActions: 'play none none none',
      },
      ...options,
    }
  )
}
