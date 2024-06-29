import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../../css/Cadastro_Login.css";
import TelaInicial from "../../layout/telaInicial/TelaInicial";

function Cadastro() {

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
       await axios.post("http://localhost:3001/usuarios", { nome, email, senha,});
      setMessage("Usuário cadastrado com sucesso!");
    } catch (error) {
      console.error("Error inserting user:", error);
      setMessage("No momento não foi possível cadastrar o usuário. Tente novamente mais tarde.");
    }
  };

  return (
    <TelaInicial>
      <form onSubmit={addUsuario} className="container-form-login">
        <h1>Cadastro</h1>
        <div className="div-input">
          <div className="container-input">
            <input
              type="text"
              name="nome"
              placeholder="Digite seu nome"
              value={formData.nome}
              onChange={handleInputChange}
            />
          </div>
          <div className="container-input">
            <input
              type="email"
              name="email"
              placeholder="Digite seu e-mail"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="container-input">
            <input
              type="password"
              name="senha"
              placeholder="Digite sua senha"
              value={formData.senha}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <button type="submit">Cadastrar</button>
        <Link to="/">
          <button type="button" className="button-cadastro">
            Login
          </button>
        </Link>
        <p>{message && <p>{message}</p>}</p>
      </form>
    </TelaInicial>
  );
}

export default Cadastro;
