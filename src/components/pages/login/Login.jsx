import { Link } from 'react-router-dom';
import TelaInicial from '../../layout/telaInicial/TelaInicial';

function Login() {
    return (

        <TelaInicial>
            <div className="container-form-login">
                <h1>Login</h1>
                <div className="container-input">
                    <input type="email" placeholder="Digite seu e-mail" />
                </div>
                <div className="container-input">
                    <input type="password" placeholder="Digite sua senha" />
                </div>
                <a href="#">Esqueci a senha</a>
                <Link to={"/HomePage"}>
                    <button >
                        Entrar
                    </button>
                </Link>
                <Link to={"/Cadastro"}>
                    <button className='button-cadastro'> Cadastrar</button>
                </Link>

            </div>
        </TelaInicial>

    )
}

export default Login;