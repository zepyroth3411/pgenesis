import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CameraView() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow max-w-6xl mx-auto p-4 sm:p-8">
        <section className="bg-white shadow-md rounded-lg p-6">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">Vista de la Cámara</h1>
          <div className="bg-gray-300 w-full h-96 flex items-center justify-center rounded-lg">
            <video
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              controls
              autoPlay
              className="rounded-lg shadow-md"
            ></video>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
