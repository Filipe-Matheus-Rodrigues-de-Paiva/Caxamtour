import { useContext } from "react";
import { HeaderStyled } from "./HeaderStyle";
import { SlLogout, SlHeart } from "react-icons/sl"
import { DashBoardContext } from "../../Contexts/DashboardContext";
import FavModal from "../Modais/FavModal";
import { LoginContext } from "../../Contexts/LoginContext";

export default function Header () {
    const { modal, setModal } = useContext(DashBoardContext)
    const { user, userLogout } = useContext(LoginContext)
    console.log(user)

    return (
        <HeaderStyled>
            <h1 className="logo">Caxan<span>Tour</span></h1>
            <div>
                <button onClick={() => setModal(true)}>Favoritos <SlHeart /></button>
                <h1>Bem-vindo, {user?.name}</h1>
                <span onClick={userLogout}><SlLogout /></span>
            </div>
            {modal ? (
                <FavModal />
            ) : (
                null
            )}
        </HeaderStyled>
    )
}