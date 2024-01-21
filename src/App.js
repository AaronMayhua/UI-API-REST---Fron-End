
import './App.css';
import NavBar from './componentes/NavBar';
import Inicio from './paginas/Inicio';
import NuevoUsuario from './usuario/addUsuario';
import EditarUsuario from './usuario/UpdateUsuario';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />

        <Routes>
          <Route exact path='/' element={<Inicio />} />
          <Route exact path='/newusuario' element={<NuevoUsuario/>} />
          <Route exact path='/editarusuario/:id_user' element={<EditarUsuario/>} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
