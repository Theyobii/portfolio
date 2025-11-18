import { useEffect, useState } from "react";

export default function BarcaResultsCard() {
  const [data, setData] = useState(null);

  const [estaVisible, setEstaVisible] = useState(false);

  useEffect(() => {
  
    fetch("/api/barcelona")
      .then((res) => res.json())
      .then((d) => setData(d))
      .catch((error) => console.error("Error al cargar los datos:", error));
  }, []);

  const toggleVisibilidad = () => {
    setEstaVisible(!estaVisible);
  };

  if (!data) {
    return (
      <div className="p-6 bg-white rounded-lg shadow-xl text-center">
        <p className="text-gray-600">Cargando resultados...</p>
      </div>
    );
  }

  const { ultimos5, resumen } = data;

  return (
    <div className="p-6 bg-white rounded-lg shadow-xl hover:shadow-2xl transition duration-300">
      
      <div className="text-center mb-4">
        <span className="text-4xl mb-3 block">⚽</span>
        <h4 className="text-2xl font-semibold mb-1">
          Futbol
        </h4>
        <p className="text-gray-500">
          el futbol me ha acompaniado desde pequenio y uno de mis equipos favoritos desde siempre ha sido el Fc Barcelona
        </p>
      </div>

      <div
        className={`transition-all duration-500 ease-in-out ${
          estaVisible ? 'max-h-screen opacity-100 mt-4' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <div className="space-y-4 pt-2 border-t border-gray-200">
          {ultimos5.map((m, i) => {
            const { rival, golesBarça, golesRival, competicion } = m; 

            const victoria = golesBarça > golesRival;
            const empate = golesBarça === golesRival;

            return (
              
              <div
                key={i}
                className="flex justify-between items-center p-3 bg-gray-50 hover:bg-gray-100 rounded-lg"
              >
                <div>
                  <p className="text-sm font-semibold text-gray-800">{rival}</p>
                  <p className="text-xs text-gray-500">{competicion}</p>
                </div>

                <div
                  className={`text-lg font-bold ${
                    victoria
                      ? "text-green-600"
                      : empate
                      ? "text-yellow-500"
                      : "text-red-600"
                  }`}
                >
                  {golesBarça} - {golesRival}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 text-center border-t pt-4">
          <p className="text-sm text-gray-600">
            <span className="font-semibold text-green-600">{resumen.victorias}</span> victorias •{" "}
            <span className="font-semibold text-yellow-600">{resumen.empates}</span> empates •{" "}
            <span className="font-semibold text-red-600">{resumen.derrotas}</span> derrotas
          </p>
          <p className="text-sm text-gray-500 pt-2">
          Rendimiento: <span className="font-semibold">{resumen.rendimiento}</span>
        </p>
        </div>
      </div>

      <div className="mt-6">
        <button
          onClick={toggleVisibilidad}
          className={`w-full py-2 px-4 font-bold rounded-md transition duration-300 shadow-md ${
            estaVisible
              ? 'bg-red-500 hover:bg-red-600 text-white'
              : 'bg-indigo-600 hover:bg-indigo-700 text-white'
          }`}
        >
          {estaVisible ? 'Ocultar Detalle' : 'Ver Estadísticas'}
          <span className="ml-2 text-xl inline-block transition-transform duration-300">
             {estaVisible ? '▲' : '▼'}
          </span>
        </button>
      </div>
    </div>
  );
}