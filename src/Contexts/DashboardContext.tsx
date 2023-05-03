/* Contexto para funções e estados da dashboard */
import { createContext, useState } from "react";

interface IChildren {
    children: React.ReactNode;
}

interface IDashboardContext {
    modal: boolean
    setModal: React.Dispatch<React.SetStateAction<boolean>>
}

export const DashBoardContext = createContext({} as IDashboardContext)

export const DashBoardProvider = ({children}: IChildren) => {

    const [modal, setModal] = useState(false)


    return (
        <DashBoardContext.Provider value={{modal, setModal}}>
            {children}
        </DashBoardContext.Provider>
    )
}