import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { data } from '../../data/categorias';
import { db } from '../../firebase/firebase-config';


const IngresarLibro = () => {

  const [nombre, setNombre] = useState('');
  const [codigo, setCodigo] = useState('');
  const [categoria, setCategoria] = useState('');
  const [autor, setAutor] = useState('');
  const [stock, setStock] = useState('');
  const [publicado, setPublicado] = useState('');
  const [disponible, setDisponible] = useState(true);



  const navigate = useNavigate()

  
  const librosCollection = collection(db, 'libros');

  const store = async (e) => {
    e.preventDefault();
    await addDoc(librosCollection, 
      {
        nombre: nombre, 
        codigo: codigo, 
        categoria: categoria, 
        autor: autor, 
        anioPublicacion: publicado, 
        stock: stock, 
        disponible: disponible
      });

    navigate('/listarLibros')
 
  }
  const categoriaLibro = data;


  return (
    <>

          <div className='container-solicitar'>
          <form onSubmit={store}>
            <h3>Ingrese datos</h3>
         
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
               value={codigo}
               onChange={ (e) => setCodigo( e.target.value ) }
               type="text"
               className='form-control'
               placeholder='Código'
               />
            </div>
            <div className='mb-1 me-5 ms-5'>           
   
              <select className='form-control' name="categorias" id="selectCategorias" onChange={(e)=>setCategoria(e.target.value)}>
                <option value={-1}>- Seleccione una categoría -</option>
                {
                  categoriaLibro.map((item, i)=>(
                    <option key={'categoria'+i} value={categoria[i]}> {item} </option>
                  ))
                }
              </select>

{/*               <input
              name='categorias'
               value={categoria}
               onChange={ (e) => setCategoria( e.target.value ) }
               type="text"
               className='form-control'
               /> */}
            </div>
            <div className='mb-1 me-5 ms-5'>              
              <input
               value={autor}
               onChange={ (e) => setAutor( e.target.value ) }
               type="text"
               className='form-control'
               placeholder='Autor'
               />
            </div>
            <div className='mb-1 me-5 ms-5'>            
              <input
               value={publicado}
               onChange={ (e) => setPublicado( e.target.value ) }
               type="number"
               className='form-control'
               placeholder='Año publicación'
               />
            </div>
            <div className='mb-1 me-5 ms-5'>
              <input
               value={stock}
               onChange={ (e) => setStock( e.target.value ) }
               type="number"
               className='form-control'
               placeholder='Cantidad'
               />
            </div>
            <div className='mb-1 me-5 ms-5'>
              
              <select className='form-control' name="disponible" id="selectDisponible" onChange={(e)=>setDisponible(e.target.value)}>
                <option value="disponible">Si</option>
                <option value="noDisponible">No</option>
              </select>
{/*               <input
               value={disponible}
               onChange={ (e) => setDisponible( e.target.value ) }
               type="text"            
               className='form-control'
               /> */}
            </div>
            

            <button type='submit' className='btn btn-primary w-50'>Guardar</button>


          </form>
          </div>
          </>
  )
}

export default IngresarLibro