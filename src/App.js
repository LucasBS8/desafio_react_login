import './App.css';

import TelaInicial from './components/layout/telaInicial/TelaInicial';
import Login from './components/login/Login';
function App() {
  return (
    <div className="App">

      <TelaInicial>
        <Login />
      </TelaInicial>
    </div>
  );
}

export default App;
