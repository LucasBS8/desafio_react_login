import "../../css/HomePage.css";
import { FaUserPlus } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import Lista from "./Lista.jsx";

const HomePage = () => {
  const location = useLocation();
  const usuario = location.state?.usuario;

  return (
    <div className="container-body">
      <div className="container-header">
        <h1>Bem vindo(a) {usuario.nome}</h1>
        <Link className="button-novo" to={"/NovoUser"}>
          <button className="button-novo">
            Novo <FaUserPlus />
          </button>
        </Link>
      </div>

      <div>
        <h1>Usuários</h1>
        <Lista />
        
      </div>
    </div>
  );
};

HomePage.propTypes = {
  usuario: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      nome: PropTypes.string,
      email: PropTypes.string,
      senha: PropTypes.string,
    }),
  ]),
};

export default HomePage;
