import { Link } from "react-router-dom";

function EditarUser() {
    return (
      <div className="container-principal">
        <div className="container-form-login">
          <h1>Editar usuário</h1>
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
          <button>Salvar</button>
          <Link to="/HomePage">
            <button className="button-cadastro">Voltar</button>
          </Link>
        </div>
      </div>
    );
}

export default EditarUser;