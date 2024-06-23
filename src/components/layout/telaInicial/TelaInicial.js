import Image from '../../../assets/images/login.png'
import './TelaInicial.css'
function TelaInicial(props) {
    return (
            <>
            <div className='container-image'>
            <h1>Lista de usuários</h1>
            <img src={Image} alt="imagem de login" />
        </div><div className='container-login'>
                {props.children}
            </div>
            </>
    )
}

export default TelaInicial;