import { motion } from 'framer-motion'
import { Search, CalendarCheck2, Smile } from 'lucide-react'

const steps = [
  { title: 'Browse', desc: 'Find exactly what you need—from cameras to camping gear.', icon: Search },
  { title: 'Book', desc: 'Choose dates and secure your rental in minutes.', icon: CalendarCheck2 },
  { title: 'Enjoy & Return', desc: 'Use it, love it, and return with ease.', icon: Smile },
]

export default function HowItWorks() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-black/5"
            >
              <s.icon className="w-6 h-6 text-gray-700" />
              <h4 className="mt-4 text-xl font-semibold text-gray-900">{s.title}</h4>
              <p className="mt-2 text-gray-600">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
