import  { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../../css/NovoUser.css";

function NovoUser() {
  const [formData, setFormData] = useState({ nome: "", email: "", senha: "" });
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const addUsuario = async (e) => {
    e.preventDefault();
    const { nome, email, senha } = formData;
    try {
      await axios.post("http://localhost:3001/usuarios", {
        nome,
        email,
        senha,
      });
      navigator.navigate("/HomePage");
    } catch (error) {
      console.error("Error inserting user:", error);
      setMessage(
        "No momento não foi possível cadastrar o usuário. Tente novamente mais tarde."
      );
    }
  };

  return (
    <div className="container-principal container-editar">
      <form onSubmit={addUsuario} className="container-form-login">
        <h1>Novo usuário</h1>
        <div className="div-input">
          <div className="container-input">
            <input
              type="text"
              placeholder="Digite o nome"
              value={formData.nome}
              onChange={handleInputChange}
              name="nome"
            />
          </div>
          <div className="container-input">
            <input
              type="email"
              placeholder="Digite o e-mail"
              value={formData.email}
              onChange={handleInputChange}
              name="email"
            />
          </div>
          <div className="container-input">
            <input
              type="password"
              placeholder="Digite a senha"
              value={formData.senha}
              onChange={handleInputChange}
              name="senha"
            />
          </div>
        </div>
        <button type="submit">Cadastrar</button>
        <Link to="/HomePage">
          <button className="button-cadastro">Voltar</button>
        </Link>
        {message && <p className="messagem-erro">{message}</p>}
      </form>
    </div>
  );
}

export default NovoUser;
