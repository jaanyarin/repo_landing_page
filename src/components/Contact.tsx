import { motion } from 'framer-motion'
import { Send, MessageCircle } from 'lucide-react'
import type { FormEvent } from 'react'

export default function Contact() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = data.get('name')
    const email = data.get('email')
    const message = data.get('message')
    const whatsappMsg = encodeURIComponent(
      `Hola, soy ${name} (${email}). ${message}`
    )
    window.open(`https://wa.me/51999999999?text=${whatsappMsg}`, '_blank')
  }

  return (
    <section id="contact" className="py-24 px-4 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-gray-900 text-center"
        >
          Contacto
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 text-gray-600 text-center"
        >
          Escríbenos y te responderemos a la brevedad.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          className="mt-12 space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <input
              name="name"
              type="text"
              placeholder="Nombre"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-gray-900/20"
            />
            <input
              name="email"
              type="email"
              placeholder="Correo electrónico"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-gray-900/20"
            />
          </div>
          <textarea
            name="message"
            placeholder="Mensaje"
            required
            rows={5}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-gray-900/20 resize-none"
          />
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors"
            >
              <Send size={18} />
              Enviar por WhatsApp
            </button>
            <a
              href="https://wa.me/51999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 border border-gray-300 text-gray-700 rounded-full font-medium hover:bg-gray-100 transition-colors"
            >
              <MessageCircle size={18} />
              WhatsApp directo
            </a>
          </div>
        </motion.form>
      </div>
    </section>
  )
}
