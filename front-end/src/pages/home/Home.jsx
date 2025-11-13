import { Calendar, ChevronRight } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main */}
      <section className="relative h-screen w-full mt-16">
        {/* Imagen de fondo */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://www.saludiario.com/wp-content/uploads/2018/02/estereotipos_investigacion_especialidades-e1518103429267.jpg')",
          }}
        >
          {/* Overlay oscuro */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent">
            {" "}
          </div>
        </div>

        {/* banner central */}
        <div className="relative h-full flex items-center px-8 md:px-16 lg:px-24">
          <div className="max-w-2xl text-white space-y-6">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Tu salud es nuestra prioridad
            </h2>
            <p className="text-xl md:text-2xl text-gray-200">
              Agendá tu turno con profesionales confiables
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => alert("Ir al panel")}
                className="flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-700 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all transform hover:scale-105 shadow-lg"
              >
                Ir al Panel
                <ChevronRight size={24} />
              </button>

              <button
                onClick={() => alert("Nuestros profesionales")}
                className="flex items-center justify-center gap-2 bg-fuchsia-500 hover:bg-fuchsia-600 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all transform hover:scale-105 shadow-lg"
              >
                Ver lista de profesionales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section adicional */}
      <section className="py-20 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-center text-gray-800 mb-12">
            ¿Por qué elegirnos?
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mb-4">
                <Calendar size={32} className="text-violet-600" />
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-3">Turnos Online</h4>
              <p className="text-gray-600">
                Solicitá y gestioná tus turnos médicos 24/7 desde cualquier dispositivo.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-violet-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-3">Profesionales</h4>
              <p className="text-gray-600">
                Equipo médico altamente calificado y especializado para tu atención.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
