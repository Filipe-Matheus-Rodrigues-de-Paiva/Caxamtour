/* Contexto para funções e estados da página de cadastro */

import { createContext } from "react";

interface IChildren {
    children: React.ReactNode;
}

interface IRegisterContext {

}

export const RegisterContext = createContext({} as IRegisterContext)

export const RegisterProvider = ({ children }: IChildren ) => {

    return (
        <RegisterContext.Provider value={{}}>
            { children }
        </RegisterContext.Provider>
    )
}