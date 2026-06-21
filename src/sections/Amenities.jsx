import {
  Wifi,
  Sofa,
  WashingMachine,
  Car,
  ChefHat,
  Thermometer,
  Trees,
  ShieldCheck,
  Zap,
  Sparkles,
  Check,
} from 'lucide-react'
import { amenities } from '../data/property'
import FadeIn from '../components/FadeIn'

// Map data-driven icon names to tree-shakeable icon components.
// Add new icons here when you add a new amenity in property.js.
const ICON_MAP = {
  Wifi,
  Sofa,
  WashingMachine,
  Car,
  ChefHat,
  Thermometer,
  Trees,
  ShieldCheck,
  Zap,
  Sparkles,
}

export default function Amenities() {
  return (
    <section id="amenities" className="section-padding bg-cream-50">
      <div className="container-narrow">
        <FadeIn>
          <span className="section-eyebrow">What&apos;s included</span>
          <h2 className="section-title">Everything you need, included.</h2>
          <p className="section-lead">
            No surprise fees — utilities, internet, furnishings, and shared
            amenities are all covered in your monthly rent.
          </p>
        </FadeIn>

        <div className="mt-14 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
          {amenities.map((item, i) => {
            const Icon = ICON_MAP[item.icon] ?? Check
            return (
              <FadeIn key={item.label} delay={(i % 3) * 0.06} y={16}>
                <div className="group flex items-start gap-4 rounded-2xl p-4 transition-colors hover:bg-cream-100">
                  <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-clay-100 text-clay-700 transition-colors group-hover:bg-clay-600 group-hover:text-cream-50">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <div>
                    <h3 className="font-serif text-lg font-medium text-ink-900">
                      {item.label}
                    </h3>
                    <p className="mt-0.5 text-sm text-ink-700">{item.detail}</p>
                  </div>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
