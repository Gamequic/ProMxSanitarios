import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const BASE = import.meta.env.BASE_URL

const events = [
  {
    img:   '679832723_1270445701964510_2268832938845179180_n.jpg',
    tag:   'Masivos',
    title: 'Festivales y Conciertos',
    desc:  'Instalación rápida para eventos de 500 a 10,000 personas. Coordinamos todo el operativo.',
    items: ['Montaje mismo día', 'Cobertura completa', 'Renta desde 1 día'],
  },
  {
    img:   '682698973_1272654871743593_5806889075728107377_n.jpg',
    tag:   'Sociales',
    title: 'Bodas y Celebraciones',
    desc:  'Unidades VIP con lavabo, espejo y acabados premium para bodas, XV años y graduaciones.',
    items: ['Unidades tipo VIP', 'Con lavabo y espejo', 'Mantenimiento incluido'],
  },
  {
    img:   '688917509_1277124147963332_5670632354577212944_n.jpg',
    tag:   'Industria',
    title: 'Obra y Construcción',
    desc:  'Renta continua para proyectos industriales y zonas de trabajo con limpieza periódica.',
    items: ['Renta semanal / mensual', 'Recolección de residuos', 'Cumplimiento NOM'],
  },
]

function EventCard({ ev, i }) {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ type: 'tween', ease: 'easeOut', duration: 0.55, delay: i * 0.1 }}
      whileHover={{ y: -5, transition: { type: 'tween', duration: 0.18 } }}
      className="card group flex flex-col overflow-hidden will-change-transform"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden rounded-t-3xl">
        <img
          src={BASE + ev.img} alt={ev.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <span className="absolute top-4 left-4 text-[10px] font-bold uppercase tracking-widest bg-brand-neon text-gray-900 px-3 py-1 rounded-full">
          {ev.tag}
        </span>
      </div>

      {/* Body */}
      <div className="p-7 flex flex-col flex-1">
        <h3 className="font-display font-bold text-xl text-gray-900 mb-2">{ev.title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-6">{ev.desc}</p>

        <ul className="mt-auto space-y-2 mb-7">
          {ev.items.map(item => (
            <li key={item} className="flex items-center gap-2.5 text-sm text-gray-500">
              <span className="w-1 h-1 rounded-full bg-brand-orange shrink-0" />
              {item}
            </li>
          ))}
        </ul>

        <motion.a
          href="#contacto"
          whileHover={{ x: 4, transition: { type: 'tween', duration: 0.15 } }}
          className="flex items-center gap-2 text-sm font-semibold text-brand-orange group-hover:gap-3 transition-all duration-200"
        >
          Cotizar ahora <ArrowRight size={14} />
        </motion.a>
      </div>
    </motion.div>
  )
}

export default function Events() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <section id="eventos" className="py-32 md:py-40 bg-gray-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div ref={ref} className="mb-16">
          <motion.p
            initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ type: 'tween', ease: 'easeOut', duration: 0.5 }}
            className="section-label mb-3"
          >Tipos de servicio</motion.p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <motion.h2
              initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ type: 'tween', ease: 'easeOut', duration: 0.5, delay: 0.08 }}
              className="section-title"
            >
              Para cada <span className="text-brand-orange">ocasión</span>
            </motion.h2>
            <motion.a
              href="#contacto"
              initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
              transition={{ type: 'tween', ease: 'easeOut', duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
              className="btn-primary px-6 py-3 text-sm self-start shadow-md shadow-orange-100"
            >
              Ver todos los servicios
            </motion.a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((ev, i) => <EventCard key={ev.title} ev={ev} i={i} />)}
        </div>
      </div>
    </section>
  )
}
