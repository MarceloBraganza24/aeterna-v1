"use client";

import { motion } from "framer-motion";

const audience = [
  {
    title: "El que quiere escapar",
    text: "Tiene hambre de cambio, pero necesita dirección concreta para dar sus primeros pasos digitales.",
  },
  {
    title: "El universitario perdido",
    text: "Tiene teoría, carrera o conocimiento, pero todavía no sabe cómo traducirlo en ingresos reales.",
  },
  {
    title: "El dueño agotado",
    text: "Tiene un negocio funcionando, pero vive apagando incendios porque todo depende de él.",
  },
];

export default function Audience() {
  return (
    <section className="bg-[#061b13] px-5 py-28 md:px-12">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.4em] text-emerald-300">
            A quién le hablamos
          </p>

          <h2 className="text-5xl font-medium tracking-[-0.06em] md:text-7xl">
            No vendemos información. Vendemos dirección.
          </h2>
        </div>

        <div className="space-y-5">
          {audience.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.12, duration: 0.7 }}
              viewport={{ once: true }}
              className="rounded-[2rem] border border-white/15 bg-white/[0.06] p-7 backdrop-blur-xl"
            >
              <span className="serif text-5xl text-emerald-300">
                0{index + 1}
              </span>
              <h3 className="mt-5 text-2xl font-semibold">{item.title}</h3>
              <p className="mt-3 leading-7 text-white/65">{item.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}