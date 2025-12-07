export default function ContactForm() {
  return (
    <div className="mx-auto max-w-xl p-6 shadow-xl">
      <h2 className="mb-3 text-lg font-semibold text-black">Contáctame</h2>

      <form action="https://formsubmit.co/sisaxsisa20@gmail.com  " method="POST" className="grid gap-4">
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          required
          className="w-full rounded-md border border-zinc-700 bg-transparent px-3 py-2 text-black outline-none transition placeholder:text-zinc-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
        />

        <label htmlFor="email" className="text-sm">
          Tu Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full rounded-md border border-zinc-700 bg-transparent px-3 py-2 text-black outline-none transition placeholder:text-zinc-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
        />

        <label htmlFor="mensaje" className="text-sm text-black">
          Mensaje
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          required
          rows={6}
          className="w-full rounded-md border border-zinc-700 bg-transparent px-3 py-2 text-black outline-none transition placeholder:text-zinc-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
        />

        <button
          type="submit"
          className="transform self-end rounded-lg bg-gradient-to-r from-cyan-400 to-sky-600 px-4 py-2 font-semibold text-slate-900 transition hover:-translate-y-1 hover:shadow-lg"
        >
          Enviar
        </button>
      </form>
    </div>
  )
}
