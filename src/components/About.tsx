import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-24 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-gray-900 text-center"
        >
          Sobre nosotros
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-lg text-gray-600 text-center max-w-2xl mx-auto"
        >
          Somos un equipo apasionado por crear experiencias digitales únicas.
          Utilizamos tecnología de punta para llevar tu negocio al siguiente nivel.
        </motion.p>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {[
            { title: 'Misión', desc: 'Transformar ideas en soluciones digitales que impulsen el crecimiento.' },
            { title: 'Visión', desc: 'Ser referentes en innovación digital en la región.' },
            { title: 'Valores', desc: 'Compromiso, calidad, innovación y cercanía con el cliente.' },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
            >
              <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-3 text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
