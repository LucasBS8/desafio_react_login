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
      {usuarios.map((usuario) => (
        <li key={usuario.id}>
          <UserLine
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
