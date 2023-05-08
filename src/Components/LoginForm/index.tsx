import InputLogin from "../InputLogin"
import { useForm, SubmitHandler } from "react-hook-form";
import { ILoginFormData, loginFormSchema } from "./loginFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { LoginContext } from "../../Contexts/LoginContext";
import { StyledFormLogin, StyledHeaderLogin, StyledLogin } from "../../Pages/Login/styledUser";
import { useNavigate } from "react-router-dom";


export const LoginForm = () =>{

    const navigate = useNavigate()

    const { userLogin, isloading } = useContext(LoginContext)
    const{
        register, 
        handleSubmit,
        formState: { errors },
    } = useForm<ILoginFormData>({resolver: zodResolver(loginFormSchema)})

    const submit: SubmitHandler<ILoginFormData> = (formData) => {
        userLogin(formData);
    };

    return(
        <>

                <StyledFormLogin onSubmit={handleSubmit(submit)}>
                    <InputLogin
                        id="email"
                        label="Email"
                        type="email"
                        placeholder="Digite seu email"
                        {...register("email")}
                        error={errors.email}
                    />
                    <InputLogin
                        id="password"
                        label="Senha"
                        type="password"
                        placeholder="Digite sua senha"
                        {...register("password")}
                        error={errors.password}
                    />
                <button type="submit" disabled={isloading}>{isloading ? "Carregando..." : "Entrar"}</button>
                </StyledFormLogin>

        </>
    )
}