import '../css/UserLine.css'
function UserLine () {
        return (
          <div className="container-line">
            <div className="container-dados">
              <div className='container-id'>id</div> <div>nome</div> <div>email</div>
            </div>
            <div className="container-buttons">
              <button className="button-editar">Editar</button>
              <button className="button-excluir">Excluir</button>
            </div>
          </div>
        );
}

export default UserLine