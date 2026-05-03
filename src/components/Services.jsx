import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Truck, Shield, Sparkles, Users, Clock, HeartHandshake } from 'lucide-react'

const services = [
  { icon: Truck,          title: 'Entrega e Instalación',  desc: 'Llevamos y colocamos tus sanitarios directo al lugar. Sin complicaciones, siempre a tiempo.',    pill: 'Logística' },
  { icon: Shield,         title: 'Higiene Certificada',    desc: 'Desinfección profunda antes y después de cada renta. Insumos completos: papel, jabón y gel.',    pill: 'Sanidad'   },
  { icon: Sparkles,       title: 'Unidades Premium',       desc: 'Sanitarios modernos, espaciosos y bien equipados. La experiencia que tus invitados merecen.',    pill: 'Calidad'   },
  { icon: Users,          title: 'Capacidad Masiva',       desc: 'De 1 a cientos de unidades. Bodas, conciertos, ferias, construcción — cubrimos todo.',          pill: 'Escala'    },
  { icon: Clock,          title: 'Renta Flexible',         desc: 'Por horas, días o meses. Pagas solo lo que usas, sin cargos ocultos.',                           pill: 'Planes'    },
  { icon: HeartHandshake, title: 'Mantenimiento en Sitio', desc: 'Incluimos limpieza y recarga de insumos para eventos de larga duración.',                        pill: 'Soporte'   },
]

const sectionVariants = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.07 } },
}
const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { type: 'tween', ease: 'easeOut', duration: 0.5 } },
}

export default function Services() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="servicios" className="py-32 md:py-40 bg-gray-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div ref={ref} className="mb-16">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ type: 'tween', ease: 'easeOut', duration: 0.5 }}
            className="section-label mb-3"
          >Lo que incluye</motion.p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ type: 'tween', ease: 'easeOut', duration: 0.5, delay: 0.08 }}
              className="section-title will-change-transform"
            >
              Todo para tu<br />
              <span className="text-brand-orange">evento</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ type: 'tween', ease: 'easeOut', duration: 0.5, delay: 0.18 }}
              className="text-gray-400 text-sm max-w-xs leading-relaxed"
            >
              Nos encargamos de la higiene para que tú te enfoques en lo importante.
            </motion.p>
          </div>
        </div>

        {/* Grid */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {services.map(s => {
            const Icon = s.icon
            return (
              <motion.div
                key={s.title}
                variants={cardVariants}
                whileHover={{ y: -4, transition: { type: 'tween', duration: 0.2 } }}
                className="card p-8 cursor-default group will-change-transform"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-10 h-10 rounded-2xl bg-orange-50 flex items-center justify-center">
                    <Icon size={18} className="text-brand-orange" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-300 group-hover:text-brand-orange transition-colors">
                    {s.pill}
                  </span>
                </div>
                <h3 className="font-display font-bold text-lg text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
