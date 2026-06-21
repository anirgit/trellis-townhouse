import { useCallback, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { galleryImages } from '../data/property'
import FadeIn from '../components/FadeIn'

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null)

  const open = useCallback((i) => setActiveIndex(i), [])
  const close = useCallback(() => setActiveIndex(null), [])
  const next = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i + 1) % galleryImages.length)),
    []
  )
  const prev = useCallback(
    () =>
      setActiveIndex((i) =>
        i === null ? null : (i - 1 + galleryImages.length) % galleryImages.length
      ),
    []
  )

  useEffect(() => {
    if (activeIndex === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [activeIndex, close, next, prev])

  return (
    <section id="gallery" className="section-padding bg-cream-50">
      <div className="container-narrow">
        <FadeIn>
          <span className="section-eyebrow">Step Inside</span>
          <h2 className="section-title">A peek at the space</h2>
          <p className="section-lead">
            Bright, comfortable, and thoughtfully furnished — here&apos;s a look at
            the common areas, rooms, and outdoor spaces.
          </p>
        </FadeIn>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((img, i) => (
            <FadeIn key={img.src} delay={i * 0.06}>
              <button
                type="button"
                onClick={() => open(i)}
                className={`group relative block w-full overflow-hidden rounded-3xl bg-clay-100 shadow-soft transition-shadow hover:shadow-soft-lg ${
                  i === 0 ? 'sm:col-span-2 sm:row-span-2 aspect-[4/3] sm:aspect-square' : 'aspect-[4/3]'
                }`}
                aria-label={`View ${img.caption} photo`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="absolute bottom-4 left-4 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="rounded-full bg-cream-50/95 px-3 py-1 text-xs font-medium uppercase tracking-wider text-ink-900">
                    {img.caption}
                  </span>
                </div>
              </button>
            </FadeIn>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-ink-900/95 p-4 sm:p-8"
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label="Image gallery viewer"
          >
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                close()
              }}
              aria-label="Close gallery"
              className="absolute right-4 top-4 z-10 rounded-full bg-cream-50/10 p-3 text-cream-50 backdrop-blur-sm transition-colors hover:bg-cream-50/20 sm:right-6 sm:top-6"
            >
              <X className="h-6 w-6" />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                prev()
              }}
              aria-label="Previous image"
              className="absolute left-2 z-10 rounded-full bg-cream-50/10 p-3 text-cream-50 backdrop-blur-sm transition-colors hover:bg-cream-50/20 sm:left-6"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                next()
              }}
              aria-label="Next image"
              className="absolute right-2 z-10 rounded-full bg-cream-50/10 p-3 text-cream-50 backdrop-blur-sm transition-colors hover:bg-cream-50/20 sm:right-6"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="relative max-h-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryImages[activeIndex].src}
                alt={galleryImages[activeIndex].alt}
                className="max-h-[80vh] w-auto rounded-2xl object-contain"
              />
              <div className="mt-4 text-center text-sm text-cream-100/80">
                {galleryImages[activeIndex].caption}
                <span className="mx-2 opacity-50">·</span>
                {activeIndex + 1} / {galleryImages.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
