import { useEffect, useState } from 'react'

const reviews = [
  { id: 1, name: 'Ava', text: 'Rented a DSLR for a weekend shoot — flawless experience!', rating: 5, avatar: 'https://i.pravatar.cc/80?img=1' },
  { id: 2, name: 'Leo', text: 'The tent was like new. Booking was super smooth.', rating: 5, avatar: 'https://i.pravatar.cc/80?img=5' },
  { id: 3, name: 'Maya', text: 'Got a paddle board for a day trip. Great value.', rating: 4, avatar: 'https://i.pravatar.cc/80?img=3' },
]

export default function ReviewsCarousel() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % reviews.length), 3500)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="relative max-w-3xl mx-auto">
          {reviews.map((r, i) => {
            const active = i === index
            return (
              <div
                key={r.id}
                className={`absolute inset-0 transition-all duration-700 ${active ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} ${active ? 'z-10' : 'z-0'}`}
              >
                <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-black/5">
                  <div className="flex items-center gap-3">
                    <img src={r.avatar} alt={r.name} className="w-10 h-10 rounded-full" />
                    <div>
                      <p className="font-semibold text-gray-900">{r.name}</p>
                      <p className="text-yellow-500">{'★'.repeat(r.rating)}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-700">“{r.text}”</p>
                </div>
              </div>
            )
          })}
          <div className="invisible">placeholder for height</div>
        </div>
      </div>
    </section>
  )
}
