import * as z from "zod";
import Select from "./Select";
import Input from "./Input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
  const schema = z
    .object({
      nombre: z
        .string("Debe ser una cadena de texto")
        .min(3, "Ingrese minimo 3 caracteres")
        .max(30, "El máximo de caracteres es de 30"),
      apellido: z
        .string("Debe ser una cadena de texto")
        .min(3, "Ingrese minimo 3 caracteres")
        .max(20, "El máximo de caracteres es de 20"),
      dni: z.coerce.number("Debe ser un número").min(7, "minimo 7"),
      celular: z.string().regex(/^\+54\s?9?\s?\d{2}\s?\d{4}\s?\d{4}$/, {
        message: "Formato inválido. Usa el formato +54 9 11 1234 5678",
      }),
      email: z
        .email("formato invalido")
        .nonempty("Este campo no debe estar vacío"),
      obra_social: z
        .string("Debe ser una cadena de texto")
        .refine((value) => value !== "", {
          message: "Debe seleccionar una opción válida",
        }),
      contraseña: z
        .string("Debe ser una cadena de texto")
        .nonempty("Este campo no debe estar vacío")
        .min(8, "Minimo de 8 caracteres")
        .regex(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/,
          "Mínimo 8 caracteres, mayúscula, minúscula, número y símbolo"
        ),
      confirmar_contraseña: z
        .string("Debe ser una cadena de texto")
        .nonempty("Este campo no debe estar vacío"),
    })
    .refine((data) => data.contraseña === data.confirmar_contraseña, {
      message: "Las contraseñas no coinciden",
      path: ["confirmar_contraseña"],
    });
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = (data) => console.log(data);

  return (
    <form
      className="flex flex-col gap-5  p-5"
      action="submit"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="text-4xl text-gray-600 font-bold text-center">
        Registrate
      </h2>
      <section className="md:grid md:grid-cols-2 md:place-items-center gap-3 flex flex-col justify-center items-center w-full p-2">
        <Input
          label="Nombre/s"
          name="nombre"
          tipo="text"
          icono={faPerson}
          register={register}
          error={errors?.nombre?.message}
        ></Input>
        <Input
          label="Apellido"
          name="apellido"
          tipo="text"
          icono={faPerson}
          register={register}
          error={errors?.apellido?.message}
        ></Input>

        <Input
          label="DNI"
          name="dni"
          tipo="number"
          icono={faFingerprint}
          register={register}
          error={errors?.dni?.message}
        ></Input>
        {errors?.dni?.message}

        <Select
          label="Obra Social"
          name="obra_social"
          tipo="select"
          icono={faAddressCard}
          register={register}
          error={errors?.obra_social?.message}
        >
          <option value="">Obra social / particular</option>
          <option value="p">Particular</option>
        </Select>

        <Input
          label="Numero celular"
          name="celular"
          tipo="number"
          icono={faPhone}
          register={register}
          error={errors?.celular?.message}
        ></Input>
        {errors?.celular?.message}

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
          tipo="password"
          icono={faLock}
          register={register}
          error={errors?.contraseña?.message}
        ></Input>
        {errors?.contraseña?.message}

        <Input
          label="Confirmar contraseña"
          name="confirmar_contraseña"
          tipo="password"
          icono={faLock}
          register={register}
          error={errors?.confirmar_contraseña?.message}
        ></Input>
        {errors?.confirmar_contraseña?.message}
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
