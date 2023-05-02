/* Contexto para funções e estados da dashboard */
import { createContext } from "react";

interface IChildren {
    children: React.ReactNode;
}

interface IDashboardContext {

}

export const DashBoardContext = createContext({} as IDashboardContext)

export const DashBoardProvider = ({children}: IChildren) => {

    return (
        <DashBoardContext.Provider value={{}}>
            {children}
        </DashBoardContext.Provider>
    )
}