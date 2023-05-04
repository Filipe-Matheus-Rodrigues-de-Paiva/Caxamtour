/* Contexto para funções e estados da dashboard */
import { createContext, useState } from "react";

interface IChildren {
    children: React.ReactNode;
}

interface IDashboardContext {
    modal: boolean
    setModal: React.Dispatch<React.SetStateAction<boolean>>
    selectedFilter: string
    setSelectedFilter: any
}

export const DashBoardContext = createContext({} as IDashboardContext)

export const DashBoardProvider = ({children}: IChildren) => {

    const [modal, setModal] = useState(false)
    const [selectedFilter, setSelectedFilter] = useState("Feed")


    return (
        <DashBoardContext.Provider value={{modal, setModal, selectedFilter, setSelectedFilter}}>
            {children}
        </DashBoardContext.Provider>
    )
}