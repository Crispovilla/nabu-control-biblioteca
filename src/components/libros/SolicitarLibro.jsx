import { doc, getDoc, updateDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { db } from '../../firebase/firebase-config'

import { FaRegSave } from "react-icons/fa";

import { data } from '../../data/categorias';


const SolicitarLibro = () => {

    const [nombre, setNombre] = useState('');
    const [codigo, setCodigo] = useState('');
    const [categoria, setCategoria] = useState('');
    const [autor, setAutor] = useState('');
    const [publicado, setPublicado] = useState(0);
    const [stock, setStock] = useState(0);
    const [disponible, setDisponible] = useState();

    const categoriaLibro = data;

    const navigate = useNavigate();

    const {id} = useParams();

    const solicitar = async (e) => {
        e.preventDefault();
        const libro = doc(db, 'libros', id);
        const data = { nombre: nombre, stock: stock };
        await updateDoc(libro, data);
        navigate('/');
    }

    const getLibroById = async (id) => {
        const libro = await getDoc(doc(db, 'libros', id));
        if (libro.exists()) {
            setNombre(libro.data().nombre)
            setCodigo(libro.data().codigo)
            setCategoria(libro.data().categoria)
            setAutor(libro.data().autor)
            setPublicado(libro.data().anioPublicacion)
            setStock(libro.data().stock)
            setDisponible(libro.data().disponible)
            
        } else {
            console.log('id incorrecto')
        }
    };

    useEffect(()=> {
        getLibroById(id)
    }, [])


  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col">
        
          <form onSubmit={solicitar}>
          <h3>Solicitar Libro</h3>

          <div className="mb-1 me-5 ms-5">
            <input 
              placeholder='Ingrese nombre solicitante'
              type="text" 
              className='form-control'

              />

          </div>
          <div className="mb-1 me-5 ms-5">
            <input 
              placeholder='Curso o grado solicitante'
              type="text" 
              className='form-control'

              />

          </div>         

            <div className="mb-1 me-5 ms-5">
              <input
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                type="text"
                className="form-control"
              />
            </div>

            <div className="mb-1 me-5 ms-5">
              <input
                value={disponible}
                onChange={(e) => setDisponible(e.target.value)}
                type="text"
                className="form-control"
              />
            </div>
            
            <button type='submit' className='buttons btn btn-primary w-50'>Solicitar</button>
          </form>
        </div>
      </div>
    </div>
  </>
  )
}

export default SolicitarLibro