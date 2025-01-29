export default function Footer() {
    return (
      <footer className="bg-gray-700 text-white p-4 text-center">
        <h2 className="text-lg font-semibold">Información del Proyecto</h2>
        <p>Utiliza los botones para enviar comandos básicos al robot.</p>
        <p>
          Para más detalles, visita nuestro{" "}
          <a
            href="https://github.com/zepyroth3411/Proyecto-genesis.git"
            target="_blank"
            className="text-yellow-400 hover:underline"
          > repositorio en GitHub
          </a>
          .
        </p>
      </footer>
    );
  }
  