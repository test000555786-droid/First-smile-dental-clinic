import { cn } from '../../lib/utils'

export function Button({ children, variant = 'primary', size = 'md', className, onClick, type = 'button', disabled, ...props }) {
  const base = 'inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-300 select-none cursor-pointer'
  
  const variants = {
    primary: 'btn-primary',
    whatsapp: 'btn-whatsapp',
    outline: 'btn-outline',
    ghost: 'text-primary-600 hover:bg-primary-50 rounded-xl px-4 py-2',
    teal: 'bg-gradient-to-r from-teal-500 to-teal-600 text-white shadow-[0_4px_20px_rgba(20,184,166,0.4)] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(20,184,166,0.55)]',
  }

  const sizes = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-7 py-3.5 text-base',
    lg: 'px-9 py-4 text-lg',
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(base, variants[variant], sizes[size], disabled && 'opacity-50 cursor-not-allowed', className)}
      {...props}
    >
      {children}
    </button>
  )
}
