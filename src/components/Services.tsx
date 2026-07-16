import { motion } from 'framer-motion'
import { Globe, Palette, BarChart3 } from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'Desarrollo Web',
    desc: 'Sitios y aplicaciones web modernas, rápidas y responsivas.',
  },
  {
    icon: Palette,
    title: 'Diseño UI/UX',
    desc: 'Interfaces intuitivas y atractivas centradas en el usuario.',
  },
  {
    icon: BarChart3,
    title: 'Marketing Digital',
    desc: 'Estrategias para aumentar tu presencia y alcance online.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-gray-900 text-center"
        >
          Servicios
        </motion.h2>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
              className="text-center p-8 rounded-2xl bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <s.icon size={40} className="mx-auto text-gray-900" />
              <h3 className="mt-6 text-xl font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-3 text-gray-600">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
