import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, MapPin, ChevronDown } from 'lucide-react'
import { property, heroImages } from '../data/property'

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((i) => (i + 1) % heroImages.length)
    }, 6000)
    return () => clearInterval(id)
  }, [])

  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] items-end overflow-hidden text-cream-50"
    >
      <div className="absolute inset-0 -z-10">
        <AnimatePresence mode="sync">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.6, ease: 'easeOut' }}
            className="absolute inset-0"
          >
            <img
              src={heroImages[activeIndex]}
              alt=""
              className="h-full w-full object-cover animate-slow-zoom"
              loading="eager"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-ink-900/40 via-ink-900/30 to-ink-900/80" />
      </div>

      <div className="container-narrow w-full pb-20 pt-32 sm:pb-28 sm:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-cream-50/30 bg-cream-50/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-sage-300 animate-pulse" />
            Now Accepting Inquiries
          </span>

          <h1 className="mt-6 font-serif text-5xl font-medium leading-[1.05] text-cream-50 sm:text-6xl lg:text-7xl xl:text-8xl">
            {property.name}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream-100/90 sm:text-xl">
            {property.tagline}
          </p>

          <div className="mt-4 flex items-center gap-2 text-sm text-cream-100/80">
            <MapPin className="h-4 w-4" />
            <span>
              {property.address.city}, {property.address.state}
            </span>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#rooms" className="btn-primary group">
              View Available Rooms
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-cream-50/40 bg-cream-50/5 px-6 py-3 text-sm font-medium text-cream-50 backdrop-blur-sm transition-all hover:border-cream-50 hover:bg-cream-50/15"
            >
              Schedule a Tour
            </a>
          </div>
        </motion.div>

        <div className="mt-12 flex items-center justify-between gap-4">
          <div className="flex gap-2">
            {heroImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                aria-label={`View image ${i + 1}`}
                className={`h-1 rounded-full transition-all ${
                  activeIndex === i
                    ? 'w-12 bg-cream-50'
                    : 'w-6 bg-cream-50/40 hover:bg-cream-50/60'
                }`}
              />
            ))}
          </div>

          <a
            href="#gallery"
            className="group hidden items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-cream-100/80 transition-colors hover:text-cream-50 sm:flex"
          >
            Scroll to explore
            <ChevronDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  )
}
