import { Camera, Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { label: 'Explore', href: '#search' },
    { label: 'Categories', href: '#categories' },
    { label: 'How it works', href: '#how' },
    { label: 'Reviews', href: '#reviews' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
          <nav className="flex items-center justify-between px-4 py-3">
            <a href="#" className="flex items-center gap-2 text-white">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-400 via-purple-400 to-cyan-400 text-white shadow-lg">
                <Camera className="h-5 w-5" />
              </span>
              <span className="text-lg font-bold tracking-tight">RentFlow</span>
            </a>

            <div className="hidden md:flex items-center gap-8">
              {links.map((l) => (
                <a key={l.label} href={l.href} className="text-sm text-white/80 hover:text-white transition-colors">
                  {l.label}
                </a>
              ))}
              <a href="#cta" className="rounded-full px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 hover:brightness-110 shadow-md shadow-indigo-500/20">
                List your gear
              </a>
            </div>

            <button onClick={() => setOpen(!open)} className="md:hidden text-white/90 hover:text-white">
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </nav>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-3">
              <div className="flex flex-col gap-3">
                {links.map((l) => (
                  <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="text-sm text-white/85">
                    {l.label}
                  </a>
                ))}
                <a href="#cta" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400">
                  List your gear
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
