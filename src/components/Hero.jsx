import { motion } from 'framer-motion'
import { ChevronDown, CheckCircle2 } from 'lucide-react'

const tw = (i = 0) => ({
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: 'tween', ease: 'easeOut', duration: 0.6, delay: i * 0.1 },
  },
})

const features = ['Entrega e instalación incluida', 'Higiene garantizada', 'Ciudad Juárez y alrededores']

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-white pt-20">
      {/* Background blobs — hidden on mobile to avoid GPU paint cost */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden hidden md:block">
        <div className="absolute -top-32 right-0 w-[700px] h-[700px] bg-orange-50 rounded-full blur-[160px] opacity-70" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-yellow-50 rounded-full blur-[120px] opacity-60" />
      </div>
      {/* Dot grid */}
      <div className="absolute inset-0 opacity-[0.035]"
        style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* ── LEFT: copy ── */}
          <div className="text-left">

            {/* Badge */}
            <motion.div variants={tw(0)} initial="hidden" animate="show"
              className="inline-flex items-center gap-2 bg-brand-neon/20 border border-brand-neon text-gray-800 text-[11px] font-bold uppercase tracking-[0.18em] px-4 py-1.5 rounded-full mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
              Disponible · Ciudad Juárez, Chih.
            </motion.div>

            {/* H1 */}
            <motion.h1
              variants={tw(1)} initial="hidden" animate="show"
              className="will-change-transform font-display font-black uppercase tracking-tighter leading-[0.9] text-6xl md:text-8xl text-brand-orange mb-6"
            >
              Sanitarios<br />
              <span className="text-gray-900">Premium</span><br />
              <span className="text-gray-900">para tus</span><br />
              eventos
            </motion.h1>

            {/* Sub */}
            <motion.p variants={tw(2)} initial="hidden" animate="show"
              className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-lg mb-4">
              <span className="font-bold text-gray-900">RENTAME</span> — Sanitarios portátiles limpios, modernos y de alta capacidad.
              La solución higiénica que tu evento merece.
            </motion.p>

            {/* Features */}
            <motion.div variants={tw(3)} initial="hidden" animate="show"
              className="flex flex-col sm:flex-row flex-wrap gap-x-6 gap-y-2 mb-10">
              {features.map((f) => (
                <span key={f} className="flex items-center gap-1.5 text-sm text-gray-500 font-medium">
                  <CheckCircle2 size={14} className="text-brand-orange shrink-0" /> {f}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div variants={tw(4)} initial="hidden" animate="show"
              className="flex flex-col sm:flex-row items-start gap-4">
              <motion.a href="#contacto"
                whileHover={{ scale: 1.05, boxShadow: '0 20px 50px rgba(249,115,22,0.4)' }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary px-8 py-4 text-base shadow-xl shadow-orange-200">
                Solicitar Cotización
              </motion.a>
              <motion.a href="#galeria" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                className="btn-ghost px-8 py-4 text-base">
                Ver Equipos
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div variants={tw(5)} initial="hidden" animate="show"
              className="mt-14 flex flex-wrap gap-x-10 gap-y-4 border-t border-gray-100 pt-8">
              {[
                { v: '200+', l: 'Eventos realizados' },
                { v: '5★',   l: 'Calificación' },
                { v: '24h',  l: 'Respuesta' },
                { v: '100%', l: 'Higiene garantizada' },
              ].map((s) => (
                <div key={s.l}>
                  <p className="font-display text-3xl font-bold text-brand-orange leading-none">{s.v}</p>
                  <p className="text-[11px] text-gray-400 uppercase tracking-widest mt-1">{s.l}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: logo flotante — only desktop ── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: 'tween', ease: 'easeOut', duration: 0.7, delay: 0.3 }}
            className="hidden lg:flex justify-center items-center will-change-transform">
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative will-change-transform">
              <div className="absolute inset-0 rounded-full bg-brand-orange blur-[80px] opacity-20 scale-125" />
              <img src={`${import.meta.env.BASE_URL}logo.perro.jpg`} alt="ProMX Sanitarios"
                loading="eager"
                className="relative w-72 h-72 xl:w-96 xl:h-96 rounded-full object-cover ring-8 ring-brand-orange/30 shadow-2xl shadow-orange-200" />
              {/* Orbiting badge */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 will-change-transform">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-orange text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg whitespace-nowrap">
                  Ciudad Juárez · Chih.
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ type: 'tween', delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
          <ChevronDown size={24} className="text-gray-300" />
        </motion.div>
      </motion.div>
    </section>
  )
}
