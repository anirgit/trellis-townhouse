import { Home, Mail, ArrowUp } from 'lucide-react'
import { property, contact } from '../data/property'

const FOOTER_LINKS = [
  { href: '#gallery', label: 'Gallery' },
  { href: '#rooms', label: 'Rooms' },
  { href: '#amenities', label: 'Amenities' },
  { href: '#about', label: 'About' },
  { href: '#location', label: 'Location' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-clay-200/60 bg-cream-100">
      <div className="container-narrow py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <a
              href="#top"
              className="inline-flex items-center gap-2 font-serif text-xl font-semibold text-ink-900"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-clay-600 text-cream-50">
                <Home className="h-4 w-4" strokeWidth={2.5} />
              </span>
              {property.name}
            </a>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-700">
              {property.shortDescription}
            </p>
          </div>

          <div className="lg:col-span-4">
            <p className="text-xs font-medium uppercase tracking-wider text-clay-600">
              Explore
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-ink-800 transition-colors hover:text-clay-700"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="text-xs font-medium uppercase tracking-wider text-clay-600">
              Get in touch
            </p>
            <a
              href={`mailto:${contact.email}`}
              className="mt-4 inline-flex items-center gap-2 text-sm text-ink-800 transition-colors hover:text-clay-700"
            >
              <Mail className="h-4 w-4" />
              {contact.email}
            </a>
            <p className="mt-2 text-sm text-ink-700">
              {property.address.city}, {property.address.state}
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-clay-200/60 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-ink-700/70">
            &copy; {year} {property.name}. All rights reserved.
          </p>
          <a
            href="#top"
            className="inline-flex items-center gap-2 rounded-full bg-cream-50 px-4 py-2 text-xs font-medium text-ink-800 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-soft-lg"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
