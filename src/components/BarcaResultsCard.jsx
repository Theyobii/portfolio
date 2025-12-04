import { useEffect, useState } from 'react'

export default function BarcaResultsCard() {
  const [data, setData] = useState(null)

  const [estaVisible, setEstaVisible] = useState(false)

  useEffect(() => {
    fetch('/api/barcelona')
      .then((res) => res.json())
      .then((d) => setData(d))
      .catch((error) => console.error('Error al cargar los datos:', error))
  }, [])

  const toggleVisibilidad = () => {
    setEstaVisible(!estaVisible)
  }

  if (!data) {
    return (
      <div className="rounded-lg bg-white p-6 text-center shadow-xl">
        <p className="text-gray-600">Cargando resultados...</p>
      </div>
    )
  }

  const { ultimos5, resumen } = data

  return (
    <div className="rounded-lg bg-white p-6 shadow-xl transition duration-300 hover:shadow-2xl">
      <div className="mb-4 text-center">
        <span className="mb-3 block text-4xl">⚽</span>
        <h4 className="mb-1 text-2xl font-semibold">Futbol</h4>
        <p className="text-gray-500">
          el futbol me ha acompaniado desde pequenio y uno de mis equipos favoritos desde siempre ha sido el Fc
          Barcelona
        </p>
      </div>

      <div
        className={`transition-all duration-500 ease-in-out ${
          estaVisible ? 'mt-4 max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <div className="space-y-4 border-t border-gray-200 pt-2">
          {ultimos5.map((m, i) => {
            const { rival, golesBarça, golesRival, competicion } = m

            const victoria = golesBarça > golesRival
            const empate = golesBarça === golesRival

            return (
              <div key={i} className="flex items-center justify-between rounded-lg bg-gray-50 p-3 hover:bg-gray-100">
                <div>
                  <p className="text-sm font-semibold text-gray-800">{rival}</p>
                  <p className="text-xs text-gray-500">{competicion}</p>
                </div>

                <div
                  className={`text-lg font-bold ${
                    victoria ? 'text-green-600' : empate ? 'text-yellow-500' : 'text-red-600'
                  }`}
                >
                  {golesBarça} - {golesRival}
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-6 border-t pt-4 text-center">
          <p className="text-sm text-gray-600">
            <span className="font-semibold text-green-600">{resumen.victorias}</span> victorias •{' '}
            <span className="font-semibold text-yellow-600">{resumen.empates}</span> empates •{' '}
            <span className="font-semibold text-red-600">{resumen.derrotas}</span> derrotas
          </p>
          <p className="pt-2 text-sm text-gray-500">
            Rendimiento: <span className="font-semibold">{resumen.rendimiento}</span>
          </p>
        </div>
      </div>

      <div className="mt-6">
        <button
          onClick={toggleVisibilidad}
          className={`w-full rounded-md px-4 py-2 font-bold shadow-md transition duration-300 ${
            estaVisible ? 'bg-red-500 text-white hover:bg-red-600' : 'bg-indigo-600 text-white hover:bg-indigo-700'
          }`}
        >
          {estaVisible ? 'Ocultar Detalle' : 'Ver Estadísticas'}
          <span className="ml-2 inline-block text-xl transition-transform duration-300">{estaVisible ? '▲' : '▼'}</span>
        </button>
      </div>
    </div>
  )
}
