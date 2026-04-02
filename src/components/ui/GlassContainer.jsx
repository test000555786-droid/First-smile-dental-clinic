import { cn } from '../../lib/utils'

export function GlassContainer({ children, className, intensity = 'medium', ...props }) {
  const intensities = {
    light: 'bg-white/60 backdrop-blur-sm border border-white/70',
    medium: 'bg-white/80 backdrop-blur-[20px] border border-white/80 shadow-glass',
    strong: 'bg-white/90 backdrop-blur-[24px] border border-white/90 shadow-glass-lg',
    blue: 'bg-blue-50/70 backdrop-blur-[20px] border border-blue-100/60 shadow-glass',
  }

  return (
    <div className={cn('rounded-3xl', intensities[intensity], className)} {...props}>
      {children}
    </div>
  )
}
