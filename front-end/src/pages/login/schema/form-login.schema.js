import * as z from "zod";

export const formLoginSchema = z.object({
  email: z
    .email("formato invalido")
    .nonempty("este campo no puede estar vacio"),
  contraseña: z
    .string("rellene este campo")
    .nonempty("este campo no puede estar vacio"),
});
