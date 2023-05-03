
import {InputHTMLAttributes} from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";


interface InputRegisterProps extends InputHTMLAttributes<HTMLInputElement>{
   error?:FieldError|undefined;
   type: "text"|"email"|"password";
   register: UseFormRegisterReturn<string>;
   label: "Nome"|"Email"|"Cidade"| "Senha"|"Confirme sua Senha";
   placeholder:"Digite seu nome"|"Digite seu email"|"Digite sua cidade"|"Digite sua senha"|"Confirme sua senha"
}

export const InputRegister=({ type, register, error, label, placeholder} : InputRegisterProps) => {
   return(
    <>
       {label ? <label>{label}</label> : null}
       <input {...register} type={type} placeholder={placeholder}/>
       {error ? <p> {error.message} </p>:null}
    </>
   )
}