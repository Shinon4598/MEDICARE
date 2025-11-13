import React from "react";
import { Link } from "wouter";
import { Calendar } from "lucide-react";

function Navbar() {
  return (
    <>
      <div>
        {/* Navbar */}
        <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between fixed w-full top-0 z-50">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">M</span>
            </div>
            <h1 className="text-2xl font-bold text-violet-600">Medicare</h1>
          </div>

          <ul className="flex items-center gap-6">
            <li>
              <a
                href="#turnos"
                className="text-gray-700 hover:text-violet-600 font-semibold transition-colors"
              >
                Inicio
              </a>
            </li>
            <li>
              <button
                onClick={() => alert("Ir a turnos")}
                className="flex items-center gap-2 bg-fuchsia-500 hover:bg-fuchsia-600 text-white px-5 py-2 rounded-lg font-semibold transition-all transform hover:scale-105"
              >
                <Calendar size={20} />
                Turnos
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
