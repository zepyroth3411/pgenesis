import Navbar from "@/components/Navbar";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="p-8 bg-gray-50 min-h-screen">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Acerca de Nosotros
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Viñeta del mapa */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="justify-center text-xl font-bold text-gray-800 mb-4">Ubicación</h2>
            <div className="overflow-hidden rounded-lg border border-gray-300">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.266220989423!2d-106.1239878!3d28.6517464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86ea42e861ed5469%3A0x798b9fb0cb1a7754!2sLivingLab%20CUU!5e0!3m2!1ses!2smx!4v1736985465989!5m2!1ses!2smx"
                width="100%"
                height="445"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg shadow-sm"
              ></iframe>
            </div>
          </div>

          {/* Viñeta del formulario con redes sociales */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Contáctanos</h2>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium"
                >
                  Nombre:
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 placeholder-gray-500"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium"
                >
                  Correo electrónico:
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 placeholder-gray-500"
                  placeholder="Tu correo"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium"
                >
                  Mensaje:
                </label>
                <textarea
                  id="message"
                  rows="3"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 placeholder-gray-500"
                  placeholder="Tu mensaje"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors w-full"
              >
                Enviar
              </button>
            </form>

            {/* Redes sociales */}
            <div className="mt-6 text-center">
              <h3 className="text-gray-700 font-medium mb-4">
                También puedes seguirnos en:
              </h3>
              <div className="flex justify-center gap-4 text-2xl text-gray-600">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600"
                >
                  <i className="fab fa-facebook"></i>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-500"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
