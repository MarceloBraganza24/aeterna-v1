import { FaInstagram, FaFacebookF } from "react-icons/fa";
import Image from "next/image";

function ShellLogo() {
  return (
    <div className="flex items-center gap-4">
      <a href="#inicio" className="relative h-18 w-18 overflow-hidden">
        <Image
          src="/logo.webp"
          alt="AETERNA"
          fill
          className="object-cover"
        />
      </a>

      <div>
        <a  href="#inicio" className="text-lg font-semibold tracking-[0.38em]">AETERNA</a>
        <p className="mt-2 text-sm text-white/45">
          Guías prácticas de acción digital
        </p>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#020c08] px-5 py-12 md:px-12">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 border-t border-white/10 pt-8 md:flex-row md:items-start">
        <div>
          <ShellLogo />
        </div>

        <div className="flex flex-col items-start gap-6 md:items-end">
          <div className="flex flex-wrap gap-6 text-sm text-white/55">
            <a href="#inicio" className="transition hover:text-white">
              Inicio
            </a>
            <a href="#filosofia" className="transition hover:text-white">
              Filosofía
            </a>
            <a href="#guias" className="transition hover:text-white">
              Guías
            </a>
            <a href="#metodo" className="transition hover:text-white">
              Método
            </a>
            <a href="#contacto" className="transition hover:text-white">
              Contacto
            </a>
          </div>

          <div className="flex gap-3">
            <a
              href="#"
              className="transparent-btn flex h-10 w-10 items-center justify-center rounded-full transition"
              aria-label="Instagram"
            >
              <FaInstagram size={18} />
            </a>

            <a
              href="#"
              className="transparent-btn flex h-10 w-10 items-center justify-center rounded-full transition"
              aria-label="Facebook"
            >
              <FaFacebookF size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}