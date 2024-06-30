import UserLine from "./UserLine";
import { useState, useEffect } from "react";

const Lista = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/usuarios");
        if (!response.ok) {
          throw new Error("Falha na internet. Tente novamente.");
        }
        const responseData = await response.json();
        setUsuarios(responseData.data);
      } catch (error) {
        console.error("Fetch error: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <ul>
      <div className="container-dados">
        <div className="container-id">ID</div>
        <div className="container-valor-id">ID</div>
        <div className="container-valor">Nome</div>
        <div className="container-valor">Email</div>
        <div className="container-valor">Senha</div>
      </div>
      {usuarios.map((usuario, index) => (
        <li key={index}>
          <UserLine
            index={index + 1}
            id={usuario.id}
            nome={usuario.nome}
            email={usuario.email}
            senha={usuario.senha}
          />
        </li>
      ))}
    </ul>
  );
};

export default Lista;
