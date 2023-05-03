/* Contexto para funções e estados da página de cadastro */
import {createContext} from "react"
import { api } from "../Services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";



interface IChildren {
    children: React.ReactNode;
}

interface IRegisterContext {
registerUserRequest: (formData: IRegisterUserData) => Promise<void>
}

export interface IRegisterUserData {
    name: string
    email: string
    city: string
    password: string
    confirm:string
    }
export interface IRegisterResponse{
    user: IRegisterUserData
    acessToken:string
}

export const RegisterContext = createContext({} as IRegisterContext)

export const RegisterProvider = ({ children }: IChildren ) => {
    const navigate=useNavigate()
    
    const registerUserRequest=async(formData:IRegisterUserData)=>{
    try {
        await api.post<IRegisterResponse>("/users", formData)
        toast.success("Cadastro realizado com sucesso!", {
            autoClose: 2000
        })

        setTimeout(() => {
            navigate("/")
        }, 2000)

    } catch (error) {
        toast.error("Erro no cadastro", {
            autoClose: 2000
        })
    }

    }
    
    return (
        <RegisterContext.Provider value={{registerUserRequest}}>
            { children }
        </RegisterContext.Provider>
    )
}