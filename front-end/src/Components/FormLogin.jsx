import { Link } from "wouter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";
import Input from "./Input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Button from "./Button";

export default function FormLogin() {
  const schema = z.object({
    email: z
      .email("formato invalido")
      .nonempty("este campo no puede estar vacio"),
    contraseña: z
      .string("rellene este campo")
      .nonempty("este campo no puede estar vacio"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form
      className="flex flex-col gap-3"
      action="submit"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="text-4xl text-gray-600 font-bold text-center">
        Inicia sesión
      </h2>
      <Input
        label="Email"
        name="email"
        icono={faUser}
        register={register}
        error={errors?.email?.message}
      ></Input>
      <Input
        label="Contraseña"
        name="contraseña"
        tipo="contraseña"
        icono={faLock}
        register={register}
        error={errors?.contraseña?.message}
      ></Input>

      <div>
        <input
          type="checkbox"
          name="recordarContraseña"
          id="recordarContraseña"
        />
        <label htmlFor="recorderContraseña"> Recordar contraseña</label>
      </div>

      <Link>Olvidaste tu contraseña ? </Link>

      <Button texto="Inicia sesión"></Button>
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
