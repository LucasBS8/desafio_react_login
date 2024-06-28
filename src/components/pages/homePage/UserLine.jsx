import '../../css/UserLine.css'
import Popup from "reactjs-popup";
import { Link } from "react-router-dom";
import "reactjs-popup/dist/index.css";
function UserLine () {
        return (
          <div className="container-line">
            <div className="container-dados">
              <div className="container-id">id</div> <div>nome</div>{" "}
              <div>email</div>
            </div>
            <div className="container-buttons">
              <Link to={"/EditarUser"}>
                <button className="button-editar">Editar</button>
              </Link>

              <Popup
                trigger={<button className="button-excluir">Excluir</button>}
                modal
                nested
              >
                {(close) => (
                  <div className="modal">
                    <h1 className="content">Excluir usuário</h1>
                    <p>
                      Tem certeza de excluir esse usuário? ao confirmar não
                      poderá ser desfeito.
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
                        onClick={() => close()}
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

export default UserLine