/* Contexto para funções e estados do login */

import { createContext, useEffect, useState } from "react";
import { api } from "../Services/api";
import { ILoginFormData } from "../Components/LoginForm/loginFormSchema";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface IChildren {
    children: React.ReactNode;
}

interface IUser {
    email: string
    password: string
    name: string
    id: number
}

interface IUserLoginResponse {
    accessToken: string
    user: IUser
}

interface ILoginContext {
    user: IUser | null
    userLogin: (formData: ILoginFormData) => Promise<void>
    userLogout: () => void
    isloading: boolean
}

export const LoginContext = createContext({} as ILoginContext)

export const LoginProvider = ({children}: IChildren) => {

    const [user, setUser] = useState <IUser | null>(null)
    const [isloading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    useEffect(()=>{
        const token = localStorage.getItem("@TOKEN")
        const idUser = localStorage.getItem("@IDUSER")

        
        const autoLogin = async () =>{
            try {
               const { data } = await api.get<IUser>(`/users/${idUser}`,{
                headers:{
                    Authorization: `Bearer ${token}`
                }
               })
               
               setUser(data)
               navigate("/dashboard")
            
            } catch (error) {
                localStorage.removeItem("@TOKEN")
                localStorage.removeItem("@IDUSER")
            }
        }

        if (token && idUser){
            autoLogin()
        }
    }, [])

    const userLogin = async(formData: ILoginFormData)=>{
        try {
            setIsLoading(true)
            const { data } = await api.post<IUserLoginResponse>("/login", formData)

            const token = data.accessToken;
            const idUser = JSON.stringify(data.user.id)
            
            localStorage.setItem("@TOKEN", token)
            localStorage.setItem("@IDUSER", idUser)

            toast.success("Login realizado com sucesso", {
                autoClose: 1500
            })
            
            setUser(data.user)
            navigate("/dashboard")

        } catch (error) {
            toast.error("Credenciais inválidas", {
                autoClose: 1500
            })
        } finally {
            setIsLoading(false)
        }
    }

    const userLogout = () =>{
        setUser(null)
        localStorage.clear()
        navigate("/")
    }

    return(
        <LoginContext.Provider value={{user, userLogin, userLogout, isloading}}>
            {children}
        </LoginContext.Provider>
    )
}