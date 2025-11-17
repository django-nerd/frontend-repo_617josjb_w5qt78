import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      {/* Spline background */}
      <div className="absolute inset-0 -z-10">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" />
      </div>

      {/* Overlay for readability */}
      <div className="absolute inset-0 -z-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />

      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white max-w-3xl"
          >
            Rent Anything. Live Freely.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-5 text-white/85 text-lg md:text-xl max-w-2xl"
          >
            Get access to camping gear, cameras, sports equipment, and more—only when you need them.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-8 flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#search"
              className="inline-flex items-center justify-center rounded-full bg-white/90 text-gray-900 px-6 py-3 font-semibold shadow-lg shadow-black/20 hover:-translate-y-0.5 hover:shadow-xl hover:bg-white transition-all"
            >
              Explore Rentals
            </a>
            <a
              href="#cta"
              className="inline-flex items-center justify-center rounded-full border border-white/70 text-white px-6 py-3 font-semibold backdrop-blur-sm hover:bg-white/10 hover:-translate-y-0.5 transition-all"
            >
              List Your Gear
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
