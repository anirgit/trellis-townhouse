import { Check, ArrowRight, Building2 } from 'lucide-react'
import { rooms } from '../data/property'
import FadeIn from '../components/FadeIn'

const STATUS_STYLES = {
  available: 'bg-sage-100 text-sage-700 ring-sage-200',
  soon: 'bg-cream-200 text-clay-700 ring-clay-200',
  rented: 'bg-clay-100 text-ink-700 ring-clay-200',
}

export default function Rooms() {
  return (
    <section id="rooms" className="section-padding bg-cream-100">
      <div className="container-narrow">
        <FadeIn>
          <span className="section-eyebrow">Find your room</span>
          <h2 className="section-title">Available rooms</h2>
          <p className="section-lead">
            Each room is fully furnished and move-in ready. Prices include all
            utilities, Wi-Fi, and access to common areas.
          </p>
        </FadeIn>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room, i) => {
            const isRented = room.status === 'rented'
            return (
              <FadeIn key={room.id} delay={i * 0.08}>
                <article
                  className={`group relative flex h-full flex-col overflow-hidden rounded-3xl bg-cream-50 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg ${
                    isRented ? 'opacity-70' : ''
                  }`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={room.image}
                      alt={room.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span
                      className={`absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ring-1 ring-inset ${STATUS_STYLES[room.status]}`}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          room.status === 'available'
                            ? 'bg-sage-500 animate-pulse'
                            : room.status === 'soon'
                            ? 'bg-clay-500'
                            : 'bg-ink-700'
                        }`}
                      />
                      {room.available}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-serif text-xl font-medium leading-snug text-ink-900">
                        {room.name}
                      </h3>
                      <div className="flex flex-shrink-0 items-center gap-1 rounded-full bg-clay-100 px-2.5 py-1 text-xs text-clay-700">
                        <Building2 className="h-3 w-3" />
                        <span>{room.floor}</span>
                      </div>
                    </div>

                    <div className="mt-3">
                      <div className="flex items-baseline gap-1">
                        <span className="font-serif text-3xl font-semibold text-clay-700">
                          ${room.price.toLocaleString()}
                        </span>
                        <span className="text-sm text-ink-700">/ {room.period}</span>
                      </div>
                      <p className="mt-1 text-xs text-ink-700/70">
                        + ${room.utilities} utilities ={' '}
                        <span className="font-medium text-ink-700">
                          ${(room.price + room.utilities).toLocaleString()}/mo total
                        </span>
                      </p>
                    </div>

                    {room.description && (
                      <p className="mt-4 text-sm leading-relaxed text-ink-700">
                        {room.description}
                      </p>
                    )}

                    <ul className="mt-4 space-y-2.5 text-sm text-ink-700">
                      {room.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-sage-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href="#contact"
                      className={`mt-6 inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
                        isRented
                          ? 'pointer-events-none bg-clay-100 text-ink-700'
                          : 'bg-ink-900 text-cream-50 hover:bg-clay-700 group/btn'
                      }`}
                      aria-disabled={isRented}
                    >
                      {isRented ? 'Currently Unavailable' : 'Inquire About This Room'}
                      {!isRented && (
                        <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
                      )}
                    </a>
                  </div>
                </article>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
