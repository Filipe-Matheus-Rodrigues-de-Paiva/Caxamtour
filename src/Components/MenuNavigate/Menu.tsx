import { useContext } from "react"
import { DashBoardContext } from "../../Contexts/DashboardContext"
import { StyledMenuNavigation } from "./StyledMenu"

export default function Menu () {
    const { selectedFilter, setSelectedFilter } = useContext(DashBoardContext)

    return (
        <StyledMenuNavigation>
            <h1>{selectedFilter}</h1>
            <button onClick={() => setSelectedFilter("Feed")}>Feed</button>
            <button onClick={() => setSelectedFilter("Hotéis")}>Hotéis</button>
            <button onClick={() => setSelectedFilter("Restaurantes")}>Restaurantes</button>
            <button onClick={() => setSelectedFilter("Eventos")}>Eventos</button>
        </StyledMenuNavigation>
    )
}