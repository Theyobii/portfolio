import React from 'react';

export default function ContactForm() {
  return (
    <div className="max-w-xl mx-auto p-6 shadow-xl">
      <h2 className="text-black text-lg font-semibold mb-3">Contáctame</h2>

      <form
        action="https://formsubmit.co/sisaxsisa20@gmail.com  "
        method="POST"
        className="grid gap-4"
      >
        <label htmlFor="nombre"
        >Nombre:</label>
        <input 
        type="text" 
        id="nombre" 
        name="nombre" 
        required 
        class="w-full bg-transparent border border-zinc-700 rounded-md px-3 py-2 text-black placeholder:text-zinc-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none transition"
        />
        
        <label htmlFor="email" className="text-sm ">
          Tu Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full bg-transparent border border-zinc-700 rounded-md px-3 py-2 text-black placeholder:text-zinc-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none transition"
        />

        <label htmlFor="mensaje" className="text-sm text-black">
          Mensaje
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          required
          rows={6}
          className="w-full bg-transparent border border-zinc-700 rounded-md px-3 py-2 text-black placeholder:text-zinc-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none transition resize-vertical"
        />

        <button
          type="submit"
          className="self-end bg-gradient-to-r from-cyan-400 to-sky-600 text-slate-900 font-semibold px-4 py-2 rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
