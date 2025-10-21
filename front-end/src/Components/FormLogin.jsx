import { useState } from "react";
import { Link } from "wouter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";
import Input from "./Input";
export default function FormLogin() {
  return (
    <form className="flex flex-col gap-3" action="submit">
      <h2 className="text-4xl text-gray-600 font-bold text-center">
        Inicia sesión
      </h2>
      <Input texto="Email" icono={faUser}></Input>
      <Input texto="Password" tipo="password" icono={faLock}></Input>

      <div>
        <input
          type="checkbox"
          name="recordarContraseña"
          id="recordarContraseña"
        />
        <label htmlFor="recorderContraseña"> Recordar contraseña</label>
      </div>

      <Link>Olvidaste tu contraseña ? </Link>

      <button
        className="rounded-[25px] bg-radial from-violet-500 from-40% to-violet-800 p-3 w-[100%] text-white font-bold hover:from-violet-600 fom-40% to hover:violet-1000 cursor-pointer"
        type="submit"
      >
        Inicia Sesión
      </button>

      <p>O inicia sesión con otra plataforma</p>
      <div className="flex items-center justify-center">
        <FontAwesomeIcon
          icon={faGoogle}
          size="2x"
          className="text-red-500 cursor-pointer hover:opacity-80"
        />
        <FontAwesomeIcon
          icon={faFacebook}
          size="2x"
          className="text-blue-600 cursor-pointer hover:opacity-80"
        />
      </div>
    </form>
  );
}
