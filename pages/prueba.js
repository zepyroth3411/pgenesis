import { useState } from "react";

export default function PruebaRest() {
  const [estado, setEstado] = useState("");

  const verificarEstado = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/estado"); // Cambia la URL si es necesario
      const data = await response.json();
      setEstado(data.status);
    } catch (error) {
      setEstado("Error al conectar con el backend");
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h1>Prueba del Backend</h1>
      <button onClick={verificarEstado}>Verificar Estado</button>
      <p>Estado: {estado}</p>
    </div>
  );
}
