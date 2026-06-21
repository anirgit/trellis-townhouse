import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import { contact, rooms } from '../data/property'
import FadeIn from '../components/FadeIn'

// Simple, strict client-side validation. The form is also length-limited
// server-side (a 2000 char message cap) to mitigate abuse.
const MAX_NAME = 80
const MAX_EMAIL = 120
const MAX_MESSAGE = 2000

function validate({ name, email, message }) {
  const errors = {}
  const trimmedName = name.trim()
  const trimmedEmail = email.trim()
  const trimmedMessage = message.trim()

  if (!trimmedName) errors.name = 'Please enter your name.'
  else if (trimmedName.length > MAX_NAME) errors.name = `Max ${MAX_NAME} characters.`

  // Conservative RFC-ish email pattern, anchored.
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!trimmedEmail) errors.email = 'Please enter your email.'
  else if (trimmedEmail.length > MAX_EMAIL) errors.email = `Max ${MAX_EMAIL} characters.`
  else if (!emailRe.test(trimmedEmail)) errors.email = 'That doesn’t look like a valid email.'

  if (!trimmedMessage) errors.message = 'Please write a short message.'
  else if (trimmedMessage.length < 10) errors.message = 'Tell me a bit more (10+ characters).'
  else if (trimmedMessage.length > MAX_MESSAGE) errors.message = `Max ${MAX_MESSAGE} characters.`

  return errors
}

