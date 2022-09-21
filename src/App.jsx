
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Inicio from './components/inicio'
import EditarLibro from './components/libros/EditarLibro';
import IngresarLibro from './components/libros/ingresarLibro';
import ListarLibros from './components/libros/ListarLibros';
import RecibirLibro from './components/libros/recibirLibro';
import SolicitarLibro from './components/libros/SolicitarLibro';
import NavbarMenu from './nabvar/NavbarMenu';

import './App.scss'
import Sidebar from './nabvar/Sidebar';
import { LoginScreen } from './components/auth/LoginScreen';
import IngresarUsuario from './components/alumnos/IngresarUsuario';
import ListarUsuarios from './components/alumnos/ListarUsuarios';
import EditarUsuario from './components/alumnos/EditarUsuario';

function App() {
  return (
    <div>
      <Router>
        
        <div className='flex'>
        <Sidebar />
        <div className="content w-100">
        <NavbarMenu />
          <Routes>
            <Route path='/' element={ <Inicio/> } />
            <Route path='listarLibros' element={ <ListarLibros/> } />
            <Route path='ingresarNuevoLibro' element={ <IngresarLibro/> } />
            <Route path='/solicitar/:id' element={ <SolicitarLibro/> } /> 
            <Route path='/editar/:id' element={ <EditarLibro/> } /> 
            <Route path='recibirLibro' element={ <RecibirLibro/> } /> 

            <Route path='listarUsuarios' element={ <ListarUsuarios/> } /> 
            <Route path='ingresarUsuario' element={ <IngresarUsuario/> } /> 
            <Route path='/editarUsuario/:id' element={ <EditarUsuario/> } /> 
            <Route path='login' element={ <LoginScreen/> } /> 
          </Routes>

        </div>
        </div>
      </Router>

      {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={ <NavbarMenu />}>
            <Route index element={ <Inicio/> } />
            <Route path='listarLibros' element={ <ListarLibros/> } />
            <Route path='ingresarNuevoLibro' element={ <IngresarLibro/> } />
            <Route path='solicitar' element={ <SolicitarLibro/> } /> 
            <Route path='/editar/:id' element={ <EditarLibro/> } /> 
            <Route path='recibirLibro' element={ <RecibirLibro/> } /> 
           

            <Route path='*' element={ <Navigate to='/'/> } />

          </Route>
        </Routes>
      </BrowserRouter> */}   
    </div>
  );
}

export default App;
