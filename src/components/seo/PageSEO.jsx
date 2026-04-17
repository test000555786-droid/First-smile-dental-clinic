import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'
import { PAGE_SEO, DEFAULT_SEO, SITE_URL, SITE_NAME } from '../../lib/seo'

/**
 * PageSEO — drop this into any page to get full SEO coverage:
 *   title, meta description, keywords, canonical, OG, Twitter card.
 *
 * Override any field by passing props directly:
 *   <PageSEO title="Custom Title" description="Custom desc" />
 */
export function PageSEO({ title, description, keywords, canonical, image }) {
  const { pathname } = useLocation()
  const route = PAGE_SEO[pathname] || {}

  const resolvedTitle       = title       || route.title       || DEFAULT_SEO.title
  const resolvedDesc        = description || route.description  || DEFAULT_SEO.description
  const resolvedKeywords    = keywords    || route.keywords     || DEFAULT_SEO.keywords
  const resolvedCanonical   = canonical   || route.canonical    || `${SITE_URL}${pathname}`
  const resolvedImage       = image       || DEFAULT_SEO.image

  return (
    <Helmet>
      {/* ── Core ─────────────────────────────────────── */}
      <title>{resolvedTitle}</title>
      <meta name="description"  content={resolvedDesc} />
      <meta name="keywords"     content={resolvedKeywords} />
      <meta name="author"       content={SITE_NAME} />
      <link rel="canonical"     href={resolvedCanonical} />

      {/* ── Open Graph ───────────────────────────────── */}
      <meta property="og:site_name"   content={SITE_NAME} />
      <meta property="og:type"        content="website" />
      <meta property="og:url"         content={resolvedCanonical} />
      <meta property="og:title"       content={resolvedTitle} />
      <meta property="og:description" content={resolvedDesc} />
      <meta property="og:image"       content={resolvedImage} />
      <meta property="og:locale"      content="en_IN" />

      {/* ── Twitter Card ─────────────────────────────── */}
      <meta name="twitter:card"        content="summary_large_image" />
      <meta name="twitter:title"       content={resolvedTitle} />
      <meta name="twitter:description" content={resolvedDesc} />
      <meta name="twitter:image"       content={resolvedImage} />

      {/* ── Geo  ─────────────────────────────────────── */}
      <meta name="geo.region"      content="IN-OR" />
      <meta name="geo.placename"   content="Cuttack, Odisha, India" />
      <meta name="geo.position"    content="20.4625;85.8830" />
      <meta name="ICBM"            content="20.4625, 85.8830" />
    </Helmet>
  )
}
