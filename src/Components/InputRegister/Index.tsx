
import {InputHTMLAttributes} from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";


interface InputRegisterProps extends InputHTMLAttributes<HTMLInputElement>{
   Id:string;
   error?:FieldError|undefined;
   type: "text"|"email"|"password"
   register: UseFormRegisterReturn<string>
}

export const InputRegister=({type,register,Id,error}:InputRegisterProps)=>{
   return(
    <>
    <input id={Id} {...register}/>
    <label htmlFor={Id}></label>
    {error?<p>{error.message}</p>:null}
    </>
   )
}