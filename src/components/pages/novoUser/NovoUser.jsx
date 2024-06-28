import { Link } from "react-router-dom";

function NovoUser() {
    return (
      <div className="container-principal container-editar">
        <div className="container-form-login">
          <h1>Novo usuário</h1>
          <div className="div-input">
            <div className="container-input">
              <input type="text" placeholder="Digite o nome" />
            </div>
            <div className="container-input">
              <input type="email" placeholder="Digite o e-mail" />
            </div>
            <div className="container-input">
              <input type="password" placeholder="Digite a senha" />
            </div>
          </div>
          <button>Cadastrar</button>
          <Link to="/HomePage">
            <button className="button-cadastro">Voltar</button>
          </Link>
        </div>
      </div>
    );
}

export default NovoUser;