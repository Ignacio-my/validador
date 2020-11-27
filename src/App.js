import logo from './logo.svg';
import './App.css';
import {Button} from '@material-ui/core'
import MiValidador from './MiValidador'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Universidad De Valparaiso</p>
        <p>Contraseña UValpo</p>
      <MiValidador valor = "Ingresar rut sin puntos" />
      </header>
    </div>
  );
}

export default App;
