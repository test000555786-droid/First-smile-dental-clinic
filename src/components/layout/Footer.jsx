import { Link } from 'react-router-dom'
import { MapPin, Phone, Clock, Star, Instagram, Facebook, Youtube } from 'lucide-react'
import { CLINIC } from '../../lib/utils'

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      {/* Map + CTA Strip */}
      <div className="relative h-56 overflow-hidden">
        <iframe
          src="https://maps.google.com/maps?q=Mangalabag+Cuttack+Odisha&t=&z=14&ie=UTF8&iwloc=&output=embed"
          className="w-full h-full opacity-70"
          loading="lazy"
          title="Clinic Location"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center gap-4 pb-6">
          <a
            href={`tel:${CLINIC.phoneRaw}`}
            className="btn-primary text-sm px-6 py-3 shadow-button"
          >
            <Phone className="w-4 h-4" /> Call Now
          </a>
          <a
            href={`https://wa.me/${CLINIC.whatsapp}?text=Hi%2C%20I%20need%20a%20dental%20appointment`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-sm px-6 py-3"
          >
            📱 WhatsApp
          </a>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-teal-500 flex items-center justify-center">
              <span className="text-xl">🦷</span>
            </div>
            <div>
              <p className="font-display font-bold text-white text-sm">First Smile Dental</p>
              <p className="text-[10px] text-primary-400 tracking-wide uppercase">Implant Center</p>
            </div>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed mb-5">
            Premium dental care by Dr. Abhas Dash, Gold Medalist. Serving Cuttack with pain-free, modern dentistry.
          </p>
          <div className="flex items-center gap-1 mb-5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
            <span className="text-sm text-slate-300 ml-2">5.0 ({CLINIC.reviews} reviews)</span>
          </div>
          <div className="flex gap-3">
            {[
              { icon: <Instagram className="w-4 h-4" />, href: '#' },
              { icon: <Facebook className="w-4 h-4" />, href: '#' },
              { icon: <Youtube className="w-4 h-4" />, href: '#' },
            ].map((s, i) => (
              <a key={i} href={s.href} className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-primary-600 flex items-center justify-center transition-colors duration-300 text-slate-400 hover:text-white">
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display font-semibold text-white mb-5">Quick Links</h4>
          <ul className="space-y-3">
            {[
              { label: 'Home', path: '/' },
              { label: 'Our Services', path: '/services' },
              { label: 'About Dr. Dash', path: '/about' },
              { label: 'Book Appointment', path: '/contact' },
              { label: 'Contact Us', path: '/contact' },
            ].map(link => (
              <li key={link.path + link.label}>
                <Link to={link.path} className="text-slate-400 hover:text-primary-400 text-sm transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-primary-500 flex-shrink-0" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-display font-semibold text-white mb-5">Our Services</h4>
          <ul className="space-y-3">
            {['Root Canal Treatment', 'Dental Implants', 'Teeth Whitening', 'Braces & Aligners', 'Kids Dentistry', 'Emergency Care'].map(s => (
              <li key={s}>
                <Link to="/services" className="text-slate-400 hover:text-primary-400 text-sm transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-teal-500 flex-shrink-0" />
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display font-semibold text-white mb-5">Contact Info</h4>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <MapPin className="w-4 h-4 text-primary-400 flex-shrink-0 mt-0.5" />
              <span className="text-slate-400 text-sm leading-relaxed">{CLINIC.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="w-4 h-4 text-primary-400 flex-shrink-0" />
              <a href={`tel:${CLINIC.phoneRaw}`} className="text-slate-400 hover:text-primary-400 text-sm transition-colors">
                {CLINIC.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock className="w-4 h-4 text-primary-400 flex-shrink-0" />
              <span className="text-slate-400 text-sm">{CLINIC.timing}</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 px-6 py-5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} First Smile Dental Clinic & Implant Center. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs">
            Best Dentist in Cuttack | Mangalabag, Odisha
          </p>
        </div>
      </div>
    </footer>
  )
}
