import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function formatPhone(phone) {
  return phone.replace(/\s+/g, '')
}

export const CLINIC = {
  name: 'First Smile Dental Clinic & Implant Center',
  shortName: 'First Smile Dental',
  phone: '+91 63715 51483',
  phoneRaw: '+916371551483',
  whatsapp: '916371551483',
  address: 'Near Shreema Hospital, Mangalabag, Kathagola, Cuttack, Odisha – 753001',
  city: 'Cuttack, Odisha',
  rating: '5.0',
  reviews: 52,
  timing: 'Open Daily, Closes at 9:01 PM',
  mapEmbed: 'https://maps.google.com/maps?q=First+Smile+Dental+Clinic+Cuttack&t=&z=15&ie=UTF8&iwloc=&output=embed',
  doctor: {
    name: 'Dr. Abhas Dash',
    degree: 'BDS, Gold Medalist',
    college: 'SCB Medical College, Cuttack',
    experience: '10+ Years',
    bio: 'Dr. Abhas Dash is a Gold Medalist from SCB Medical College, Cuttack, with extensive experience in advanced dentistry. As a Junior Resident at Acharya Harihar Post Graduate Institute of Cancer, he brings academic excellence and compassionate care to every patient.',
  }
}
