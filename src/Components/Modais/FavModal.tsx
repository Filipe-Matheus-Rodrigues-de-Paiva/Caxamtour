import { useContext } from "react";
import { StyledModal } from "./FavModalStyle";
import { DashBoardContext } from "../../Contexts/DashboardContext";

export default function FavModal () {
    const { setModal } = useContext(DashBoardContext)

    return (
        <StyledModal role="dialog">
            <div>
                <span onClick={() => setModal(false)}>X</span>
                <h1>Favoritos</h1>
            </div>
        </StyledModal>
    )
}