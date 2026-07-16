import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center px-4 pt-16">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-7xl font-bold text-gray-900 text-center max-w-3xl"
      >
        Bienvenido a tu landing page
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-6 text-lg md:text-xl text-gray-600 text-center max-w-xl"
      >
        Crea tu presencia digital con un stack moderno y rápido.
      </motion.p>

      <motion.a
        href="#contact"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-10 px-8 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors"
      >
        Contáctanos
      </motion.a>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-20"
      >
        <a href="#about">
          <ArrowDown size={24} className="text-gray-400 animate-bounce" />
        </a>
      </motion.div>
    </section>
  )
}
