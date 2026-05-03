import { motion } from 'framer-motion'
import { Facebook, MessageCircle, Phone, Mail, Clock, MapPin } from 'lucide-react'

const WA = 'https://wa.me/526563182873?text=Hola%2C%20quiero%20cotizar%20renta%20de%20sanitarios'
const FB = 'https://www.facebook.com/p/ProMx-Renta-de-Mobiliario-100069972773623/'

const navLinks = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Equipos',   href: '#galeria'   },
  { label: 'Eventos',   href: '#eventos'   },
  { label: 'Contacto',  href: '#contacto'  },
]

export default function Footer() {
  return (
    <footer className="bg-gray-950 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-14">

          {/* Brand */}
          <div>
            <a href="#inicio" className="flex items-center gap-3 mb-5">
              <img src={`${import.meta.env.BASE_URL}logo.perro.jpg`} alt="ProMx"
                className="w-10 h-10 rounded-full object-cover ring-2 ring-brand-orange" />
              <div>
                <p className="font-display font-bold text-white text-lg tracking-tight">
                  Pro<span className="text-brand-orange">MX</span>
                </p>
                <p className="text-[9px] text-gray-500 uppercase tracking-[0.18em]">Sanitarios Portátiles</p>
              </div>
            </a>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Renta de sanitarios portátiles para eventos, fiestas y construcción en Ciudad Juárez, Chih.
            </p>
            <div className="flex gap-2">
              {[
                { icon: Facebook,      href: FB, label: 'Facebook'  },
                { icon: MessageCircle, href: WA, label: 'WhatsApp'  },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label} href={href} target="_blank" rel="noopener noreferrer"
                  whileHover={{ scale: 1.12, y: -2 }} aria-label={label}
                  className="w-9 h-9 rounded-xl bg-white/5 hover:bg-brand-orange/20 flex items-center justify-center text-gray-500 hover:text-brand-orange transition-all"
                >
                  <Icon size={15} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <p className="text-white text-xs font-bold uppercase tracking-widest mb-5">Navegación</p>
            <nav className="flex flex-col gap-3">
              {navLinks.map(l => (
                <a key={l.href} href={l.href}
                  className="text-sm text-gray-500 hover:text-brand-orange transition-colors">
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white text-xs font-bold uppercase tracking-widest mb-5">Contacto</p>
            <div className="space-y-3.5">
              {[
                { icon: Phone,         href: 'tel:+526563182873',           text: '+52 656 318-2873'           },
                { icon: MessageCircle, href: WA,                             text: 'WhatsApp directo'           },
                { icon: Mail,          href: 'mailto:info@promxsanitarios.mx', text: 'info@promxsanitarios.mx'  },
                { icon: MapPin,        href: '#',                            text: 'Ciudad Juárez, Chih.'       },
                { icon: Clock,         href: '#',                            text: 'Lun–Sáb 7am–7pm'            },
              ].map(({ icon: Icon, href, text }) => (
                <a key={text} href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-2.5 text-sm text-gray-500 hover:text-brand-orange transition-colors">
                  <Icon size={13} className="text-gray-600 shrink-0" />
                  {text}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-700">
          <p>© {new Date().getFullYear()} ProMx Sanitarios · Todos los derechos reservados</p>
          <p className="flex items-center gap-1.5">
            Desarrollado por{' '}
            <a
              href="https://calleros.me"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-orange hover:text-orange-400 font-semibold transition-colors"
            >
              calleros.me
            </a>
            · Ciudad Juárez, Chihuahua · México
          </p>
        </div>
      </div>
    </footer>
  )
}
