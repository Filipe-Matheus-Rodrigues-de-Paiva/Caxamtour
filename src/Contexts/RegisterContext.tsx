/* Contexto para funções e estados da página de cadastro */
import {createContext} from "react"

interface IChildren {
    children: React.ReactNode;
}

interface IRegisterContext {
registerUser:(formData: IRegisterUserData) => Promise<void>
}

export interface IRegisterUserData {
    name: string
    email: string
    city: string
    password: string
    confirm:string
    }


export const RegisterContext = createContext({} as IRegisterContext)

export const RegisterProvider = ({ children }: IChildren ) => {
const registerUser=async(formData:IRegisterUserData)=>{

}
    return (
        <RegisterContext.Provider value={{registerUser}}>
            { children }
        </RegisterContext.Provider>
    )
}