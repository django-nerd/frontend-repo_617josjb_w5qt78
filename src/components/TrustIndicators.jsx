import { ShieldCheck, Lock, HeartHandshake, Star } from 'lucide-react'

const badges = [
  { icon: ShieldCheck, label: 'Verified Listings' },
  { icon: Lock, label: 'Secure Payments' },
  { icon: HeartHandshake, label: 'Damage Protection' },
  { icon: Star, label: 'Community Ratings' },
]

export default function TrustIndicators() {
  return (
    <section className="py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 rounded-2xl bg-white/70 backdrop-blur p-6 ring-1 ring-black/5 shadow-sm">
          {badges.map((b) => (
            <div key={b.label} className="flex items-center gap-2 text-gray-700">
              <b.icon className="w-5 h-5" />
              <span className="text-sm font-medium">{b.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
