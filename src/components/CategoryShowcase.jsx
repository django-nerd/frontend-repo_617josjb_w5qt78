import { motion } from 'framer-motion'

const cards = [
  {
    title: 'Cameras',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Camping',
    image: 'https://images.unsplash.com/photo-1470940511639-1068d7764233?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDYW1lcmFzfGVufDB8MHx8fDE3NjM0MDE4ODR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    title: 'Sports',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Drones',
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1600&auto=format&fit=crop',
  },
]

export default function CategoryShowcase() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {cards.map((c) => (
            <motion.a
              key={c.title}
              href="#"
              whileHover={{ scale: 1.01 }}
              className="relative h-44 md:h-56 rounded-2xl overflow-hidden shadow-lg"
            >
              <img src={c.image} alt={c.title} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/10" />
              <div className="absolute bottom-4 left-4">
                <h3 className="text-white text-2xl font-bold drop-shadow-sm">{c.title}</h3>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
