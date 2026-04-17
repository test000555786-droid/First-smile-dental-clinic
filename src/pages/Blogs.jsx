import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Calendar, User, ArrowRight } from 'lucide-react'
import { PageBanner } from '../components/ui/PageBanner'
import { PageSEO } from '../components/seo/PageSEO'
import { blogs } from '../data/blogs'

export function Blogs() {
  return (
    <div className="pb-20">
      <PageSEO />
      <PageBanner 
        badge="✍️ Dental Insights"
        title="Dental Health"
        highlight="Blog"
        subtitle="Read our latest articles, tips, and insights on maintaining a perfect smile and overall oral health."
        bgImage="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
      />

      {/* Blogs Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, idx) => (
            <motion.article 
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 border border-slate-100 flex flex-col group cursor-pointer"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={blog.image} 
                  alt={`${blog.title} – Dental health article by Dr. Abhas Dash, Cuttack`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-primary-600">
                  {blog.category}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {blog.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-3.5 h-3.5" />
                    {blog.author}
                  </div>
                </div>
                <h3 className="text-xl font-display font-bold text-slate-800 mb-3 group-hover:text-primary-600 transition-colors">
                  <Link to={`/blogs/${blog.slug}`}>
                    {blog.title}
                  </Link>
                </h3>
                <p className="text-slate-600 text-sm mb-6 flex-grow">
                  {blog.excerpt}
                </p>
                <Link to={`/blogs/${blog.slug}`} className="inline-flex items-center gap-2 text-primary-600 font-semibold text-sm hover:gap-3 transition-all mt-auto w-fit">
                  Read More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  )
}
