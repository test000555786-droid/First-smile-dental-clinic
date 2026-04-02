import { cn } from '../../lib/utils'

export function InputField({ label, error, className, ...props }) {
  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      {label && (
        <label className="text-sm font-semibold text-slate-700">{label}</label>
      )}
      <input
        className={cn(
          'px-4 py-3 rounded-xl border text-slate-800 bg-white/80 backdrop-blur-sm text-sm placeholder:text-slate-400 transition-all duration-200 outline-none',
          error
            ? 'border-red-300 focus:border-red-400 focus:ring-2 focus:ring-red-100'
            : 'border-slate-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100'
        )}
        {...props}
      />
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  )
}

export function SelectField({ label, error, children, className, ...props }) {
  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      {label && (
        <label className="text-sm font-semibold text-slate-700">{label}</label>
      )}
      <select
        className={cn(
          'px-4 py-3 rounded-xl border text-slate-800 bg-white/80 text-sm transition-all duration-200 outline-none',
          error
            ? 'border-red-300 focus:border-red-400 focus:ring-2 focus:ring-red-100'
            : 'border-slate-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100'
        )}
        {...props}
      >
        {children}
      </select>
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  )
}
