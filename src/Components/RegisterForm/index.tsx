import { InputRegister } from "../InputRegister/Index";
import{ SubmitHandler,useForm } from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { RegisterContext,IRegisterUserData } from "../../Contexts/RegisterContext";
import { z } from "zod"

const schemaRegisterValidation= z.object({
    name:z.string().min(1,"O nome é obtigatório"),
    email: z.string().min(1,"O e-mail é obtigatório"),
    city:   z.string().min(1,"A cidade é obtigatória"),
    password: z.string().min(7, { message: "A senha é obrigatória e precisa de mínimo 7 caracteres"})
    .regex(/(?=.*?[#?!@$%^&*-])/, "É necessário pelo menos um caractere especial")
    .regex(/(?=.*?[A-Z])/, "É necessário ao menos uma letra maiúscula")
    .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número"),
  confirm: z.string().min(1, "A confirmação de senha é obrigatória")
}).refine(({password, confirm}) => password === confirm, {
  message: "As senhas precisam corresponderem",
  path: ["confirm"],
})

export const RegisterForm=()=>{
const {registerUser}=useContext(RegisterContext)
const {register,handleSubmit,formState:{errors}}=useForm<IRegisterUserData>({
    resolver:zodResolver(schemaRegisterValidation)
})
const handleRegister:SubmitHandler<IRegisterUserData>=(formData)=>{
    registerUser(formData)

}
return(
    <div>
    <header>
        <img src="src/assets/images/CaxamTour.svg" alt="" />
        <button>Voltar</button>
    </header>
    <form onSubmit={handleSubmit(handleRegister)}>
       <InputRegister Id="name"  id="name" type="text" register={register("name")} error={errors.name}/>
       <InputRegister Id="email"  id="email" type="email" register={register("email")} error={errors.email}/>
       <InputRegister Id="password"  id="name" type="password" register={register("password")} error={errors.password}/>
       <InputRegister Id="confirm"  id="confirm" type="password" register={register("confirm")} error={errors.confirm}/>
       <button>Cadastrar-se</button>

    </form>
    </div>
)
}