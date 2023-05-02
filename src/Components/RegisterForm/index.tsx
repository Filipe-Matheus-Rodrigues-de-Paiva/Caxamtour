import { InputRegister } from "../InputRegister/Index";
import{ SubmitHandler,useForm } from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { RegisterContext,IRegisterUserData } from "../../Contexts/RegisterContext";
import { z } from "zod"
import { StyledRegister } from "../../Pages/styleRegister";
StyledRegister

const schemaRegisterValidation= z.object({
    name:z.string().min(1,"O nome é obrigatório"),
    email: z.string().min(1,"O e-mail é obrigatório"),
    city:   z.string().min(1,"A cidade é obrigatória"),
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
const {registerUserRequest}=useContext(RegisterContext)
const {register,handleSubmit,formState:{errors}}=useForm<IRegisterUserData>({
    resolver:zodResolver(schemaRegisterValidation)
})
const handleRegister:SubmitHandler<IRegisterUserData>=(formData)=>{
    registerUserRequest(formData)

}
return(
    <StyledRegister>
    <div className="headerAndForm">
    <header>
        <img src="src/assets/images/CaxamTour.svg" alt="CaxamTour logo" />
        <button className="returnButton">Voltar</button>
    </header>
    <form onSubmit={handleSubmit(handleRegister)}>
       <InputRegister Id="name" placeholder="Digite seu nome" id="name" type="text" label={"Nome"} register={register("name")} error={errors.name}/>
       <InputRegister Id="email" placeholder="Digite seu email"  id="email" type="email" label={"Email"} register={register("email")} error={errors.email}/>
        <InputRegister Id="city"  placeholder="Digite sua cidade"id="city" type="text" label={"Cidade"} register={register("city")} error={errors.city}/>
       <InputRegister Id="password" placeholder="Digite sua senha"  id="name" type="password" label={"Senha"} register={register("password")} error={errors.password}/>
       <InputRegister Id="confirm" placeholder="Confirme sua senha"  id="confirm" type="password" label={"Confirme sua Senha"}  register={register("confirm")} error={errors.confirm}/>
       <button className="signUpButton" >Cadastrar-se</button>
    </form>
    </div>
    </StyledRegister>
)
}