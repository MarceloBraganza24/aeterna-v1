"use client";

import { motion } from "framer-motion";
import { UserCircle } from "lucide-react";

export default function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed left-0 top-0 z-40 w-full px-5 py-5 md:px-12"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between">
        <a href="#" className="text-lg font-semibold tracking-[0.38em]">
          AETERNA
        </a>

        <div className="hidden items-center gap-5 md:flex">
          {["Inicio", "Guías", "Método", "Contacto"].map((item) => (
            <a
              key={item}
              href={
                item === "Inicio"
                  ? "#inicio"
                  : item === "Guías"
                    ? "#guias"
                    : item === "Método"
                      ? "#metodo"
                      : "#contacto"
              }
              className="rounded-full border border-white/35 px-7 py-2 text-sm font-medium text-white/90 backdrop-blur-xl transition hover:bg-white/15"
            >
              {item}
            </a>
          ))}
        </div>

        <a
          href="#contacto"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/35 bg-white/10 backdrop-blur-xl"
        >
          <UserCircle size={24} />
        </a>
      </nav>
    </motion.header>
  );
}