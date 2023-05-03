import { useContext } from "react";
import { HeaderStyled } from "./HeaderStyle";
import { SlLogout, SlHeart } from "react-icons/sl"
import { useNavigate } from "react-router-dom";
import { DashBoardContext } from "../../Contexts/DashboardContext";
import FavModal from "../Modais/FavModal";

export default function Header () {
    const navigate = useNavigate()
    const { modal, setModal } = useContext(DashBoardContext)

    const logOut = () => {
        localStorage.clear()
        navigate('/')
    }

    return (
        <HeaderStyled>
            <h1>Caxan<span>Tour</span></h1>
            <div>
                <button onClick={() => setModal(true)}>Favoritos <SlHeart /></button>
                <h1>Bem-vindo, Filipe</h1>
                <span onClick={logOut}><SlLogout /></span>
            </div>
            {modal ? (
                <FavModal />
            ) : (
                null
            )}
        </HeaderStyled>
    )
}