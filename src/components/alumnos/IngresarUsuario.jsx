import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { dataUsuarios } from '../../data/tipoUsuarios';
import { db } from '../../firebase/firebase-config';


const IngresarUsuario = () => {

  const [nombre, setNombre] = useState('');
  const [rut, setRut] = useState('');
  const [ocupacion, setOcupacion] = useState('');
  const [posesion, setPosesion] = useState('');



  const navigate = useNavigate()

  
  const usuariosCollection = collection(db, 'usuarios');

  const store = async (e) => {
    e.preventDefault();
    await addDoc(usuariosCollection, 
      {
        nombre: nombre, 
        rut: rut, 
        ocupacion: ocupacion, 
        posesion: posesion, 
      
      });

    navigate('/listarUsuarios')
 
  }
  const tipoUsuarios = dataUsuarios;


  return (
    <>

          <div className='container-solicitar'>
          <form onSubmit={store}>
            <h3>Ingrese nuevo usuario</h3>
         
            <div className='mb-1 me-5 ms-5'>
              
              <input
               value={nombre}
               onChange={ (e) => setNombre( e.target.value ) }
               type="text"
               className='form-control'
               placeholder='Nombre'
               />
            </div>
            <div className='mb-1 me-5 ms-5'>              
              <input
               value={rut}
               onChange={ (e) => setRut( e.target.value ) }
               type="text"
               className='form-control'
               placeholder='Rut'
               />
            </div>
            <div className='mb-1 me-5 ms-5'>           
   
              <select className='form-control' name="categorias" id="selectCategorias" onChange={(e)=>setOcupacion(e.target.value)}>
                <option value={-1}>- Seleccione una opción -</option>
                {
                  tipoUsuarios.map((item, i)=>(
                    <option key={'ocupacion'+i} value={ocupacion[i]}> {item} </option>
                  ))
                }
              </select>

            </div>
            <div className='mb-1 me-5 ms-5'>              
              <input
               value={posesion}
               onChange={ (e) => setPosesion( e.target.value ) }
               type="text"
               className='form-control'
               placeholder='Posesión'
               />
            </div>            

            <button type='submit' className='btn btn-primary w-50'>Ingresar</button>


          </form>
          </div>
          </>
  )
}

export default IngresarUsuario