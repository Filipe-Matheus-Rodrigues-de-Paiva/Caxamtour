/* Contexto para funções e estados do login */

import { createContext } from "react";

interface IChildren {
    children: React.ReactNode;
}

interface ILoginContext {

}

export const LoginContext = createContext({} as ILoginContext)

export const LoginProvider = ({children}: IChildren) => {

    return(
        <LoginContext.Provider value={{}}>
            {children}
        </LoginContext.Provider>
    )
}