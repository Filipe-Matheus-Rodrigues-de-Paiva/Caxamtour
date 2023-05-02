
import {InputHTMLAttributes} from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";


interface InputRegisterProps extends InputHTMLAttributes<HTMLInputElement>{
   Id:string;
   error?:FieldError|undefined;
   type: "text"|"email"|"password";
   register: UseFormRegisterReturn<string>;
   label: "Nome"|"Email"|"Cidade"| "Senha"|"Confirme sua Senha";
   placeholder:"Digite seu nome"|"Digite seu email"|"Digite sua cidade"|"Digite sua senha"|"Confirme sua senha"
}

export const InputRegister=({type,register,Id,error,label,placeholder}:InputRegisterProps)=>{
   return(
    <>
    {label?<label htmlFor={type}>{label}</label>:null}
    <input id={Id} {...register} placeholder={placeholder}/>
    {error?<p>{error.message}</p>:null}
    </>
   )
}