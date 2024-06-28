import '../../css/Cadastro_Login.css';
import { Link } from 'react-router-dom';
import TelaInicial from '../../layout/telaInicial/TelaInicial';
import { useState } from "react";
import User from "../../../models/User";
import axios from "axios";

function Cadastro() {

        const [formData, setFormData] = useState(new User(null, "", "", ""));
        const [message, setMessage] = useState("");

        const handleInputChange = (e) => {
          const { name, value } = e.target;
          setFormData({ ...formData, [name]: value });
        };

        const handleSubmit = async (e) => {
          e.preventDefault();
          try {
            await axios.post("http://localhost:3000/usuarios", formData);
            setMessage("Usuário cadastrado com sucesso!");
            setFormData(new User(null, "", "", ""));
          } catch (error) {
            setMessage("Erro ao cadastrar usuário.");
            console.error("Erro ao enviar dados:", error);
          }
        };
    return (
      <TelaInicial onSubmit={handleSubmit}>
        <div className="container-form-login">
          <h1>Cadastro</h1>
          <div className="div-input">
            <div className="container-input">
              <input
                type="text"
                placeholder="Digite seu nome"
                value={formData.Nome}
                onChange={handleInputChange}
              />
            </div>
            <div className="container-input">
              <input
                type="email"
                placeholder="Digite seu e-mail"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="container-input">
              <input
                type="password"
                placeholder="Digite sua senha"
                value={formData.senha}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <button type="submit">Cadastrar</button>
          <Link to="/">
            <button className="button-cadastro">Login</button>
          </Link>
          {message && <p>{message}</p>}
        </div>
      </TelaInicial>
    );
}

export default Cadastro;