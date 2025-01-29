import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Ccontrol() {
  const [commandHistory, setCommandHistory] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleCommand = (command) => {
    setCommandHistory((prev) => [...prev, command]);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex flex-col items-center p-4 gap-8 w-full flex-grow">
        <section
          className="bg-white p-4 rounded-lg shadow-md w-full max-w-5xl mx-auto"
          data-aos="fade-up"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Centro de Control
          </h2>

          {/* Contenedor principal horizontal */}
          <div
            className="flex flex-col md:flex-row justify-center items-start gap-8"
            data-aos="fade-up"
          >
            {/* Viñeta de la cruceta */}
            <div
              className="bg-gray-100 p-4 rounded-lg shadow w-full md:w-1/3 flex flex-col items-center"
              data-aos="zoom-in"
            >
              <h3 className="text-lg font-medium text-gray-800 mb-4">Controles</h3>
              <div className="grid grid-cols-3 grid-rows-3 gap-2">
                {/* Fila 1 */}
                <div></div>
                <button
                  onClick={() => handleCommand("Adelante")}
                  className="h-12 w-12 bg-gray-200 hover:bg-yellow-400 rounded-full shadow text-gray-800 flex items-center justify-center transition transform hover:scale-110"
                >
                  ⬆️
                </button>
                <div></div>
                {/* Fila 2 */}
                <button
                  onClick={() => handleCommand("Izquierda")}
                  className="h-12 w-12 bg-gray-200 hover:bg-yellow-400 rounded-full shadow text-gray-800 flex items-center justify-center transition transform hover:scale-110"
                >
                  ⬅️
                </button>
                <button
                  onClick={() => handleCommand("Stop")}
                  className="h-12 w-12 bg-red-500 text-white font-bold rounded-full shadow flex items-center justify-center transition transform hover:scale-110"
                >
                  ⏹️
                </button>
                <button
                  onClick={() => handleCommand("Derecha")}
                  className="h-12 w-12 bg-gray-200 hover:bg-yellow-400 rounded-full shadow text-gray-800 flex items-center justify-center transition transform hover:scale-110"
                >
                  ➡️
                </button>
                {/* Fila 3 */}
                <div></div>
                <button
                  onClick={() => handleCommand("Atrás")}
                  className="h-12 w-12 bg-gray-200 hover:bg-yellow-400 rounded-full shadow text-gray-800 flex items-center justify-center transition transform hover:scale-110"
                >
                  ⬇️
                </button>
                <div></div>
              </div>
              <div className="mt-4 flex gap-2">
                <button
                  onClick={() => handleCommand("Abrir Garra")}
                  className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded shadow flex items-center gap-2 transition transform hover:scale-105"
                >
                  🖐️ Abrir Garra
                </button>
                <button
                  onClick={() => handleCommand("Cerrar Garra")}
                  className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded shadow flex items-center gap-2 transition transform hover:scale-105"
                >
                  🖑️ Cerrar Garra
                </button>
              </div>
            </div>

            {/* Viñeta de conexión e historial */}
            <div
              className="bg-gray-100 p-4 rounded-lg shadow w-full md:w-1/3 flex flex-col"
              data-aos="fade-right"
            >
              <h3 className="text-lg font-medium text-gray-800 mb-4">Conexión</h3>
              <div className="flex items-center gap-4 mb-4">
                <button className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded shadow transition transform hover:scale-105">
                  Conectar
                </button>
                <button className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded shadow transition transform hover:scale-105">
                  Desconectar
                </button>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <label className="text-gray-800 font-medium">IP:</label>
                <input
                  type="text"
                  className="p-2 border border-gray-300 rounded flex-grow"
                  placeholder="Ingresa IP"
                />
              </div>
              <h3 className="text-lg font-medium text-gray-800 mb-2">Historial de comandos</h3>
              <textarea
                className="w-full h-32 p-2 border border-gray-300 rounded resize-none text-gray-800"
                placeholder="Historial de comandos..."
                value={commandHistory.join("\n")}
                readOnly
              ></textarea>
            </div>

            {/* Viñeta de visualización de cámara */}
            <div
              className="bg-gray-100 p-4 rounded-lg shadow w-full md:w-1/3 flex flex-col items-center"
              data-aos="fade-left"
            >
              <h3 className="text-lg font-medium text-gray-800 mb-4">Visualización</h3>
              <div className="w-full h-48 bg-gray-300 rounded flex items-center justify-center">
                <span className="text-gray-600">Vista de cámara</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
