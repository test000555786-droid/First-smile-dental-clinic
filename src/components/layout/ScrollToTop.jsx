import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getLenis } from '../../lib/lenis'

export function ScrollToTop() {
  const { pathname } = useLocation()
  
  useEffect(() => {
    // Reset standard browser scroll immediately (prevents flickering)
    window.scrollTo(0, 0)
    
    // Reset Lenis smooth scroll instance if it's active
    const lenis = getLenis()
    if (lenis) {
      lenis.scrollTo(0, { immediate: true })
    }
  }, [pathname])
  
  return null
}
