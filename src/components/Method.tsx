"use client";

import { motion } from "framer-motion";

export default function Method() {
  return (
    <section
      id="metodo"
      className="relative overflow-hidden bg-[#03170f] px-5 py-28 md:px-12"
    >
      <div className="absolute right-0 top-20 h-[420px] w-[420px] rounded-full bg-cyan-400/20 blur-[160px]" />

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.4em] text-emerald-300">
              El método
            </p>

            <h2 className="text-balance text-5xl font-medium tracking-[-0.06em] md:text-7xl">
              Administración clásica amplificada con IA.
            </h2>

            <p className="mt-7 max-w-xl text-lg leading-8 text-white/65">
              AETERNA convierte principios de gestión, procesos y estrategia en
              guías accionables, actualizables y listas para aplicar.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass rounded-[2.5rem] p-8"
          >
            <div className="grid gap-4">
              {[
                "Diagnóstico del problema",
                "Ordenamiento del proceso",
                "Aplicación con IA",
                "Automatización posible",
                "Acción práctica",
                "Revisión evergreen",
              ].map((step, index) => (
                <div
                  key={step}
                  className="flex items-center justify-between rounded-2xl bg-black/20 px-5 py-4"
                >
                  <span className="text-white/75">{step}</span>
                  <span className="serif text-3xl text-emerald-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}