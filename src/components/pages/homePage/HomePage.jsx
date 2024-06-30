import "../../css/HomePage.css";
import { FaUserPlus } from "react-icons/fa";
import { Link} from "react-router-dom";
import PropTypes from "prop-types";
import Lista from "./Lista.jsx";

const HomePage = () => {
  const usuarioString = localStorage.getItem("usuario");
  const usuarioObj = JSON.parse(usuarioString);

  const handleLogout = async () => {
    localStorage.removeItem("usuario");

  }
  return (
    <div className="container-body">
      <div className="container-header">
        <h1>Bem vindo(a) {usuarioObj.data.nome}</h1>
        <Link className="button-novo" to={"/NovoUser"}>
          <button className="button-novo">
            Novo <FaUserPlus />
          </button>
        </Link>
      </div>

      <div className="lista-container">
        <h1>Usuários</h1>
        <Lista />
      </div>

      <div className="container-button">
        <Link to={"/"}>
          <button onClick={handleLogout} className="button-logout">
            Logout
          </button>
        </Link>
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
