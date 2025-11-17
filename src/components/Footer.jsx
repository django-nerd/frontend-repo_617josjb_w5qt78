import { Camera, Github, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-12 border-t border-gray-200">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div>
            <div className="flex items-center gap-2">
              <Camera className="w-6 h-6 text-gray-900" />
              <span className="font-bold text-lg">RentFlow</span>
            </div>
            <p className="mt-3 text-gray-600 max-w-sm">Giving unused items a new life while helping people access what they need, when they need it.</p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="text-sm font-semibold text-gray-900">Quick Links</p>
              <ul className="mt-3 space-y-2 text-sm text-gray-600">
                <li><a href="#search" className="hover:text-gray-900">Search</a></li>
                <li><a href="#" className="hover:text-gray-900">Categories</a></li>
                <li><a href="#" className="hover:text-gray-900">Pricing</a></li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">Company</p>
              <ul className="mt-3 space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">About</a></li>
                <li><a href="#" className="hover:text-gray-900">Trust & Safety</a></li>
                <li><a href="#" className="hover:text-gray-900">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="flex md:justify-end items-center gap-3 text-gray-600">
            <a href="#" aria-label="Github" className="p-2 rounded-full border hover:bg-gray-50"><Github className="w-5 h-5" /></a>
            <a href="#" aria-label="LinkedIn" className="p-2 rounded-full border hover:bg-gray-50"><Linkedin className="w-5 h-5" /></a>
          </div>
        </div>
        <div className="mt-8 text-xs text-gray-500">© {new Date().getFullYear()} RentFlow. All rights reserved.</div>
      </div>
    </footer>
  )
}
