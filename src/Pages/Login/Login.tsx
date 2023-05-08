import { useNavigate } from "react-router-dom";
import { LoginForm } from "../../Components/LoginForm";
import { Conteiner, ConteinerImg, StyledHeaderLogin, StyledLogin } from "./styledUser";
import caxamtourLogin from "../../assets/images/loginCaxamTour.jpg"

export default function LoginPage () {

    const navigate = useNavigate()

    return (
        <>
            <StyledHeaderLogin>
                <h1>Caxan<span>Tour</span></h1>
            </StyledHeaderLogin>
            <Conteiner>
                <ConteinerImg>
                   <img src={caxamtourLogin}/>
                </ConteinerImg>
                <StyledLogin>
                    <LoginForm/>
                    <div className="divButton">
                        <p>ou</p>
                        <button onClick={() => navigate('/register')}>Cadastre-se</button>
                    </div>
                </StyledLogin>
            </Conteiner>
        </>
    )
}