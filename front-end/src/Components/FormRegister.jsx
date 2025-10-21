import * as z from "zod";
import Select from "./Select";
import Input from "./Input";
import { useForm } from "react-hook-form";
import {
  faUser,
  faLock,
  faFingerprint,
  faAddressCard,
  faPhone,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";
export default function FormRegister() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const validation = z.object({
    nombre: z
      .string()
      .min(3, "Ingrese minimo 3 caracteres")
      .max(30, "El máximo de caracteres es de 30"),
    apellido: z
      .string()
      .min(3, "Ingrese minimo 3 caracteres")
      .max(20, "El máximo de caracteres es de 20"),
    dni: z.coerce
      .number()
      .min(7, "formato invalido")
      .max(8, "formato invalido"),
    celular: z.string().regex(/^\+54\s?9?\s?\d{2}\s?\d{4}\s?\d{4}$/, {
      message: "Formato inválido. Usa el formato +54 9 11 1234 5678",
    }),
    email: z.email({
      error: (iss) =>
        iss.input == undefined ? "El campo es requerido" : "Entrada invalida",
    }),
    obra_social: z.string().nonempty("Seleccione un valor"),
    password: z
      .string()
      .min(8, "Minimo de 8 caracteres")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/,
        "Mínimo 8 caracteres, mayúscula, minúscula, número y símbolo"
      ),
    confirmPassword: z
      .string()
      .refine((v) => v == password, { error: "Las contraseñas no coinciden" }),
  });
  const onSubmit = (data) => console.log(data);
  return (
    <form className="flex flex-col gap-5  p-5" action="submit">
      <h2 className="text-4xl text-gray-600 font-bold text-center">
        Registrate
      </h2>
      <section className="md:grid md:grid-cols-2 md:place-items-center gap-3 flex flex-col justify-center items-center w-full p-2">
        <Input
          texto="Nombre/s"
          name="nombre"
          tipo="text"
          icono={faPerson}
        ></Input>
        <Input
          texto="Apellido"
          name="apellido"
          tipo="text"
          icono={faPerson}
        ></Input>
        <Input
          texto="DNI"
          name="dni"
          tipo="number"
          icono={faFingerprint}
        ></Input>
        <Select
          texto="Obra Social"
          name="obra_social"
          tipo="select"
          icono={faAddressCard}
        >
          <option value="">Obra social / particular</option>
        </Select>
        <Input
          texto="Numero celular"
          name="celular"
          tipo="number"
          icono={faPhone}
        ></Input>
        <Input texto="Email" name="email" icono={faUser}></Input>
        <Input
          texto="Contraseña"
          name="contraseña"
          tipo="password"
          icono={faLock}
        ></Input>
        <Input
          texto="Confirmar contraseña"
          name="confirmar_contraseña"
          tipo="password"
          icono={faLock}
        ></Input>
      </section>

      <button
        className="rounded-[25px] bg-radial from-violet-500 from-40% to-violet-800 p-3 w-[100%] text-white font-bold hover:from-violet-600 fom-40% to hover:violet-1000 cursor-pointer"
        type="submit"
      >
        Registrate
      </button>
    </form>
  );
}
