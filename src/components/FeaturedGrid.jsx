import { motion } from 'framer-motion'
import ImageWithFallback from './ImageWithFallback'

const items = [
  { id: 1, title: 'Sony A7 III', desc: 'Full-frame mirrorless', price: 45, img: 'https://images.unsplash.com/photo-1519183071298-a2962be96f83?q=80&w=1200&auto=format&fit=crop' },
  { id: 2, title: 'DJI Mavic Air', desc: 'Compact 4K drone', price: 55, img: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop' },
  { id: 3, title: 'GoPro HERO 12', desc: 'Action camera', price: 20, img: 'https://images.unsplash.com/photo-1508898578281-774ac4893bd0?q=80&w=1200&auto=format&fit=crop' },
  { id: 4, title: 'North Face Tent', desc: '2-person ultralight', price: 18, img: 'https://images.unsplash.com/photo-1504280390368-39776a933dc9?q=80&w=1200&auto=format&fit=crop' },
  { id: 5, title: 'Canon EF 24-70mm', desc: 'Pro zoom lens', price: 25, img: 'https://images.unsplash.com/photo-1526178612684-3e5390357857?q=80&w=1200&auto=format&fit=crop' },
  { id: 6, title: 'Inflatable SUP', desc: 'All-round board', price: 22, img: 'https://images.unsplash.com/photo-1519052537078-e6302a4968d4?q=80&w=1200&auto=format&fit=crop' },
]

export default function FeaturedGrid() {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {items.map((it) => (
            <motion.div key={it.id} whileHover={{ y: -4 }} className="group rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all">
              <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                <ImageWithFallback
                  src={it.img}
                  alt={it.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  fallbackText={it.title}
                />
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-gray-900">{it.title}</h4>
                <p className="text-sm text-gray-600 line-clamp-2">{it.desc}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-semibold text-gray-900">${it.price}/day</span>
                  <button className="rounded-full bg-gray-900 text-white text-sm px-4 py-2 hover:-translate-y-0.5 transition-transform">
                    Rent
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
