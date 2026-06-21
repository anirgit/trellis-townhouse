import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Home } from 'lucide-react'
import { property } from '../data/property'

const NAV_LINKS = [
  { href: '#gallery', label: 'Gallery' },
  { href: '#rooms', label: 'Rooms' },
  { href: '#amenities', label: 'Amenities' },
  { href: '#about', label: 'About' },
  { href: '#location', label: 'Location' },
  { href: '#faq', label: 'FAQ' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-cream-50/85 backdrop-blur-md shadow-soft'
            : 'bg-transparent'
        }`}
      >
        <nav className="container-narrow flex h-16 items-center justify-between sm:h-20">
          <a
            href="#top"
            className="flex items-center gap-2 font-serif text-lg font-semibold text-ink-900 transition-opacity hover:opacity-80 sm:text-xl"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-clay-600 text-cream-50">
              <Home className="h-4 w-4" strokeWidth={2.5} />
            </span>
            <span>{property.name}</span>
          </a>

          <ul className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-ink-800 transition-colors hover:text-clay-600"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <a href="#contact" className="btn-primary py-2.5 text-sm">
              Inquire
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            className="rounded-full p-2 text-ink-900 transition-colors hover:bg-clay-100 lg:hidden"
          >
            <Menu className="h-6 w-6" />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] lg:hidden"
            role="dialog"
            aria-modal="true"
          >
            <div
              className="absolute inset-0 bg-ink-900/60 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3, ease: 'easeOut' }}
              className="absolute right-0 top-0 flex h-full w-full max-w-sm flex-col bg-cream-50 shadow-soft-lg"
            >
              <div className="flex h-16 items-center justify-between px-6 sm:h-20">
                <span className="font-serif text-lg font-semibold text-ink-900">
                  Menu
                </span>
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                  className="rounded-full p-2 text-ink-900 transition-colors hover:bg-clay-100"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <ul className="flex flex-col gap-1 px-4">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-2xl px-4 py-3 font-serif text-2xl text-ink-900 transition-colors hover:bg-clay-100"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-auto p-6">
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="btn-primary w-full"
                >
                  Inquire
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
