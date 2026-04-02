import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Plus, Minus, Download, FileText, Info } from 'lucide-react'
import { PageBanner } from '../components/ui/PageBanner'

const faqs = [
  {
    q: 'What should I expect during my first visit?',
    a: 'Your first visit includes a comprehensive oral examination, digital X-rays if necessary, and a discussion of your dental and medical history. We will then design a personalized treatment plan.'
  },
  {
    q: 'Do you offer financing or payment plans?',
    a: 'Yes, we provide flexible payment options including EMI facilities for large procedures to ensure affordable dental care.'
  },
  {
    q: 'How often should I get a dental cleaning?',
    a: 'We recommend professional cleaning and scaling every 6 months to maintain optimal gum health and prevent tartar buildup.'
  },
  {
    q: 'What if I have an oral emergency?',
    a: 'We offer emergency dental care. If you experience severe pain, trauma, or a knocked-out tooth, contact our clinic immediately.'
  }
]

const resources = [
  { title: 'Post-Extraction Care Guide', icon: FileText, size: '240 KB' },
  { title: 'Braces Maintenance Tips', icon: Info, size: '150 KB' },
  { title: 'Dental Implant FAQ Brochure', icon: Download, size: '512 KB' },
]

export function PatientCorner() {
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <div className="pb-20">
      <PageBanner 
        badge="🤝 For You"
        title="Patient"
        highlight="Corner"
        subtitle="Everything you need before and after your visit. Find answers to common questions and download helpful guides."
        bgImage="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* FAQs */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-display font-bold text-slate-800 mb-8">Frequently Asked <span className="text-primary-600">Questions</span></h2>
            <div className="flex flex-col gap-4">
              {faqs.map((faq, idx) => (
                <div 
                  key={idx} 
                  className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                    openFaq === idx ? 'border-primary-300 bg-white shadow-md' : 'border-slate-200 bg-slate-50/50 hover:border-primary-200'
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(idx === openFaq ? -1 : idx)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left font-semibold text-slate-800 focus:outline-none"
                  >
                    <span>{faq.q}</span>
                    <span className="flex-shrink-0 text-primary-500 ml-4">
                      {openFaq === idx ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                    </span>
                  </button>
                  <AnimatePresence>
                    {openFaq === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-4 text-slate-600 leading-relaxed">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-display font-bold text-slate-800 mb-8">Helpful <span className="text-primary-600">Resources</span></h2>
            <div className="bg-white border text-slate-800 border-slate-100 shadow-card rounded-3xl p-8">
              <p className="text-slate-600 mb-6">Download our patient guidelines and care instructions for various procedures directly to your device.</p>
              
              <div className="space-y-4">
                {resources.map((res, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-primary-200 transition-colors group">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center">
                        <res.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm sm:text-base text-slate-800">{res.title}</h4>
                        <p className="text-xs text-slate-500">PDF Document • {res.size}</p>
                      </div>
                    </div>
                    <button className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 group-hover:text-primary-600 group-hover:border-primary-300 transition-colors shadow-sm">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
