import { MapPin, Train, ShoppingBag, Plane, Building2 } from 'lucide-react'
import { property } from '../data/property'
import FadeIn from '../components/FadeIn'

const NEARBY = [
  {
    icon: ShoppingBag,
    label: 'Alderwood Mall',
    detail: '0.5 mi — shopping, dining & entertainment next door',
  },
  {
    icon: Train,
    label: 'Lynnwood City Center Link',
    detail: '~2 mi — light rail to downtown Seattle in 28 min',
  },
  {
    icon: Building2,
    label: 'Downtown Seattle',
    detail: '~16 mi south via I-5 (or one-seat ride on Link)',
  },
  {
    icon: Plane,
    label: 'Sea-Tac Airport',
    detail: '~30 mi — easy access via I-5 or light rail',
  },
]

export default function Location() {
  const mapQuery = encodeURIComponent(property.address.mapsEmbedQuery)
  const mapSrc = `https://www.google.com/maps?q=${mapQuery}&output=embed`

  return (
    <section id="location" className="section-padding bg-cream-100">
      <div className="container-narrow">
        <FadeIn>
          <span className="section-eyebrow">The neighborhood</span>
          <h2 className="section-title">The best of Lynnwood, right at your door.</h2>
          <p className="section-lead">
            Walk to Alderwood Mall, hop on the new Lynnwood Link light rail to
            downtown Seattle, or jump on I-5 — this is one of the most
            connected addresses on the Eastside.
          </p>
        </FadeIn>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-12">
          <FadeIn className="lg:col-span-3">
            <div className="overflow-hidden rounded-3xl bg-cream-50 shadow-soft">
              <div className="aspect-[4/3] w-full">
                <iframe
                  title="Property location map"
                  src={mapSrc}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </FadeIn>

          <div className="lg:col-span-2">
            <FadeIn delay={0.1}>
              <div className="flex items-start gap-3 rounded-2xl bg-cream-50 p-5 shadow-soft">
                <span className="mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-clay-100 text-clay-700">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-clay-600">
                    Address
                  </p>
                  <p className="mt-1 font-serif text-lg text-ink-900">
                    {property.address.line1}
                  </p>
                  <p className="text-sm text-ink-700">
                    {property.address.city}, {property.address.state}{' '}
                    {property.address.zip}
                  </p>
                </div>
              </div>
            </FadeIn>

            <ul className="mt-4 space-y-2">
              {NEARBY.map((item, i) => (
                <FadeIn key={item.label} delay={0.2 + i * 0.06} y={12}>
                  <li className="flex items-start gap-3 rounded-2xl bg-cream-50 p-4 shadow-soft">
                    <span className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-sage-100 text-sage-600">
                      <item.icon className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="font-serif text-base font-medium text-ink-900">
                        {item.label}
                      </p>
                      <p className="text-sm text-ink-700">{item.detail}</p>
                    </div>
                  </li>
                </FadeIn>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
