import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { Send, Check } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { InputField, SelectField } from './InputField'
import { CLINIC } from '../../lib/utils'

const services = [
  'Root Canal Treatment', 'Dental Implants', 'Teeth Whitening',
  'Braces / Aligners', 'Kids Dentistry', 'Emergency Care',
  'Dental Cleaning', 'Tooth Extraction', 'Smile Designing', 'General Consultation',
]

export function AppointmentForm() {
  const [submitted, setSubmitted] = useState(false)
  const { register, handleSubmit, watch, formState: { errors } } = useForm()

  const onSubmit = (data) => {
    const msg = `Hi First Smile Dental! I'd like to book an appointment.
Name: ${data.name}
Phone: ${data.phone}
Service: ${data.service}
Preferred Date: ${data.date}
Message: ${data.message || 'N/A'}`

    const waUrl = `https://wa.me/${CLINIC.whatsapp}?text=${encodeURIComponent(msg)}`
    window.open(waUrl, '_blank')
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card rounded-3xl p-12 text-center"
      >
        <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-5">
          <Check className="w-8 h-8 text-emerald-600" />
        </div>
        <h3 className="font-display text-2xl font-bold text-slate-800 mb-2">Booking Request Sent!</h3>
        <p className="text-slate-500 mb-6">We've opened WhatsApp for you. We'll confirm your appointment within 30 minutes during working hours.</p>
        <button onClick={() => setSubmitted(false)} className="btn-outline text-sm px-6 py-2.5">Book Another</button>
      </motion.div>
    )
  }

  return (
    <div className="glass-card rounded-3xl p-5 sm:p-8 w-full max-w-full box-border overflow-hidden">
      <h3 className="font-display text-xl font-bold text-slate-800 mb-6">Book an Appointment</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <InputField
            label="Your Name *"
            placeholder="e.g. Priya Sharma"
            error={errors.name?.message}
            {...register('name', { required: 'Name is required' })}
          />
          <InputField
            label="Phone Number *"
            type="tel"
            placeholder="+91 9000000000"
            error={errors.phone?.message}
            {...register('phone', {
              required: 'Phone is required',
              pattern: { value: /^[0-9+\s-]{8,15}$/, message: 'Enter valid phone number' }
            })}
          />
        </div>

        <SelectField
          label="Select Service *"
          error={errors.service?.message}
          {...register('service', { required: 'Please select a service' })}
        >
          <option value="">Choose a treatment...</option>
          {services.map(s => <option key={s} value={s}>{s}</option>)}
        </SelectField>

        <InputField
          label="Preferred Date *"
          type="date"
          min={new Date().toISOString().split('T')[0]}
          error={errors.date?.message}
          {...register('date', { required: 'Please select a date' })}
        />

        <div className="flex flex-col gap-1.5 w-full">
          <label className="text-sm font-semibold text-slate-700">Message (Optional)</label>
          <textarea
            rows={3}
            placeholder="Describe your dental concern..."
            className="w-full box-border px-4 py-3 rounded-xl border border-slate-200 text-slate-800 bg-white/80 text-sm placeholder:text-slate-400 transition-all duration-200 outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 resize-none"
            {...register('message')}
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button type="submit" className="btn-whatsapp flex-1 py-4 text-base justify-center">
            <FaWhatsapp className="w-5 h-5" />
            Book via WhatsApp
          </button>
          <a
            href={`tel:${CLINIC.phoneRaw}`}
            className="btn-outline flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base"
          >
            📞 Call Us
          </a>
        </div>

        <p className="text-center text-slate-400 text-xs">
          🔒 Your details are safe. We'll confirm within 30 minutes.
        </p>
      </form>
    </div>
  )
}
