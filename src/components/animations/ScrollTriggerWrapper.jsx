import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '../../lib/gsap'

export function ScrollTriggerWrapper({ children, animation = 'fadeUp', stagger = false, className }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const targets = stagger ? el.children : [el]
    
    const anim = gsap.fromTo(targets,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: stagger ? 0.1 : 0,
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          toggleActions: 'play none none none',
        },
      }
    )

    return () => {
      anim.kill()
    }
  }, [stagger])

  return <div ref={ref} className={className}>{children}</div>
}
