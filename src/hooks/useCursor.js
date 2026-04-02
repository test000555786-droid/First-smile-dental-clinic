import { useEffect, useRef } from 'react'

export function useCursor() {
  const cursorRef = useRef(null)
  const cursorDotRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const dot = cursorDotRef.current
    if (!cursor || !dot) return

    let mouseX = 0, mouseY = 0
    let curX = 0, curY = 0

    const moveCursor = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      dot.style.left = `${mouseX}px`
      dot.style.top = `${mouseY}px`
    }

    const animateCursor = () => {
      curX += (mouseX - curX) * 0.12
      curY += (mouseY - curY) * 0.12
      cursor.style.left = `${curX}px`
      cursor.style.top = `${curY}px`
      requestAnimationFrame(animateCursor)
    }

    document.addEventListener('mousemove', moveCursor)
    animateCursor()

    const handleHover = () => cursor.classList.add('cursor-hover')
    const handleLeave = () => cursor.classList.remove('cursor-hover')

    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', handleHover)
      el.addEventListener('mouseleave', handleLeave)
    })

    return () => {
      document.removeEventListener('mousemove', moveCursor)
    }
  }, [])

  return { cursorRef, cursorDotRef }
}
