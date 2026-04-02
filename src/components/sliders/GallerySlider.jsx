import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const galleryItems = [
  { emoji: '🦷', label: 'Root Canal', tag: 'Treatment' },
  { emoji: '✨', label: 'Whitening', tag: 'Cosmetic' },
  { emoji: '😁', label: 'Braces', tag: 'Orthodontics' },
  { emoji: '🏆', label: 'Implant', tag: 'Surgery' },
  { emoji: '🧒', label: 'Kids Care', tag: 'Pediatric' },
  { emoji: '💎', label: 'Smile Design', tag: 'Aesthetic' },
]

export function GallerySlider() {
  const scrollRef = useRef(null)
  const scroll = (dir) => {
    scrollRef.current?.scrollBy({ left: dir * 260, behavior: 'smooth' })
  }

  return (
    <div className="relative">
      <div className="flex gap-4 justify-end mb-4">
        {[{ dir: -1, icon: <ChevronLeft className="w-5 h-5" /> }, { dir: 1, icon: <ChevronRight className="w-5 h-5" /> }].map(b => (
          <button key={b.dir} onClick={() => scroll(b.dir)} className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-primary-50 hover:text-primary-600 transition-colors shadow-sm">
            {b.icon}
          </button>
        ))}
      </div>
      <div ref={scrollRef} className="flex gap-5 overflow-x-auto pb-2" style={{ scrollbarWidth: 'none' }}>
        {galleryItems.map((item, i) => (
          <div key={i} className="flex-shrink-0 w-56 rounded-2xl overflow-hidden border border-slate-100 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
            <div className="aspect-square bg-gradient-to-br from-primary-50 to-teal-50 flex items-center justify-center">
              <span className="text-6xl group-hover:scale-110 transition-transform duration-300">{item.emoji}</span>
            </div>
            <div className="p-4 bg-white">
              <p className="font-semibold text-slate-800 text-sm">{item.label}</p>
              <span className="section-badge text-xs mt-1">{item.tag}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
