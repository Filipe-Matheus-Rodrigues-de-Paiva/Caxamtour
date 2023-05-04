import { useNavigate } from "react-router-dom";
import { LoginForm } from "../../Components/LoginForm";
import { Conteiner, StyledHeaderLogin, StyledLogin } from "./styledUser";

export default function LoginPage () {

    const navigate = useNavigate()

    return (
        <>
            <StyledHeaderLogin>
                <h1>Caxan<span>Tour</span></h1>
            </StyledHeaderLogin>
            <Conteiner>
                <div>
                    <img src="" alt="" />
                </div>
                <StyledLogin>
                    <LoginForm/>
                    <div className="divButton">
                        <p>ou</p>
                        <button onClick={() => navigate('/register')}>Registere-se</button>
                    </div>
                </StyledLogin>
            </Conteiner>
        </>
    )
}