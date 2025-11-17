import { useState } from 'react'
import { Search, Camera, Tent, Dumbbell, Bike } from 'lucide-react'

export default function SearchFilters() {
  const [focused, setFocused] = useState(false)

  const categories = [
    { label: 'Cameras', icon: Camera },
    { label: 'Camping', icon: Tent },
    { label: 'Fitness', icon: Dumbbell },
    { label: 'Cycling', icon: Bike },
  ]

  return (
    <section id="search" className="relative -mt-14 z-10">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-4xl">
          {/* Search card */}
          <div className={`rounded-2xl bg-white/90 backdrop-blur shadow-xl ring-1 ring-black/5 transition-all ${focused ? 'scale-[1.01] shadow-2xl' : ''}`}>
            <div className="flex items-center gap-3 px-4 sm:px-6 py-3 sm:py-4">
              <Search className="w-5 h-5 text-gray-500" />
              <input
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                type="text"
                placeholder="Search for cameras, tents, bikes, and more..."
                className="w-full bg-transparent outline-none placeholder:text-gray-400 text-gray-800 text-sm sm:text-base"
              />
              <button className="shrink-0 rounded-full bg-gray-900 text-white px-4 py-2 text-sm font-semibold hover:-translate-y-0.5 transition-transform">
                Search
              </button>
            </div>
          </div>

          {/* Quick filters */}
          <div className="mt-4 flex flex-wrap items-center gap-2 sm:gap-3">
            {categories.map(({ label, icon: Icon }) => (
              <button key={label} className="group inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 sm:px-4 py-2 text-sm text-gray-700 shadow-sm hover:shadow-md transition-all">
                <Icon className="w-4 h-4 text-gray-500 group-hover:text-gray-900 transition-colors" />
                <span>{label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
