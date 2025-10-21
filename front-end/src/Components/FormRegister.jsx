import { Link } from "wouter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLock,
  faFingerprint,
  faAddressCard,
  faFaceSmile,
  faPhone,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";
import Input from "./Input";
export default function FormRegister() {
  return (
    <form className="flex flex-col gap-5  p-5" action="submit">
      <h2 className="text-4xl text-gray-600 font-bold text-center">
        Registrate
      </h2>
      <section className="md:grid md:grid-cols-2 md:place-items-center gap-3 flex flex-col justify-center items-center w-full p-2">
        <Input texto="Nombre/s" tipo="text" icono={faPerson}></Input>
        <Input texto="Apellido" tipo="text" icono={faPerson}></Input>
        <Input texto="DNI" tipo="number" icono={faFingerprint}></Input>
        <Input texto="Obra Social" tipo="select" icono={faAddressCard}></Input>
        <Input texto="Numero celular" tipo="number" icono={faPhone}></Input>
        <Input texto="Email" icono={faUser}></Input>
        <Input texto="Contraseña" tipo="password" icono={faLock}></Input>
        <Input
          texto="Confirmar contraseña"
          tipo="password"
          icono={faLock}
        ></Input>
      </section>

      <button
        className="rounded-[25px] bg-radial from-violet-500 from-40% to-violet-800 p-3 w-[100%] text-white font-bold hover:from-violet-600 fom-40% to hover:violet-1000 cursor-pointer"
        type="submit"
      >
        Inicia Sesión
      </button>
    </form>
  );
}
