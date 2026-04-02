import { cn } from '../../lib/utils'

export function Card({ children, className, hover = true, glass = false, ...props }) {
  return (
    <div
      className={cn(
        'rounded-3xl transition-all duration-400',
        glass ? 'glass-card' : 'bg-white',
        hover && 'hover:-translate-y-1 hover:shadow-card-hover',
        'shadow-card border border-slate-100/80',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
