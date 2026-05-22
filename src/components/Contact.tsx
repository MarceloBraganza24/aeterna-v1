export default function Contact() {
  return (
    <section
      id="contacto"
      className="aeterna-bg relative overflow-hidden px-5 py-28 md:px-12"
    >
      <div className="mx-auto grid max-w-6xl gap-10 rounded-[2.5rem] border border-white/20 bg-white/[0.09] p-8 backdrop-blur-2xl md:grid-cols-2 md:p-12">
        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.4em] text-white/65">
            Contacto
          </p>

          <h2 className="text-5xl font-medium tracking-[-0.06em] md:text-7xl">
            Empezá con claridad.
          </h2>

          <p className="mt-6 max-w-md leading-8 text-white/70">
            Dejanos tu consulta y te ayudamos a elegir la guía correcta según tu
            momento actual.
          </p>

          <div className="mt-10 space-y-2 text-white/70">
            <p>Instagram: @aeterna</p>
            <p>Email: contacto@aeterna.com</p>
          </div>
        </div>

        <form className="space-y-7">
          <div>
            <label className="text-sm font-semibold uppercase tracking-[0.2em]">
              Nombre
            </label>
            <input
              type="text"
              placeholder="Tu nombre completo"
              className="mt-3 w-full border-b border-white/45 bg-transparent py-3 text-white outline-none placeholder:text-white/45"
            />
          </div>

          <div>
            <label className="text-sm font-semibold uppercase tracking-[0.2em]">
              Email
            </label>
            <input
              type="email"
              placeholder="correo@ejemplo.com"
              className="mt-3 w-full border-b border-white/45 bg-transparent py-3 text-white outline-none placeholder:text-white/45"
            />
          </div>

          <div>
            <label className="text-sm font-semibold uppercase tracking-[0.2em]">
              Mensaje
            </label>
            <textarea
              placeholder="Contanos en qué podemos ayudarte"
              rows={4}
              className="mt-3 w-full resize-none border-b border-white/45 bg-transparent py-3 text-white outline-none placeholder:text-white/45"
            />
          </div>

          <button
            type="button"
            className="w-full rounded-full bg-white px-8 py-3 font-semibold text-emerald-950 transition hover:scale-[1.02] md:w-auto"
          >
            Enviar consulta
          </button>
        </form>
      </div>
    </section>
  );
}