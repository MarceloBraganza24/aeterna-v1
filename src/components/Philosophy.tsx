"use client";

import { motion } from "framer-motion";

const items = [
  {
    number: "01",
    title: "Conocimiento real",
    text: "No se trata de teoría decorativa. Se trata de herramientas concretas para tomar acción.",
  },
  {
    number: "02",
    title: "Estructura sólida",
    text: "Procesos, ética, claridad comercial y formación orientada al resultado práctico.",
  },
];

export default function Philosophy() {
  return (
    <section
      id="filosofia"
      className="relative overflow-hidden bg-[#03170f] px-5 py-28 md:px-12"
    >
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-emerald-500/20 blur-[140px]" />

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.4em] text-emerald-300">
            Filosofía evergreen
          </p>

          <h2 className="text-balance text-5xl font-medium tracking-[-0.06em] md:text-7xl">
            Contenido vivo para una economía que cambia.
          </h2>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/65">
            Las guías se actualizan con inteligencia artificial, manteniendo
            relevancia, claridad y aplicación práctica sin reconstruir todo
            desde cero.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {items.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12, duration: 0.7 }}
              viewport={{ once: true }}
              className="glass rounded-[2rem] p-8"
            >
              <span className="serif text-6xl text-emerald-300">
                {item.number}
              </span>
              <h3 className="mt-8 text-xl font-semibold">{item.title}</h3>
              <p className="mt-4 leading-7 text-white/65">{item.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}