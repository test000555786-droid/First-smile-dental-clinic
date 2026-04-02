import { useMagneticEffect } from '../../hooks/useMagneticEffect'
import { cn } from '../../lib/utils'

export function MagneticButton({ children, className, ...props }) {
  const ref = useMagneticEffect(0.25)
  return (
    <div ref={ref} className={cn('inline-block', className)} {...props}>
      {children}
    </div>
  )
}
