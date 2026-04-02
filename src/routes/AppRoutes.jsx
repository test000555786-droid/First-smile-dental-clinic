import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { ServicesPage } from '../pages/ServicesPage'
import { About } from '../pages/About'
import { Contact } from '../pages/Contact'
import { NotFound } from '../pages/NotFound'
import { Blogs } from '../pages/Blogs'
import { BlogDetail } from '../pages/BlogDetail'
import { PatientCorner } from '../pages/PatientCorner'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/services/:slug" element={<ServicesPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/blogs/:slug" element={<BlogDetail />} />
      <Route path="/patient-corner" element={<PatientCorner />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
