import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import TelaInicial from "../../layout/telaInicial/TelaInicial";

function Login() {
  const [formData, setFormData] = useState({ email: "", senha: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, senha } = formData;
    try {
      const response = await axios.post("http://localhost:3001/login", {
        email,
        senha,
      });
      const usuario = response.data;
      navigate("/HomePage", { state: { usuario } });
    } catch (error) {
      setMessage("Credenciais inválidas. Verifique seu e-mail e senha.");
    }
  };

  return (
    <TelaInicial>
      <form onSubmit={handleLogin} className="container-form-login">
        <h1>Login</h1>

        <div className="container-input">
          <input
            type="email"
            name="email"
            placeholder="Digite seu e-mail"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="container-input">
          <input
            type="password"
            name="senha"
            placeholder="Digite sua senha"
            value={formData.senha}
            onChange={handleInputChange}
            required
          />
        </div>

        <a href="#">Esqueci a senha</a>
        <button type="submit">Entrar</button>
        <Link to="/Cadastro">
          <button className="button-cadastro">Cadastrar</button>
        </Link>
        <p>{message}</p>
      </form>
    </TelaInicial>
  );
}

export default Login;
