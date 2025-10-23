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

import Select from "@/shared/Components/Select";
import Input from "@/shared/Components/Input";
import Button from "@/shared/Components/Button";
import { formRegisterSchema } from "../schema";
export default function FormRegister() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formRegisterSchema),
  });

  const onSubmit = data => console.log(data);

  return (
    <form className="flex flex-col gap-5  p-5" action="submit" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-4xl text-gray-600 font-bold text-center">Registrate</h2>
      <section className="md:grid md:grid-cols-2 md:items-start gap-5 flex flex-col justify-center items-center w-full p-2">
        <Input
          label="Nombre/s"
          name="nombre"
          tipo="text"
          icono={faPerson}
          register={register}
          error={errors?.nombre?.message}
        />
        <Input
          label="Apellido"
          name="apellido"
          tipo="text"
          icono={faPerson}
          register={register}
          error={errors?.apellido?.message}
        />

        <Input
          label="DNI"
          name="dni"
          tipo="number"
          icono={faFingerprint}
          register={register}
          error={errors?.dni?.message}
        />

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
          tipo="string"
          icono={faPhone}
          register={register}
          error={errors?.celular?.message}
        />

        <Input
          label="Email"
          name="email"
          icono={faUser}
          register={register}
          error={errors?.email?.message}
        />

        <Input
          label="Contraseña"
          name="contraseña"
          tipo="password"
          icono={faLock}
          register={register}
          error={errors?.contraseña?.message}
        />

        <Input
          label="Confirmar contraseña"
          name="confirmar_contraseña"
          tipo="password"
          icono={faLock}
          register={register}
          error={errors?.confirmar_contraseña?.message}
        />
      </section>

      <Button texto="Registrate" />
    </form>
  );
}
