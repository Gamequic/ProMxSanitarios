import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Phone, Mail, MessageCircle, MapPin, Clock } from 'lucide-react'

const WA = 'https://wa.me/526563182873?text=Hola%2C%20quiero%20cotizar%20renta%20de%20sanitarios'

const contactItems = [
  { icon: Phone,         label: 'Teléfono',  value: '+52 656 318-2873',              href: 'tel:+526563182873',           color: 'text-brand-orange' },
  { icon: MessageCircle, label: 'WhatsApp',  value: 'Mensaje directo',               href: WA,                            color: 'text-green-500'   },
  { icon: Mail,          label: 'Email',     value: 'info@promxsanitarios.mx',        href: 'mailto:info@promxsanitarios.mx', color: 'text-blue-400'  },
  { icon: MapPin,        label: 'Ubicación', value: 'Ciudad Juárez, Chihuahua',       href: 'https://maps.google.com/?q=Ciudad+Juarez,+Chihuahua', color: 'text-red-400' },
  { icon: Clock,         label: 'Horario',   value: 'Lun–Sáb 7am–7pm · 24h urgencias', href: '#',                         color: 'text-yellow-500'  },
]

export default function Contact() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <section id="contacto" className="py-32 md:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div ref={ref} className="mb-16">
          <motion.p
            initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ type: 'tween', ease: 'easeOut', duration: 0.5 }}
            className="section-label mb-3"
          >Contacto</motion.p>
          <motion.h2
            initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ type: 'tween', ease: 'easeOut', duration: 0.5, delay: 0.08 }}
            className="section-title"
          >
            ¿Listo para <span className="text-brand-orange">cotizar?</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* ── Left: info + contact items ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ type: 'tween', ease: 'easeOut', duration: 0.55, delay: 0.1 }}
            className="will-change-transform"
          >
            <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-md">
              Respondemos en minutos. Dinos cuántas unidades necesitas, el lugar y la fecha — y te damos precio al momento.
            </p>

            <div className="space-y-4">
              {contactItems.map(({ icon: Icon, label, value, href, color }) => (
                <motion.a
                  key={label} href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 group"
                >
                  <div className={`w-11 h-11 rounded-2xl bg-gray-50 flex items-center justify-center group-hover:bg-orange-50 transition-colors ${color}`}>
                    <Icon size={17} />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-300 uppercase tracking-widest font-medium">{label}</p>
                    <p className="text-gray-700 font-medium text-sm">{value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* WA CTA */}
            <motion.a
              href={WA} target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.04, boxShadow: '0 16px 40px rgba(34,197,94,0.25)' }}
              whileTap={{ scale: 0.97 }}
              className="mt-10 inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-full transition-colors shadow-lg shadow-green-100"
            >
              <MessageCircle size={18} />
              Abrir WhatsApp ahora
            </motion.a>
          </motion.div>

          {/* ── Right: form ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ type: 'tween', ease: 'easeOut', duration: 0.55, delay: 0.2 }}
            className="card p-8 will-change-transform"
          >
            <h3 className="font-display font-bold text-2xl text-gray-900 mb-1">Solicitar cotización</h3>
            <p className="text-gray-400 text-sm mb-7">Respondemos en minutos · Lun–Sáb 7am–7pm</p>

            <form className="space-y-4" onSubmit={e => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] text-gray-400 uppercase tracking-widest block mb-1.5">Nombre</label>
                  <input type="text" placeholder="Juan García"
                    className="w-full border border-gray-200 rounded-2xl px-4 py-3 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-brand-orange transition-colors" />
                </div>
                <div>
                  <label className="text-[10px] text-gray-400 uppercase tracking-widest block mb-1.5">WhatsApp</label>
                  <input type="tel" placeholder="+52 656 XXX XXXX"
                    className="w-full border border-gray-200 rounded-2xl px-4 py-3 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-brand-orange transition-colors" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] text-gray-400 uppercase tracking-widest block mb-1.5">Tipo de evento</label>
                  <select className="w-full border border-gray-200 rounded-2xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-brand-orange transition-colors bg-white">
                    <option value="">Seleccionar…</option>
                    <option>Festival / Concierto</option>
                    <option>Boda / Quinceañera</option>
                    <option>Evento Corporativo</option>
                    <option>Feria / Expo</option>
                    <option>Obra / Construcción</option>
                    <option>Otro</option>
                  </select>
                </div>
                <div>
                  <label className="text-[10px] text-gray-400 uppercase tracking-widest block mb-1.5">Unidades</label>
                  <select className="w-full border border-gray-200 rounded-2xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-brand-orange transition-colors bg-white">
                    <option>1 – 5 unidades</option>
                    <option>6 – 15 unidades</option>
                    <option>16 – 50 unidades</option>
                    <option>50+ unidades</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="text-[10px] text-gray-400 uppercase tracking-widest block mb-1.5">Fecha y lugar</label>
                <input type="text" placeholder="Ej: 15 de julio, Parque El Chamizal, Juárez"
                  className="w-full border border-gray-200 rounded-2xl px-4 py-3 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-brand-orange transition-colors" />
              </div>
              <div>
                <label className="text-[10px] text-gray-400 uppercase tracking-widest block mb-1.5">Comentarios</label>
                <textarea rows={3} placeholder="Cuéntanos más sobre tu evento…"
                  className="w-full border border-gray-200 rounded-2xl px-4 py-3 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-brand-orange transition-colors resize-none" />
              </div>
              <motion.button
                whileHover={{ scale: 1.02, boxShadow: '0 12px 32px rgba(249,115,22,0.3)' }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full btn-primary py-4 rounded-2xl text-base shadow-md shadow-orange-100"
              >
                Enviar solicitud
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
