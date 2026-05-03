import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { MessageCircle, X } from 'lucide-react'

const WA_URL = 'https://wa.me/526563182873?text=Hola%2C%20quiero%20cotizar%20renta%20de%20sanitarios'

export default function WAFloat() {
  const [tooltip, setTooltip] = useState(true)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      <AnimatePresence>
        {tooltip && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.9 }}
            className="relative bg-white rounded-2xl shadow-xl px-4 py-3 text-sm max-w-[200px] text-gray-700 font-medium"
          >
            <button onClick={() => setTooltip(false)}
              className="absolute -top-2 -right-2 w-5 h-5 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors">
              <X size={10} />
            </button>
            ¡Cotiza en minutos por WhatsApp!
            <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white rotate-45 shadow-sm" />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.93 }}
        animate={{ y: [0, -4, 0] }}
        transition={{ y: { duration: 2.5, repeat: Infinity, ease: 'easeInOut' } }}
        className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-2xl shadow-green-300/50 transition-colors"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle size={26} className="text-white fill-white" />
      </motion.a>
    </div>
  )
}
