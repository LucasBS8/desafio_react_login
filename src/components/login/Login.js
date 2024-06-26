import './Login.css';
import { Link } from 'react-router-dom';


function Login() {
    return(
        <div className="container-form-login">
            <h1>Login</h1>
            <div className="container-input">
<input type="email" placeholder="Digite seu e-mail" />
            </div>
            <div className="container-input">
<input type="password" placeholder="Digite sua senha" />
            </div>
            <a href="#">Esqueci a senha</a>
            <button>
                Entrar
            </button>
            <button className='button-cadastro'><Link to={"/App/Cadastro"}> Cadastrar</Link></button>

        </div>
    )
}

export default Login;