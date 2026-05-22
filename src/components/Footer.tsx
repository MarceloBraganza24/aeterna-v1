export default function Footer() {
  return (
    <footer className="bg-[#020c08] px-5 py-10 md:px-12">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center">
        <div>
          <h3 className="text-lg font-semibold tracking-[0.38em]">AETERNA</h3>
          <p className="mt-3 text-sm text-white/45">
            Guías prácticas de acción digital.
          </p>
        </div>

        <div className="flex gap-6 text-sm text-white/55">
          <a href="#guias">Guías</a>
          <a href="#metodo">Método</a>
          <a href="#contacto">Contacto</a>
        </div>
      </div>
    </footer>
  );
}