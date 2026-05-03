import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { X, Maximize2 } from 'lucide-react'

const BASE = import.meta.env.BASE_URL

/* ── Categorías ─────────────────────────────────────────────────────────── */

const equipos = [
  { src: '515279347_1034557125553370_2425595903723611783_n.jpg', alt: 'Interior Sanitario VIP con lavabos'         },
  { src: '562165722_1119509333724815_5365071678676617282_n.jpg', alt: 'Sanitario portátil azul'                   },
  { src: '569126232_1127017002974048_9025421163241743651_n.jpg', alt: 'Unidades de aire evaporativo'              },
  { src: '569626234_1125240783151670_249874472817878227_n.jpg',  alt: 'Sanitario portátil rosa'                   },
  { src: '574341896_1133871485621933_1969381361856800329_n.jpg', alt: 'Sanitario portátil azul'                   },
  { src: '585411825_1150711327271282_8530211814017261878_n.jpg', alt: 'Sanitario portátil naranja'                },
  { src: '619185335_1197491849259896_2153991311886151598_n.jpg', alt: 'Remolque VIP con aire acondicionado'       },
  { src: '619215967_1197491815926566_2436997867748961667_n.jpg', alt: 'Sanitario portátil azul — vista frontal'  },
  // Nuevas
  { src: '481816190_944977064511377_5210626917609545326_n.jpg',  alt: 'Interior VIP — madera y lavabos'           },
  { src: '485768181_957241196618297_4718903319856251587_n.jpg',  alt: 'Sanitarios portátiles en campo'            },
  { src: '492088354_978098621199221_4300014041076164614_n.jpg',  alt: 'Camión y remolque VIP ProMx'               },
  { src: '493911181_984411260567957_2095344062941957863_n.jpg',  alt: 'Remolque VIP abierto'                      },
  { src: '499455876_1000264482315968_2831771990050081410_n.jpg', alt: 'Remolque Sanitarios VIP — exterior día'    },
  { src: '504676956_17862584154418413_1429441603884571496_n.jpg',alt: 'Regaderas portátiles ProMx'                },
]

const eventosSociales = [
  { src: '561576648_1120042640338151_5774772823476929256_n.jpg', alt: 'Evento social en jardín'                   },
  { src: '566302073_1120106590331756_7621744321792667018_n.jpg', alt: 'Equipamiento en evento al aire libre'      },
  { src: '567174556_1122683786740703_547262557842352274_n.jpg',  alt: 'Unidad VIP en evento privado'              },
  { src: '573516268_1131709429171472_1988645665914216992_n.jpg', alt: 'Sanitarios en jardín para evento social'   },
  { src: '580479533_1142778351397913_4215658575748729530_n.jpg', alt: 'Sanitario VIP en exteriores'               },
  { src: '598277309_1167640868911661_4360731357159079449_n.jpg', alt: 'Logística en evento deportivo'             },
  { src: '619202282_1197491822593232_1011741764538080197_n.jpg', alt: 'Remolque VIP en exterior de salón'         },
  // Nuevas
  { src: '492024108_978098654532551_1259764636512399979_n.jpg',  alt: 'Sanitarios en evento al aire libre'        },
  { src: '493846729_984411170567966_8542408235523808037_n.jpg',  alt: 'Remolque VIP en evento nocturno'           },
]

const conciertos = [
  { src: '562383894_1121552090187206_3555620322367431754_n.jpg', alt: 'Sanitarios en recinto para eventos masivos'},
  { src: '570162459_1127845422891206_2572849987299241360_n.jpg', alt: 'Fila de sanitarios en estadio'            },
  { src: '607977609_1181037694238645_5828729156667204239_n.jpg', alt: 'Sanitarios en festival o concierto'        },
]

const construccion = [
  { src: '569597447_1126178113057937_5841637683247518447_n.jpg', alt: 'Unidades en zona de obra o terracería'     },
  { src: '571261840_1126166686392413_4651382303324542437_n.jpg', alt: 'Sanitario en zona de construcción'         },
  // Nueva
  { src: '492066152_977420801267003_2519004597112343316_n.jpg',  alt: 'Sanitario en obra con maquinaria'          },
]

