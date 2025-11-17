import { useState } from 'react'

// Generic image with graceful fallback to an inline SVG placeholder
export default function ImageWithFallback({ src, alt, className = '', fallbackText = 'Image' }) {
  const [error, setError] = useState(false)

  const placeholder = `data:image/svg+xml;utf8,${encodeURIComponent(`
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'>
      <defs>
        <linearGradient id='g' x1='0' x2='1' y1='0' y2='1'>
          <stop offset='0%' stop-color='#ffb199'/>
          <stop offset='50%' stop-color='#ff6f91'/>
          <stop offset='100%' stop-color='#845ec2'/>
        </linearGradient>
      </defs>
      <rect width='400' height='300' fill='url(#g)'/>
      <g fill='rgba(255,255,255,0.85)'>
        <circle cx='70' cy='70' r='6'/>
        <circle cx='110' cy='90' r='4'/>
        <circle cx='150' cy='60' r='5'/>
        <circle cx='200' cy='80' r='3'/>
      </g>
      <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='Inter, system-ui, sans-serif' font-size='18' fill='rgba(255,255,255,0.9)'>${fallbackText}</text>
    </svg>
  `)}`

  return (
    <img
      src={error ? placeholder : src}
      alt={alt}
      className={className}
      onError={() => setError(true)}
      loading="lazy"
    />
  )
}
