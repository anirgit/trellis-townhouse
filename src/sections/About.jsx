import { Quote, BedDouble, Bath, Ruler, CalendarDays } from 'lucide-react'
import { about, property } from '../data/property'
import FadeIn from '../components/FadeIn'

const STATS = [
  { icon: BedDouble, label: 'Bedrooms', value: property.stats.bedrooms },
  { icon: Bath, label: 'Bathrooms', value: property.stats.bathrooms },
  { icon: Ruler, label: 'Square feet', value: property.stats.sqft.toLocaleString() },
  { icon: CalendarDays, label: 'Year built', value: property.stats.yearBuilt },
]

export default function About() {
  return (
    <section id="about" className="section-padding bg-clay-700 text-cream-50">
      <div className="container-narrow">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <FadeIn className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -left-4 -top-4 h-full w-full rounded-3xl bg-clay-500/40" />
              <img
                src={about.hostImage}
                alt={about.hostName}
                loading="lazy"
                className="relative aspect-[4/5] w-full rounded-3xl object-cover shadow-soft-lg"
              />
              <div className="absolute -bottom-6 right-4 max-w-[14rem] rounded-2xl bg-cream-50 p-4 text-ink-900 shadow-soft-lg">
                <p className="font-serif text-sm leading-snug">
                  <Quote className="mb-1 inline h-4 w-4 text-clay-500" />{' '}
                  Hosted by {about.hostName} — proud owner & resident.
                </p>
              </div>
            </div>
          </FadeIn>

          <div className="lg:col-span-7">
            <FadeIn>
              <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-clay-200">
                About the home
              </span>
              <h2 className="mt-3 font-serif text-4xl font-medium leading-tight sm:text-5xl">
                {about.heading}
              </h2>
            </FadeIn>

            <div className="mt-6 space-y-5 text-lg leading-relaxed text-cream-100/90">
              {about.paragraphs.map((p, i) => (
                <FadeIn key={i} delay={0.1 + i * 0.08}>
                  <p>{p}</p>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={0.4}>
              <div className="mt-10 grid grid-cols-2 gap-4 rounded-3xl border border-cream-50/10 bg-cream-50/5 p-4 backdrop-blur-sm sm:grid-cols-4">
                {STATS.map((stat) => (
                  <div key={stat.label} className="flex flex-col items-start gap-1 px-2 py-1">
                    <stat.icon className="h-5 w-5 text-clay-200" strokeWidth={1.5} />
                    <span className="mt-1 font-serif text-2xl font-medium text-cream-50">
                      {stat.value}
                    </span>
                    <span className="text-[11px] uppercase tracking-wider text-cream-100/70">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {property.highlights.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-cream-50/20 bg-cream-50/5 px-3.5 py-1.5 text-xs font-medium text-cream-50/90 backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
