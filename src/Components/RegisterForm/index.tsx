import { InputRegister } from "../InputRegister/Index";
import{ SubmitHandler,useForm } from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import { useContext } from "react";
import { RegisterContext,IRegisterUserData } from "../../Contexts/RegisterContext";
import { StyledHeaderRegister, StyledRegister } from "../../Pages/Register/styleRegister";
import { useNavigate } from "react-router";
import { schemaRegisterValidation } from "../../Pages/Register/RegisterSchema";
StyledRegister

export const RegisterForm = () => {
const {registerUserRequest}=useContext(RegisterContext)
const {register,handleSubmit,formState:{errors}}=useForm<IRegisterUserData>({
    resolver:zodResolver(schemaRegisterValidation)
})
const handleRegister:SubmitHandler<IRegisterUserData>=(formData)=>{
    registerUserRequest(formData)
}

const navigate = useNavigate()
return(
    <>
        <StyledHeaderRegister>
            <h1>Caxan<span>Tour</span></h1>
        </StyledHeaderRegister>
        <StyledRegister>
            <div className="divButton">
                <button onClick={() => navigate('/')}>Voltar</button>
            </div>
            <form onSubmit={handleSubmit(handleRegister)}>
                <InputRegister placeholder="Digite seu nome" type="text" label={"Nome"} register={register("name")} error={errors.name}/>
                <InputRegister placeholder="Digite seu email" type="email" label={"Email"} register={register("email")} error={errors.email}/>
                <InputRegister placeholder="Digite sua cidade" type="text" label={"Cidade"} register={register("city")} error={errors.city}/>
                <InputRegister placeholder="Digite sua senha" type="password" label={"Senha"} register={register("password")} error={errors.password}/>
                <InputRegister placeholder="Confirme sua senha" type="password" label={"Confirme sua Senha"}  register={register("confirm")} error={errors.confirm}/>
                <button>Cadastrar-se</button>
            </form>
        </StyledRegister>
    </>
)
}