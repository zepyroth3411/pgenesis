import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Ccontrol() {
  const [commandHistory, setCommandHistory] = useState([]);
  const [estado, setEstado] = useState("Desconectado");
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    AOS.init({ duration: 1000 });
    verificarEstado();
  }, []);

  // Función para enviar comandos al backend
  const enviarComando = async (comando) => {
    try {
      const response = await fetch("http://172.16.64.77:5000/send-command", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ command: comando }),
      });

      const data = await response.json();
      setMensaje(data.message);
      setCommandHistory((prev) => [...prev, `➡ ${comando}`]); // Agregar al historial
    } catch (error) {
      setMensaje("Error al conectar con el backend");
      console.error("Error:", error);
    }
  };

  // Función para obtener el estado del NodeMCU
  const verificarEstado = async () => {
    try {
      const response = await fetch("http://172.16.64.77:5000/estado");
      const data = await response.json();
      setEstado(data.status === "conectado" ? "✅ Conectado" : "❌ Desconectado");
    } catch (error) {
      setEstado("❌ Error");
      console.error("Error al obtener el estado:", error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex flex-col items-center p-4 gap-8 w-full flex-grow">
        <section className="bg-white p-4 rounded-lg shadow-md w-full max-w-5xl mx-auto" data-aos="fade-up">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Centro de Control</h2>

          {/* Contenedor principal */}
          <div className="flex flex-col md:flex-row justify-center items-start gap-8" data-aos="fade-up">
            
            {/* Viñeta de controles */}
            <div className="bg-gray-100 p-4 rounded-lg shadow w-full md:w-1/3 flex flex-col items-center" data-aos="zoom-in">
              <h3 className="text-lg font-medium text-gray-800 mb-4">Controles</h3>
              <div className="grid grid-cols-3 grid-rows-3 gap-2">
                <div></div>
                <button onClick={() => enviarComando("adelante")} className="h-12 w-12 bg-gray-200 hover:bg-yellow-400 rounded-full shadow text-gray-800 flex items-center justify-center transition transform hover:scale-110">⬆️</button>
                <div></div>
                <button onClick={() => enviarComando("izquierda")} className="h-12 w-12 bg-gray-200 hover:bg-yellow-400 rounded-full shadow text-gray-800 flex items-center justify-center transition transform hover:scale-110">⬅️</button>
                <button onClick={() => enviarComando("stop")} className="h-12 w-12 bg-red-500 text-white font-bold rounded-full shadow flex items-center justify-center transition transform hover:scale-110">⏹️</button>
                <button onClick={() => enviarComando("derecha")} className="h-12 w-12 bg-gray-200 hover:bg-yellow-400 rounded-full shadow text-gray-800 flex items-center justify-center transition transform hover:scale-110">➡️</button>
                <div></div>
                <button onClick={() => enviarComando("atras")} className="h-12 w-12 bg-gray-200 hover:bg-yellow-400 rounded-full shadow text-gray-800 flex items-center justify-center transition transform hover:scale-110">⬇️</button>
                <div></div>
              </div>
              <div className="mt-4 flex gap-2">
                <button onClick={() => enviarComando("abrir_garra")} className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded shadow flex items-center gap-2 transition transform hover:scale-105">🖐️ Abrir Garra</button>
                <button onClick={() => enviarComando("cerrar_garra")} className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded shadow flex items-center gap-2 transition transform hover:scale-105">✊ Cerrar Garra</button>
              </div>
            </div>

            {/* Viñeta de conexión e historial */}
            <div className="bg-gray-100 p-4 rounded-lg shadow w-full md:w-1/3 flex flex-col" data-aos="fade-right">
              <h3 className="text-lg font-medium text-gray-800 mb-4">Conexión</h3>
              <p className="text-lg font-semibold text-gray-600">{estado}</p>
              <button onClick={verificarEstado} className="mt-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded shadow transition transform hover:scale-105">Verificar Estado</button>
              
              <h3 className="text-lg font-medium text-gray-800 mt-4">Historial de comandos</h3>
              <textarea className="w-full h-32 p-2 border border-gray-300 rounded resize-none text-gray-800" placeholder="Historial de comandos..." value={commandHistory.join("\n")} readOnly></textarea>
            </div>

            {/* Viñeta de visualización */}
            <div className="bg-gray-100 p-4 rounded-lg shadow w-full md:w-1/3 flex flex-col items-center" data-aos="fade-left">
              <h3 className="text-lg font-medium text-gray-800 mb-4">Visualización</h3>
              <div className="w-full h-48 bg-gray-300 rounded flex items-center justify-center">
                <span className="text-gray-600">Vista de cámara</span>
              </div>
            </div>
          </div>
          
          {/* Mensaje de respuesta del backend */}
          {mensaje && <p className="mt-4 p-2 bg-gray-200 text-gray-800 rounded text-center">{mensaje}</p>}
        </section>
      </main>
      <Footer />
    </div>
  );
}

