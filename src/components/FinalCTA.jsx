export default function FinalCTA() {
  return (
    <section id="cta" className="relative py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,0.06),transparent_60%)]" />
      <div className="container mx-auto px-6">
        <div className="rounded-3xl overflow-hidden bg-gray-900 text-white p-10 md:p-16 shadow-2xl">
          <div className="max-w-2xl">
            <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight">Start renting with ease today.</h3>
            <p className="mt-3 text-white/80">Access premium gear when you need it. No clutter, no commitments.</p>
            <div className="mt-6 flex items-center gap-4">
              <a href="#search" className="rounded-full bg-white text-gray-900 px-6 py-3 font-semibold hover:-translate-y-0.5 transition-transform">Get Started</a>
              <a href="#" className="rounded-full border border-white/30 px-6 py-3 font-semibold hover:bg-white/10 transition-colors">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
