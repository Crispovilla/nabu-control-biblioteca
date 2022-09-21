import { doc, getDoc, updateDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { db } from '../../firebase/firebase-config'

import { FaRegSave } from "react-icons/fa";

import { dataUsuarios } from '../../data/tipoUsuarios';


const EditarUsuario = () => {

    const [nombre, setNombre] = useState('');
    const [rut, setRut] = useState('');
    const [ocupacion, setOcupacion] = useState('');
    const [posesion, setPosesion] = useState('');


    const tipoUsuarios = dataUsuarios;

    const navigate = useNavigate();

    const {id} = useParams();

    const actualizar = async (e) => {
        e.preventDefault();
        const usuario = doc(db, 'usuarios', id);
        const data = { 
            nombre: nombre, 
            rut: rut, 
            ocupacion: ocupacion, 
            posesion: posesion, 
         };
        await updateDoc(usuario, data);
        navigate('/listarUsuarios');
    }

    const getUsuarioById = async (id) => {
        const usuario = await getDoc(doc(db, 'usuarios', id));
        if (usuario.exists()) {
            setNombre(usuario.data().nombre)
            setRut(usuario.data().rut)
            setOcupacion(usuario.data().ocupacion)
            setPosesion(usuario.data().posesion)
            
        } else {
            console.log('id incorrecto')
        }
    };

    useEffect(()=> {
        getUsuarioById(id)
    }, [])


  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col">
        
          <form onSubmit={actualizar}>
          <h3>Editar usuario</h3>
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
                value={rut}
                onChange={(e) => setRut(e.target.value)}
                type="text"
                className="form-control"
              />
            </div>
            <div className="mb-1 me-5 ms-5">


              <select className='form-control' name="ocupacion" id="selectOcupacion" onChange={(e) => setOcupacion(e.target.value)}>
                {
                  tipoUsuarios.map((item, i)=>(
                    <option value={ocupacion[i]}>{item}</option>
                  ))
                } 
              </select>              

            </div>
            <div className="mb-1 me-5 ms-5">

              <input
                value={posesion}
                onChange={(e) => setPosesion(e.target.value)}
                type="text"
                className="form-control"
              />
            </div>

            <button type='submit' className='btn btn-primary w-50'>Editar</button>
          </form>
        </div>
      </div>
    </div>
  </>
  )
}

export default EditarUsuario