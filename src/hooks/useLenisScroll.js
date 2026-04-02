import { useEffect } from 'react'
import { initLenis, destroyLenis } from '../lib/lenis'

export function useLenisScroll() {
  useEffect(() => {
    const lenis = initLenis()
    return () => destroyLenis()
  }, [])
}
