import Navbar from "@/components/Navbar";

export default function Documentation() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-100 p-8">
        <h1 className="text-3xl font-bold text-center">Documentación</h1>
        <p className="text-center mt-4">
          Aquí encontrarás guías y recursos técnicos sobre el proyecto.
        </p>
      </main>
    </>
  );
}