import "../../css/UserLine.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

function UserLine({index, id, nome, email, senha }) {
  const navigate = useNavigate();

  const handleEditar = () => {
    const usuario = { id, nome, email, senha };
    navigate("/EditarUser", { state: { usuario } });
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:3001/usuarios/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        window.location.reload();
      } else {
        console.error("Erro ao excluir usuário");
      }
    } catch (error) {
      console.error("Erro ao excluir usuário: ", error);
    }
  };

  return (
    <div className="container-line">
      <div className="container-dados">
        <div className="container-id">{index}</div>
        <div className="container-valor-id">{id}</div>
        <div className="container-valor">{nome}</div>
        <div className="container-valor">{email}</div>
        <div className="container-valor">{senha}</div>
      </div>
      <div className="container-buttons">
        <button onClick={handleEditar} className="button-editar">
          Editar
        </button>

        <Popup
          trigger={<button className="button-excluir">Excluir</button>}
          modal
          nested
        >
          {(close) => (
            <div className="modal">
              <h1 className="content">Excluir usuário</h1>
              <p>
                Tem certeza de excluir esse usuário? ao confirmar não poderá ser
                desfeito.
              </p>
              <div className="container-button">
                <button
                  className="button-popup-cancelar"
                  onClick={() => close()}
                >
                  Cancelar
                </button>
                <button
                  className="button-popup-excluir"
                  onClick={() => {
                    handleDelete();
                    close();
                  }}
                >
                  Excluir
                </button>
              </div>
            </div>
          )}
        </Popup>
      </div>
    </div>
  );
}

UserLine.propTypes = {
  index: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  nome: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  senha: PropTypes.string.isRequired,
};

export default UserLine;
