export default function Gradients() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
      {/* Top glow */}
      <div className="absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full blur-3xl opacity-60" style={{
        background: 'radial-gradient(35% 35% at 50% 50%, rgba(99,102,241,0.55) 0%, rgba(168,85,247,0.45) 40%, rgba(34,211,238,0.35) 70%, transparent 75%)'
      }} />
      {/* Left ribbon */}
      <div className="absolute -left-40 top-40 h-[600px] w-[600px] blur-3xl opacity-60 rotate-12" style={{
        background: 'conic-gradient(from 120deg at 50% 50%, rgba(59,130,246,0.3), rgba(147,51,234,0.35), rgba(6,182,212,0.25), rgba(59,130,246,0.3))'
      }} />
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px]" />
    </div>
  )
}
