import { useEffect, useRef } from 'react'

export function Cursor() {
  const cursorRef = useRef(null)
  const dotRef = useRef(null)

  useEffect(() => {
    // Only on desktop
    if (window.matchMedia('(hover: none)').matches) return

    const cursor = cursorRef.current
    const dot = dotRef.current
    if (!cursor || !dot) return

    let mouseX = 0, mouseY = 0, curX = 0, curY = 0
    let raf

    const move = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      dot.style.cssText = `left:${mouseX}px;top:${mouseY}px;opacity:1`
    }

    const animate = () => {
      curX += (mouseX - curX) * 0.1
      curY += (mouseY - curY) * 0.1
      cursor.style.cssText = `left:${curX}px;top:${curY}px;opacity:1`
      raf = requestAnimationFrame(animate)
    }

    document.addEventListener('mousemove', move)
    raf = requestAnimationFrame(animate)

    const grow = () => cursor.classList.add('scale-[2.5]', 'bg-primary-100/50', 'border-primary-400')
    const shrink = () => cursor.classList.remove('scale-[2.5]', 'bg-primary-100/50', 'border-primary-400')

    document.querySelectorAll('a, button, [role="button"]').forEach(el => {
      el.addEventListener('mouseenter', grow)
      el.addEventListener('mouseleave', shrink)
    })

    return () => {
      document.removeEventListener('mousemove', move)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed pointer-events-none z-[9998] w-9 h-9 rounded-full border-2 border-primary-400/60 -translate-x-1/2 -translate-y-1/2 transition-transform duration-150 opacity-0 hidden lg:block mix-blend-multiply"
        style={{ top: 0, left: 0 }}
      />
      <div
        ref={dotRef}
        className="fixed pointer-events-none z-[9999] w-1.5 h-1.5 rounded-full bg-primary-500 -translate-x-1/2 -translate-y-1/2 opacity-0 hidden lg:block"
        style={{ top: 0, left: 0 }}
      />
    </>
  )
}
