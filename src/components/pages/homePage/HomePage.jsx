import UserLine from "./UserLine.jsx";
import "../../css/HomePage.css";
import { FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="container-body">
      <div className="container-header">
        <h1>Bem vindo(a) {}</h1>
        <Link className="button-novo" to={"/NovoUser"}>
          <button className="button-novo">
            Novo <FaUserPlus />
          </button>
        </Link>
      </div>

      <div>
        <h1>Usuarios</h1>
        <UserLine />
      </div>
    </div>
  );
}

export default HomePage;
