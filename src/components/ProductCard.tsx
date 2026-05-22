"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type ProductCardProps = {
  name: string;
  price: string;
  tag: string;
  title: string;
  description: string;
  audience: string;
  pain: string;
  desire: string;
  href: string;
  index: number;
};

export default function ProductCard({
  name,
  price,
  tag,
  title,
  description,
  audience,
  pain,
  desire,
  href,
  index,
}: ProductCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 45, filter: "blur(12px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ delay: index * 0.12, duration: 0.75 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-[2.4rem] border border-white/20 bg-white/[0.07] p-6 backdrop-blur-2xl transition duration-500 hover:-translate-y-2 hover:bg-white/[0.11]"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 via-transparent to-cyan-300/10 opacity-0 transition duration-500 group-hover:opacity-100" />

      <div className="relative z-10">
        <div className="flex items-center justify-between">
          <span className="rounded-full border border-white/20 px-4 py-1 text-xs uppercase tracking-[0.22em] text-white/70">
            {tag}
          </span>
          <span className="text-sm text-white/60">{price}</span>
        </div>

        <div className="mt-24">
          <h3 className="text-3xl font-semibold tracking-[-0.05em]">
            {name}
          </h3>

          <p className="serif mt-4 text-4xl leading-none text-emerald-200">
            {title}
          </p>

          <p className="mt-6 leading-7 text-white/65">{description}</p>
        </div>

        <div className="mt-8 space-y-4 rounded-[1.5rem] bg-black/20 p-5">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-white/40">
              Público
            </p>
            <p className="mt-1 text-white/80">{audience}</p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-white/40">
              Dolor
            </p>
            <p className="mt-1 text-white/70">{pain}</p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-white/40">
              Deseo
            </p>
            <p className="mt-1 text-white/70">{desire}</p>
          </div>
        </div>

        <a
          href={href}
          className="mt-7 flex items-center justify-between rounded-full bg-white px-6 py-3 text-sm font-semibold text-emerald-950"
        >
          Quiero esta guía
          <ArrowUpRight size={18} />
        </a>
      </div>
    </motion.article>
  );
}