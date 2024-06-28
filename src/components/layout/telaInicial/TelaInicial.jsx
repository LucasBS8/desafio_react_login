import Image from '../../../assets/images/login.png'
import '../../css/TelaInicial.css';
import props from 'prop-types';

function TelaInicial(props) {
    return (
        <div className='App'>
            <div className='container-image'>
                <h1>Lista de usuários</h1>
                <img src={Image} alt="imagem de login" />
            </div>
            <div className='container-login'>
                {props.children}
            </div>
        </div>
    )
}

TelaInicial.propTypes = {
    children: props.node
}


export default TelaInicial;