import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, User, ArrowLeft } from 'lucide-react'
import { blogs } from '../data/blogs'
import { PageSEO } from '../components/seo/PageSEO'
import { NotFound } from './NotFound'

export function BlogDetail() {
  const { slug } = useParams()

  // Look up the post by slug from shared data — same source as listing page
  const post = blogs.find((b) => b.slug === slug)

  // Graceful 404 if slug doesn't match any post
  if (!post) return <NotFound />

  return (
    <div className="pt-28 pb-20">
      {/* Per-post SEO */}
      <PageSEO
        title={`${post.title} | First Smile Dental Clinic Blog`}
        description={post.excerpt}
        canonical={`https://firstsmiledentalsclinic.com/blogs/${post.slug}`}
        image={post.image}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/blogs" className="inline-flex items-center gap-2 text-primary-600 font-medium hover:gap-1 transition-all mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Blogs
        </Link>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {/* Category badge */}
          <div className="mb-4 flex items-center gap-2">
            <span className="bg-primary-50 text-primary-600 px-3 py-1 rounded-full text-sm font-semibold">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-display font-bold text-slate-800 mb-6 leading-tight">
            {post.title}
          </h1>
          
          {/* Author + Date */}
          <div className="flex items-center gap-6 text-sm text-slate-500 mb-8 border-b border-slate-100 pb-6">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-primary-500" />
              <span className="font-medium text-slate-700">{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-primary-500" />
              <span>{post.date}</span>
            </div>
          </div>

          {/* Cover image — same URL as the listing card */}
          <div className="rounded-3xl overflow-hidden mb-10 shadow-lg">
            <img 
              src={post.image}
              alt={`${post.title} – First Smile Dental Clinic, Cuttack`}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Article body — rendered from structured content array */}
          <article className="prose prose-slate prose-lg max-w-none text-slate-600">
            {post.content.map((block, idx) => {
              if (block.type === 'h2') {
                return (
                  <h2 key={idx} className="text-2xl font-display font-bold text-slate-800 mt-8 mb-4">
                    {block.text}
                  </h2>
                )
              }
              if (block.type === 'h3') {
                return (
                  <h3 key={idx} className="text-xl font-display font-bold text-slate-800 mt-6 mb-3">
                    {block.text}
                  </h3>
                )
              }
              if (block.type === 'ul') {
                return (
                  <ul key={idx} className="list-disc pl-6 space-y-2 mb-6">
                    {block.items.map((item, j) => (
                      <li key={j} dangerouslySetInnerHTML={{ __html: item }} />
                    ))}
                  </ul>
                )
              }
              // default: paragraph
              return (
                <p key={idx}>{block.text}</p>
              )
            })}
          </article>
        </motion.div>
      </div>
    </div>
  )
}
