import { useEffect, useRef } from 'react'

// Lightweight 3D-like animated orbs using canvas (no heavy deps)
export default function Orbs3D() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let raf

    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    function resize() {
      const { width, height } = canvas.getBoundingClientRect()
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.scale(dpr, dpr)
    }
    const onResize = () => resize()
    window.addEventListener('resize', onResize)
    resize()

    const orbs = Array.from({ length: 8 }).map((_, i) => ({
      x: Math.random() * 600,
      y: Math.random() * 300,
      r: 40 + Math.random() * 60,
      hue: 200 + Math.random() * 120,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
    }))

    function draw() {
      const { width, height } = canvas.getBoundingClientRect()
      ctx.clearRect(0, 0, width, height)
      ctx.globalCompositeOperation = 'lighter'

      for (const o of orbs) {
        o.x += o.vx
        o.y += o.vy
        if (o.x < -50 || o.x > width + 50) o.vx *= -1
        if (o.y < -50 || o.y > height + 50) o.vy *= -1

        const grad = ctx.createRadialGradient(o.x, o.y, 0, o.x, o.y, o.r)
        grad.addColorStop(0, `hsla(${o.hue},85%,65%,0.55)`)
        grad.addColorStop(1, `hsla(${o.hue + 30},85%,55%,0.05)`)

        ctx.fillStyle = grad
        ctx.beginPath()
        ctx.arc(o.x, o.y, o.r, 0, Math.PI * 2)
        ctx.fill()
      }

      raf = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden opacity-70">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  )
}
