/* Contexto para funções e estados do login */

import { createContext, useEffect, useState } from "react";
import { api } from "../Services/api";
import { ILoginFormData } from "../Components/LoginForm/loginFormSchema";
import { useNavigate } from "react-router-dom";

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
    user: IUser | null;
    userLogin: (formData: ILoginFormData) => Promise<void>
    userLogout: () => void
}

export const LoginContext = createContext({} as ILoginContext)

export const LoginProvider = ({children}: IChildren) => {

    const [user, setUser] = useState <IUser | null>(null)
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
            const { data } = await api.post<IUserLoginResponse>("/login", formData)

            const token = data.accessToken;
            const idUser = JSON.stringify(data.user.id)
            
            localStorage.setItem("@TOKEN", token)
            localStorage.setItem("IDUSER", idUser)
            
            setUser(data.user)
            navigate("/dashboard")

        } catch (error) {
            console.log(error)
        }
    }

    const userLogout = () =>{
        setUser(null)
        localStorage.clear()
        navigate("/")
    }

    return(
        <LoginContext.Provider value={{user, userLogin, userLogout}}>
            {children}
        </LoginContext.Provider>
    )
}