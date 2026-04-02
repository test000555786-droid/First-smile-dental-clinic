import { useParams, Link } from 'react-router-dom'
import { services } from '../data/services'
import { NotFound } from './NotFound'
import { ServicesPage } from './ServicesPage'

export function ServiceDetail() {
  return <ServicesPage />
}
