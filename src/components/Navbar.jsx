import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Equipos',   href: '#galeria'   },
  { label: 'Eventos',   href: '#eventos'   },
  { label: 'Contacto',  href: '#contacto'  },
]

const WA = 'https://wa.me/526563182873?text=Hola%2C%20quiero%20cotizar%20renta%20de%20sanitarios'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <motion.header
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0,   opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 sm:bg-white/90 sm:backdrop-blur-xl border-b border-gray-100 shadow-sm'
          : 'bg-white/90 sm:bg-white/70 sm:backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between h-16 md:h-[72px]">

        {/* ── Logo ── */}
        <a href="#inicio" className="flex items-center gap-3 shrink-0">
          <img
            src={`${import.meta.env.BASE_URL}logo.perro.jpg`}
            alt="ProMx"
            className="w-9 h-9 rounded-full object-cover ring-2 ring-brand-orange"
          />
          <div className="leading-none">
            <span className="font-display font-bold text-[18px] tracking-tight text-gray-900">
              Pro<span className="text-brand-orange">MX</span>
            </span>
            <p className="text-[9px] text-gray-400 uppercase tracking-[0.18em] mt-0.5">
              Sanitarios · Juárez
            </p>
          </div>
        </a>

        {/* ── Desktop nav ── */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map(l => (
            <motion.a
              key={l.href} href={l.href}
              whileHover={{ y: -1 }}
              className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-brand-orange rounded-xl hover:bg-orange-50 transition-colors"
            >
              {l.label}
            </motion.a>
          ))}
        </nav>

        {/* ── CTA ── */}
        <div className="hidden md:block">
          <motion.a
            href={WA} target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
            className="btn-primary px-5 py-2.5 text-sm shadow-md shadow-orange-100"
          >
            Cotizar ahora
          </motion.a>
        </div>

        {/* ── Hamburger ── */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setOpen(v => !v)}
          className="md:hidden p-2 rounded-xl text-gray-600 hover:bg-gray-100 transition-colors"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </motion.button>
      </div>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{   opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden border-t border-gray-100 bg-white"
          >
            <div className="px-5 py-4 flex flex-col gap-1">
              {links.map(l => (
                <a
                  key={l.href} href={l.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-gray-600 hover:text-brand-orange hover:bg-orange-50 rounded-xl transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={WA} target="_blank" rel="noopener noreferrer"
                className="mt-2 btn-primary px-4 py-3 text-sm rounded-2xl"
              >
                Cotizar por WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
