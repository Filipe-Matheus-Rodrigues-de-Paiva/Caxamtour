import { z } from "zod";

export const loginFormSchema = z.object({
    email: z.string().nonempty("O e-mail é obrigatorio"),
    password: z.string().nonempty("A senha é obrigatoria")
})

export type ILoginFormData = z.infer<typeof loginFormSchema>