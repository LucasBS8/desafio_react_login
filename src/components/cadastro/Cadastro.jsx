import '../css/Cadastro_Login.css';
import { Link } from 'react-router-dom';
import TelaInicial from '../layout/telaInicial/TelaInicial';

function Cadastro() {
    return (

        <TelaInicial >
            <div className="container-form-login">
                <h1>Cadastro</h1>
                <div className='div-input'>
                    <div className="container-input">
                        <input type="text" placeholder="Digite seu nome" />
                    </div>
                    <div className="container-input">
                        <input type="email" placeholder="Digite seu e-mail" />
                    </div>
                    <div className="container-input">
                        <input type="password" placeholder="Digite sua senha" />
                    </div>
                </div>
                <button>
                    Cadastrar
                </button>
                <Link to="/"><button className='button-cadastro'>Login</button></Link>
            </div>
        </TelaInicial>
    )
}

export default Cadastro;