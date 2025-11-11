import { z } from "zod";

export const LoginSchema = z.object({
  email: z
    .string()
    .email("Debe ser un correo válido")
    .nonempty("El correo es obligatorio"),
  password: z
    .string()
    .min(6, "La contraseña debe tener al menos 6 caracteres")
    .nonempty("La contraseña es obligatoria"),
});

export type LoginData = z.infer<typeof LoginSchema>;
