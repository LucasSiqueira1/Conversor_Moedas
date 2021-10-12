import logo from './logo.svg';
import './App.css';

//componentes
import Conversor from './components/Conversor';

function App() {
  return (
    <div className="App">    
    <h1 className="titulo">Conversor de Moedas</h1>
    
    <div className="linhas">
      <Conversor moedaA = "USD" moedaB = "BRL"></Conversor>
      <Conversor moedaA = "BRL" moedaB = "USD"></Conversor>
    </div>

    <div className="linhas">
      <Conversor moedaA = "EUR" moedaB = "BRL"></Conversor>
      <Conversor moedaA = "BRL" moedaB = "EUR"></Conversor>
    </div>
    
    </div>
  );
}

export default App;
