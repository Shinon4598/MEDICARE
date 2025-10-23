import { useState } from "react";
import FormLogin from "./components/FormLogin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import FormRegister from "./components/FormRegister";

export default function Login() {
  const [changeView, setChangeView] = useState(false);
  const [animated, setAnimated] = useState(false);

  const handleAnimation = () => {
    setAnimated(true);

    setTimeout(() => {
      setAnimated(false);
      setChangeView(!changeView);
    }, 500);
  };

  return (
    <section
      className={`flex justify-center items-center  h-[80vh] gap-20 lg:w-[85vw] md:w-full  m-auto shadow-xl/30 relative loginContainer duration-400 ease-linear ${
        changeView ? "registerContainer" : "loginContainer"
      }`}
    >
      <section className="flex items-center h-[100%] w-[100%] ">
        <FormRegister />
      </section>
      <section
        className={`bg-violet-500 w-[67%] z-1 left-0  flex flex-col justify-center items-center absolute duration-500 ease-linear  p-2 h-[100%] ${
          changeView ? "registerBanner" : "loginBanner"
        } ${animated && "expand"}`}
      >
        <div>
          <h1 className="text-5xl text-white font-bold">Bienvenido a Medicare!</h1>
          <p className="text-2xl text-gray-200">
            {changeView ? "Registrate" : "Inicia sesión"} para acceder al sistema de turnos
          </p>
          <p className="text-2xl text-gray-200 py-2">
            {changeView ? "Ya tienes una cuenta?" : "No tienes una cuenta?"}
          </p>
          <button
            className="py-3 px-15 bg-fuchsia-500 cursor-pointer rounded text-white text-xl hover:bg-fuchsia-600 hover:scale-[0.96] "
            type="button"
            onClick={handleAnimation}
          >
            {changeView ? "Inicia Sesión" : "Registrate"}
          </button>
        </div>
      </section>
      <section className="flex justify-end items-center w-full">
        <FormLogin />
      </section>
      <button>
        <FontAwesomeIcon
          icon={faXmark}
          size="2x"
          className="text-fuchsia-800 cursor-pointer hover:opacity-80 z-2 absolute top-[10px] right-[0px]"
        />
      </button>
    </section>
  );
}
