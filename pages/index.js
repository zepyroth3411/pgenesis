import Image from "next/image";
import localFont from "next/font/local";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useState, useEffect } from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = (totalScroll / windowHeight) * 100;
      setScrollProgress(scroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Indicador de Progreso */}
      <div
        className="fixed top-0 left-0 h-1 bg-blue-500 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      ></div>

      <main className="flex-grow">
        {/* Video Promocional */}
        <section className="relative bg-gray-100 text-gray-800">
          <div className="max-w-4xl mx-auto px-6 py-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="aspect-video w-full overflow-hidden rounded-lg shadow-lg"
            >
              <iframe
                src="https://www.youtube.com/embed/63bX5Mr9MyE?autoplay=1&mute=1&t=30s"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="w-full h-full object-cover"
              ></iframe>
            </motion.div>
            <h1 className="text-2xl font-semibold text-center mt-6">Proyecto Génesis</h1>
            <p className="text-center mt-2 text-gray-500">
              Una plataforma para el control remoto de robots desde tu navegador.
            </p>
          </div>
        </section>

        {/* Viñeta de Objetivo */}
        <section className="max-w-6xl mx-auto px-6 py-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gray-50 p-6 rounded-lg shadow-md flex flex-col md:flex-row gap-6"
          >
            <div className="md:w-1/2">
              <h2 className="text-xl font-medium mb-4 text-gray-800">Nuestro Objetivo</h2>
              <p className="text-justify text-gray-600 leading-relaxed">
                Mostrar cómo la tecnología puede superar barreras físicas mediante el control remoto de dispositivos complejos.
                Este proyecto destaca la importancia de la comunicación cliente-servidor,
                integrando interfaces web intuitivas con soluciones tecnológicas avanzadas para abordar desafíos reales.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center items-center">
              <Image
                src="/images/rob1.gif"
                alt="Robot trabajando"
                width={200}
                height={200}
                className="rounded-lg shadow-md"
                unoptimized
              />
            </div>
          </motion.div>
        </section>

        {/* Viñeta de Origen */}
        <section className="max-w-6xl mx-auto px-6 py-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gray-50 p-6 rounded-lg shadow-md flex flex-col md:flex-row gap-6"
          >
            <div className="md:w-1/2 flex justify-center items-center">
              <Image
                src="/images/armrobotic.gif"
                alt="Brazo robótico en acción"
                width={200}
                height={200}
                className="rounded-lg shadow-md"
                unoptimized
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-xl font-medium mb-4 text-gray-800">¿Cómo Surge?</h2>
              <p className="text-justify text-gray-600 leading-relaxed">
                Este proyecto nació como un reto universitario para diseñar un sistema innovador de control remoto.
                Utilizando microcontroladores, se logró enviar comandos desde un aula para controlar un brazo robótico en otro espacio,
                demostrando cómo la tecnología supera barreras físicas.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Sección de Impacto Real */}
        <section className="max-w-6xl mx-auto px-6 py-16 text-center bg-gray-50 rounded-lg shadow-md mt-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Impacto Real</h2>
          <p className="text-gray-600 leading-relaxed">
            Gracias a Proyecto Génesis, estudiantes y profesionales han logrado conectar con tecnología de forma remota.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow text-left">
              <p className="text-gray-800">"Un avance increíble en la robótica educativa."</p>
              <span className="block mt-4 text-sm font-medium text-gray-500">- Usuario A</span>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-left">
              <p className="text-gray-800">"Facilita el aprendizaje práctico desde cualquier lugar."</p>
              <span className="block mt-4 text-sm font-medium text-gray-500">- Usuario B</span>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-left">
              <p className="text-gray-800">"Inspirador para nuevos desarrolladores."</p>
              <span className="block mt-4 text-sm font-medium text-gray-500">- Usuario C</span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