const publicidad = [
  { src: '657334920_17897988723418413_2935987107292319081_n.jpg', alt: 'Infografía — requisitos y detalles de pago' },
  { src: '679832723_1270445701964510_2268832938845179180_n.jpg',  alt: 'Poster FMS Final Internacional Freestyle'   },
  { src: '682698973_1272654871743593_5806889075728107377_n.jpg',  alt: 'Presencia en concierto Chayanne 2026'       },
  { src: '688917509_1277124147963332_5670632354577212944_n.jpg',  alt: 'Publicidad — carreras y eventos deportivos' },
  // Nueva
  { src: '494681785_993006493041767_8709660558211057925_n.jpg',   alt: 'Aires evaporativos — info y precios'        },
]

const tabs = [
  { key: 'equipos',    label: 'Equipo y Unidades',           data: equipos         },
  { key: 'sociales',   label: 'Eventos Sociales',            data: eventosSociales },
  { key: 'conciertos', label: 'Conciertos y Masivos',        data: conciertos      },
  { key: 'obra',       label: 'Construcción e Industria',    data: construccion    },
  { key: 'publicidad', label: 'Publicidad',                  data: publicidad      },
]

/* ── Card ───────────────────────────────────────────────────────────────── */
function Card({ img, index, onClick }) {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ type: 'tween', ease: 'easeOut', duration: 0.4, delay: (index % 8) * 0.05 }}
      whileHover={{ y: -3, transition: { type: 'tween', duration: 0.15 } }}
      onClick={() => onClick(img)}
      className="group relative cursor-pointer rounded-3xl overflow-hidden bg-gray-100 aspect-square shadow-sm hover:shadow-xl transition-shadow duration-300 will-change-transform"
    >
      <img
        src={BASE + img.src} alt={img.alt} loading="lazy"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
        <p className="text-white text-[12px] font-semibold leading-tight line-clamp-2">{img.alt}</p>
      </div>
      <div className="absolute top-3 right-3 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-md">
        <Maximize2 size={12} className="text-gray-700" />
      </div>
    </motion.div>
  )
}

/* ── Gallery ────────────────────────────────────────────────────────────── */
export default function Gallery() {
  const [active,   setActive]   = useState('equipos')
  const [lightbox, setLightbox] = useState(null)
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true })
  const current = tabs.find(t => t.key === active)

  return (
    <section id="galeria" className="py-32 md:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div ref={ref} className="mb-12">
          <motion.p
            initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ type: 'tween', ease: 'easeOut', duration: 0.5 }}
            className="section-label mb-3"
          >Galería</motion.p>
          <motion.h2
            initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ type: 'tween', ease: 'easeOut', duration: 0.5, delay: 0.08 }}
            className="section-title mb-8"
          >
            Nuestro <span className="text-brand-orange">trabajo</span>
          </motion.h2>

          {/* Tabs — scroll horizontal en móvil */}
          <motion.div
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
            transition={{ type: 'tween', ease: 'easeOut', duration: 0.5, delay: 0.18 }}
            className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide"
          >
            {tabs.map(t => (
              <button
                key={t.key}
                onClick={() => setActive(t.key)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 shrink-0 ${
                  active === t.key
                    ? 'bg-brand-orange text-white shadow-md shadow-orange-200'
                    : 'bg-gray-100 text-gray-500 hover:text-gray-700 hover:bg-gray-200'
                }`}
              >
                {t.label}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{   opacity: 0, y: -8 }}
            transition={{ type: 'tween', ease: 'easeOut', duration: 0.25 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {current.data.map((img, i) => (
              <Card key={img.src} img={img} index={i} onClick={setLightbox} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ type: 'tween', duration: 0.2 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1,   opacity: 1 }}
              exit={{    scale: 0.9, opacity: 0 }}
              transition={{ type: 'tween', ease: 'easeOut', duration: 0.22 }}
              onClick={e => e.stopPropagation()}
              className="relative max-w-4xl w-full will-change-transform"
            >
              <img
                src={BASE + lightbox.src} alt={lightbox.alt}
                className="w-full max-h-[85vh] object-contain rounded-3xl"
              />
              <button
                onClick={() => setLightbox(null)}
                className="absolute -top-4 -right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-xl hover:bg-gray-50 transition-colors"
              >
                <X size={16} className="text-gray-700" />
              </button>
              <p className="text-center text-white/50 text-xs mt-3 tracking-wide">{lightbox.alt}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
