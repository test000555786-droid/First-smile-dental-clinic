/**
 * SEO utility — centralised meta data for every route.
 * Used by the PageSEO component via react-helmet-async.
 */

export const SITE_URL = 'https://firstsmiledentalsclinic.com'
export const SITE_NAME = 'First Smile Dental Clinic & Implant Center'

export const DEFAULT_SEO = {
  title: `Best Dental Clinic in Cuttack & Bhubaneswar | ${SITE_NAME}`,
  description:
    'First Smile Dental Clinic in Cuttack – Expert dental care by Dr. Abhas Dash (BDS, Gold Medalist). Root canal, implants, braces, teeth whitening & more. Book today!',
  keywords:
    'best dentist in Cuttack, dental clinic Cuttack, dentist Bhubaneswar, dental implants Cuttack, root canal Cuttack, teeth whitening Cuttack, braces Cuttack, best dental clinic Odisha, First Smile Dental',
  image: `${SITE_URL}/og-image.webp`,
}

/**
 * Per-page SEO config.
 * Keys match the React Router paths.
 */
export const PAGE_SEO = {
  '/': {
    title: `Best Dental Clinic in Cuttack | ${SITE_NAME}`,
    description:
      'First Smile Dental Clinic – Cuttack\'s most trusted dental clinic. Dr. Abhas Dash (Gold Medalist) offers pain-free root canal, dental implants, braces & cosmetic dentistry. Book a free consultation!',
    keywords:
      'best dentist in Cuttack, dental clinic Mangalabag, First Smile Dental, dentist near me Cuttack, pain-free root canal Cuttack, dental implants Odisha, teeth whitening Cuttack',
    canonical: SITE_URL,
  },
  '/services': {
    title: `Dental Services in Cuttack – Root Canal, Implants & More | ${SITE_NAME}`,
    description:
      'Comprehensive dental services in Cuttack: root canal treatment, dental implants, teeth whitening, braces & aligners, kids dentistry, and 24/7 emergency dental care. Affordable prices + EMI available.',
    keywords:
      'root canal treatment Cuttack, dental implants Cuttack cost, teeth whitening Cuttack, braces Cuttack, kids dentistry Cuttack, emergency dentist Cuttack, dental services Odisha',
    canonical: `${SITE_URL}/services`,
  },
  '/about': {
    title: `About Dr. Abhas Dash – Best Dentist in Cuttack | ${SITE_NAME}`,
    description:
      'Learn about First Smile Dental Clinic – founded by Dr. Abhas Dash, BDS Gold Medalist from SCB Medical College, Cuttack. 10+ years of expert dental care trusted by 1000+ patients in Odisha.',
    keywords:
      'Dr Abhas Dash dentist Cuttack, best dentist Cuttack, SCB Medical College dentist, dental clinic Kathagola Cuttack, about First Smile Dental',
    canonical: `${SITE_URL}/about`,
  },
  '/contact': {
    title: `Contact Us – Book Dental Appointment in Cuttack | ${SITE_NAME}`,
    description:
      'Book a dental appointment at First Smile Dental Clinic, Mangalabag, Cuttack, Odisha. Call +91 9078779904 or WhatsApp to confirm within 30 minutes. Open daily till 9 PM.',
    keywords:
      'book dentist appointment Cuttack, dental clinic contact Cuttack, dentist Mangalabag Cuttack, dental appointment Odisha, First Smile Dental contact',
    canonical: `${SITE_URL}/contact`,
  },
  '/blogs': {
    title: `Dental Health Blog – Tips & Insights | ${SITE_NAME}`,
    description:
      'Read expert dental health articles by Dr. Abhas Dash. Topics include root canal care, dental implant costs in Cuttack, teeth whitening tips, braces guide, and more.',
    keywords:
      'dental health blog Cuttack, dentist blog Odisha, dental implant cost Cuttack, root canal guide, teeth whitening tips, braces guide India',
    canonical: `${SITE_URL}/blogs`,
  },
  '/patient-corner': {
    title: `Patient Corner – FAQs & Resources | ${SITE_NAME}`,
    description:
      'Patient resources at First Smile Dental Clinic: FAQs, post-treatment care guides, braces maintenance tips, dental implant brochures, and payment/EMI information for Cuttack patients.',
    keywords:
      'dental patient resources Cuttack, dental FAQ Cuttack, post root canal care, braces maintenance, dental EMI Cuttack, patient guide First Smile Dental',
    canonical: `${SITE_URL}/patient-corner`,
  },
}
