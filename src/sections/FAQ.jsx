import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'
import { faqs } from '../data/property'
import FadeIn from '../components/FadeIn'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="section-padding bg-cream-50">
      <div className="container-narrow">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <FadeIn className="lg:col-span-4">
            <span className="section-eyebrow">Good to know</span>
            <h2 className="section-title">Frequently asked questions</h2>
            <p className="section-lead">
              Still curious? Send a message via the contact form and I&apos;ll get
              back to you within a day.
            </p>
          </FadeIn>

          <div className="lg:col-span-8">
            <ul className="divide-y divide-clay-200/60 border-y border-clay-200/60">
              {faqs.map((faq, i) => {
                const isOpen = openIndex === i
                return (
                  <FadeIn key={faq.q} delay={i * 0.05} y={12}>
                    <li>
                      <button
                        type="button"
                        onClick={() => setOpenIndex(isOpen ? -1 : i)}
                        aria-expanded={isOpen}
                        className="group flex w-full items-center justify-between gap-6 py-5 text-left transition-colors hover:text-clay-700"
                      >
                        <span className="font-serif text-lg font-medium text-ink-900 sm:text-xl">
                          {faq.q}
                        </span>
                        <span
                          className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-clay-100 text-clay-700 transition-all duration-300 ${
                            isOpen ? 'rotate-45 bg-clay-600 text-cream-50' : ''
                          }`}
                        >
                          <Plus className="h-4 w-4" />
                        </span>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: 'easeOut' }}
                            className="overflow-hidden"
                          >
                            <p className="pb-6 pr-12 text-base leading-relaxed text-ink-700">
                              {faq.a}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </li>
                  </FadeIn>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