const availableRooms = rooms.filter((r) => r.status !== 'rented')
const waitlistRooms = rooms.filter((r) => r.status === 'rented')

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    room: '',
    moveIn: '',
    message: '',
    // Honeypot field — bots fill it, humans don't see it.
    website: '',
  })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success | error

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (form.website) {
      setStatus('success')
      return
    }

    const v = validate(form)
    setErrors(v)
    if (Object.keys(v).length) return

    setStatus('submitting')

    if (contact.formspreeEndpoint) {
      try {
        const res = await fetch(contact.formspreeEndpoint, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: form.name.trim(),
            email: form.email.trim(),
            room: form.room || 'No preference',
            moveIn: form.moveIn || 'Flexible',
            message: form.message.trim(),
          }),
        })
        if (!res.ok) throw new Error(`Form submission failed: ${res.status}`)
        setStatus('success')
        setForm({ name: '', email: '', room: '', moveIn: '', message: '', website: '' })
      } catch {
        setStatus('error')
      }
      return
    }

    const subject = encodeURIComponent(`Rental Inquiry — ${form.name}`)
    const bodyLines = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Preferred room: ${form.room || 'No preference'}`,
      `Move-in: ${form.moveIn || 'Flexible'}`,
      '',
      form.message,
    ]
    const body = encodeURIComponent(bodyLines.join('\n'))
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`
    setStatus('success')
  }

  return (
    <section id="contact" className="section-padding bg-sage-700 text-cream-50">
      <div className="container-narrow">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <FadeIn className="lg:col-span-5">
            <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-sage-200">
              Let’s connect
            </span>
            <h2 className="mt-3 font-serif text-4xl font-medium leading-tight sm:text-5xl">
              Interested? Send a message.
            </h2>
            <p className="mt-4 max-w-md text-lg leading-relaxed text-cream-100/85">
              Tell me a little about yourself and which room caught your eye, and
              I&apos;ll get back to you to schedule a tour.
            </p>

            <div className="mt-8 space-y-3">
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center gap-3 rounded-full border border-cream-50/20 bg-cream-50/5 px-4 py-3 text-sm transition-colors hover:bg-cream-50/10"
              >
                <Mail className="h-4 w-4" />
                {contact.email}
              </a>
              <p className="text-sm text-cream-100/70">{contact.responseTime}</p>
            </div>
          </FadeIn>

          <FadeIn className="lg:col-span-7" delay={0.1}>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-3xl bg-cream-50 p-6 text-ink-900 shadow-soft-lg sm:p-8"
            >
              {/* Honeypot — hidden from real users */}
              <div className="absolute -left-[9999px]" aria-hidden="true">
                <label>
                  Website
                  <input
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={form.website}
                    onChange={update('website')}
                  />
                </label>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field
                  label="Your name"
                  id="name"
                  value={form.name}
                  onChange={update('name')}
                  error={errors.name}
                  autoComplete="name"
                  maxLength={MAX_NAME}
                  required
                />
                <Field
                  label="Email"
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={update('email')}
                  error={errors.email}
                  autoComplete="email"
                  maxLength={MAX_EMAIL}
                  required
                />

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="room" className="text-xs font-medium uppercase tracking-wider text-ink-700">
                    Preferred room
                  </label>
                  <select
                    id="room"
                    value={form.room}
                    onChange={update('room')}
                    className="rounded-xl border border-clay-200 bg-cream-50 px-4 py-3 text-sm text-ink-900 transition-colors focus:border-clay-500 focus:outline-none focus:ring-2 focus:ring-clay-300/40"
                  >
                    <option value="">No preference</option>
                    {availableRooms.length > 0 && (
                      <optgroup label="Available now">
                        {availableRooms.map((r) => (
                          <option key={r.id} value={r.name}>
                            {r.name} — ${r.price}/mo
                          </option>
                        ))}
                      </optgroup>
                    )}
                    {waitlistRooms.length > 0 && (
                      <optgroup label="Waitlist">
                        {waitlistRooms.map((r) => (
                          <option key={r.id} value={`Waitlist: ${r.name}`}>
                            {r.name} (currently rented)
                          </option>
                        ))}
                      </optgroup>
                    )}
                  </select>
                </div>

                <Field
                  label="Ideal move-in"
                  id="moveIn"
                  type="text"
                  placeholder="e.g. Aug 1"
                  value={form.moveIn}
                  onChange={update('moveIn')}
                  autoComplete="off"
                  maxLength={40}
                />
              </div>

              <div className="mt-5 flex flex-col gap-1.5">
                <label htmlFor="message" className="text-xs font-medium uppercase tracking-wider text-ink-700">
                  Message <span className="text-clay-600">*</span>
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={form.message}
                  onChange={update('message')}
                  maxLength={MAX_MESSAGE}
                  required
                  className={`resize-none rounded-xl border bg-cream-50 px-4 py-3 text-sm text-ink-900 transition-colors focus:outline-none focus:ring-2 focus:ring-clay-300/40 ${
                    errors.message
                      ? 'border-red-400 focus:border-red-500'
                      : 'border-clay-200 focus:border-clay-500'
                  }`}
                  placeholder="Hi! I'm interested in a room. A bit about me…"
                />
                <div className="flex items-center justify-between">
                  {errors.message ? (
                    <span className="text-xs text-red-600">{errors.message}</span>
                  ) : (
                    <span className="text-xs text-ink-700/60">
                      Min 10 characters.
                    </span>
                  )}
                  <span className="text-xs text-ink-700/60">
                    {form.message.length}/{MAX_MESSAGE}
                  </span>
                </div>
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink-900 px-6 py-3.5 text-sm font-medium text-cream-50 transition-all hover:bg-clay-700 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Inquiry
                  </>
                )}
              </button>

              <AnimatePresence>
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-5 flex items-start gap-2 rounded-2xl bg-sage-50 p-4 text-sm text-sage-700"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0" />
                    <span>
                      Thanks — your message is on its way. I&apos;ll get back to
                      you soon.
                    </span>
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-5 flex items-start gap-2 rounded-2xl bg-red-50 p-4 text-sm text-red-700"
                  >
                    <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0" />
                    <span>
                      Something went wrong. Please try again, or email{' '}
                      <a className="underline" href={`mailto:${contact.email}`}>
                        {contact.email}
                      </a>{' '}
                      directly.
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

function Field({ label, id, error, required, ...rest }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-xs font-medium uppercase tracking-wider text-ink-700">
        {label} {required && <span className="text-clay-600">*</span>}
      </label>
      <input
        id={id}
        {...rest}
        className={`rounded-xl border bg-cream-50 px-4 py-3 text-sm text-ink-900 transition-colors focus:outline-none focus:ring-2 focus:ring-clay-300/40 ${
          error
            ? 'border-red-400 focus:border-red-500'
            : 'border-clay-200 focus:border-clay-500'
        }`}
      />
      {error && <span className="text-xs text-red-600">{error}</span>}
    </div>
  )
}
