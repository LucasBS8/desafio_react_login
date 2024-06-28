import UserLine from "./UserLine.jsx";
import "../css/HomePage.css";

function HomePage() {
  return (
    <>
      <div className="container-footer">
        <h1>Bem vindo(a) {}</h1>
        <button className="button-novo">Novo usuario</button>
      </div>

      <div>
        <h1>Usuarios</h1>
        <UserLine />
      </div>
    </>
  );
}

export default HomePage;
