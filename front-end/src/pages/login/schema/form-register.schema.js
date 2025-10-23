import * as z from "zod";

export const formRegisterSchema = z
  .object({
    nombre: z
      .string("Debe ser una cadena de texto")
      .min(3, "Ingrese minimo 3 caracteres")
      .max(30, "El máximo de caracteres es de 30"),
    apellido: z
      .string("Debe ser una cadena de texto")
      .min(3, "Ingrese minimo 3 caracteres")
      .max(20, "El máximo de caracteres es de 20"),
    dni: z.string().regex(/^\d{7,8}$/, "Debe tener entre 7 y 8 dígitos"),
    celular: z
      .string()
      .trim()
      .regex(/^\+54\s?9?\s?\d{2}\s?\d{4}\s?\d{4}$/, {
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
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
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
