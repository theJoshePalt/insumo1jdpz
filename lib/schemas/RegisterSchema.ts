import { z } from "zod";

export const RegisterSchema = z
  .object({
    name: z
      .string()
      .min(3, "El nombre debe tener al menos 3 caracteres")
      .nonempty("El nombre es obligatorio"),
    email: z
      .string()
      .email("Debe ser un correo válido")
      .nonempty("El correo es obligatorio"),
    password: z
      .string()
      .min(6, "La contraseña debe tener al menos 6 caracteres")
      .nonempty("La contraseña es obligatoria"),
    confirmPassword: z.string().nonempty("Debes confirmar tu contraseña"),
  })
  // 🔒 Validación personalizada para que las contraseñas coincidan
  .refine((data) => data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"],
  });

export type RegisterData = z.infer<typeof RegisterSchema>;
