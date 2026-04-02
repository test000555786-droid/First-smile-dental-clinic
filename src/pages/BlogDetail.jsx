import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, User, ArrowLeft } from 'lucide-react'

export function BlogDetail() {
  const { slug } = useParams()
  // In a real app, you would fetch blog data based on 'slug'.
  // Using generic dummy content here.

  return (
    <div className="pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/blogs" className="inline-flex items-center gap-2 text-primary-600 font-medium hover:gap-1 transition-all mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Blogs
        </Link>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="mb-4 flex items-center gap-2">
            <span className="bg-primary-50 text-primary-600 px-3 py-1 rounded-full text-sm font-semibold">Dental Care</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-display font-bold text-slate-800 mb-6 leading-tight">
            Understanding the Importance of Dental Checkups
          </h1>
          
          <div className="flex items-center gap-6 text-sm text-slate-500 mb-8 border-b border-slate-100 pb-6">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-primary-500" />
              <span className="font-medium text-slate-700">Dr. Abhas Dash</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-primary-500" />
              <span>Oct 15, 2023</span>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden mb-10 shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1606811841689-23df1cece326?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Dental checkup" 
              className="w-full h-auto object-cover"
            />
          </div>

          <article className="prose prose-slate prose-lg max-w-none text-slate-600">
            <p>
              Regular dental checkups are an essential part of maintaining not just your oral health, but your overall physical health. While many people only visit the dentist when they are experiencing pain, preventative care is crucial to stop problems before they start.
            </p>
            <h2 className="text-2xl font-display font-bold text-slate-800 mt-8 mb-4">Why Six Months?</h2>
            <p>
              The standard recommendation of visiting your dentist twice a year is based on the average rate at which plaque and tartar can accumulate on your teeth, despite regular brushing and flossing.
            </p>
            <h3 className="text-xl font-display font-bold text-slate-800 mt-6 mb-3">Key Benefits of Regular Visits</h3>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li><strong>Plaque, Tartar, and Cavity Detection:</strong> Even the most diligent brushers can miss certain areas.</li>
              <li><strong>Gum Disease Prevention:</strong> Early signs of periodontal disease are often painless and hard to spot on your own.</li>
              <li><strong>Oral Cancer Detection:</strong> During every regular checkup, your dentist performs an oral cancer screening.</li>
            </ul>
            <p>
              By investing time in bi-annual checkups, you save yourself the discomfort, time, and potential expense of major dental procedures down the line. Remember, a healthy smile is a beautiful smile!
            </p>
          </article>
        </motion.div>
      </div>
    </div>
  )
}
