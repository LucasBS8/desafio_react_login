import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

function EditarUser() {
  const location = useLocation();
  const usuario = location.state?.usuario || {};
  const [nome, setNome] = useState(usuario.nome || "");
  const [email, setEmail] = useState(usuario.email || "");
  const [senha, setSenha] = useState(usuario.senha || "");
  const navigate = useNavigate();

  const handleSave = async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/usuarios/${usuario.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ nome, email, senha }),
        }
      );
      if (response.ok) {
        navigate("/HomePage");
      } else {
        console.error("Erro ao atualizar usuário");
      }
    } catch (error) {
      console.error("Erro ao salvar usuário: ", error);
    }
  };

  return (
    <div className="container-principal">
      <div className="container-form-login">
        <h1>Editar usuário</h1>
        <div className="div-input">
          <div className="container-input">
            <input
              type="text"
              placeholder="Digite o nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>
          <div className="container-input">
            <input
              type="email"
              placeholder="Digite o e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="container-input">
            <input
              type="password"
              placeholder="Digite a senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>
        </div>
        <button onClick={handleSave}>Salvar</button>
        <Link to={"/HomePage"}>
          <button className="button-cadastro">Voltar</button>
        </Link>
      </div>
    </div>
  );
}

export default EditarUser;
