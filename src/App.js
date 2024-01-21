
import './App.css';
import NavBar from './componentes/NavBar';
import Inicio from './paginas/Inicio';
import NuevoUsuario from './usuario/addUsuario';
import EditarUsuario from './usuario/UpdateUsuario';
import VerUsuario from './usuario/LookUsuario';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar /> { /*Con esto el NavBar se mantiene en todas las paginas o URL*/ }

        <Routes>
          <Route exact path='/' element={<Inicio />} />
          <Route exact path='/verusuario/:id_usuer' element={<VerUsuario/>}/> {/* se coloca el id para que la ruta sepa que buscara por id */ }
          <Route exact path='/newusuario' element={<NuevoUsuario/>} />
          <Route exact path='/editarusuario/:id_usuer' element={<EditarUsuario/>} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
