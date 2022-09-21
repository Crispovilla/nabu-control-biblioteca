import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  collection,
  getDocs,
  getDoc,
  deleteDoc,
  doc,
  getFirestore,
} from "firebase/firestore";
import { db } from "../../firebase/firebase-config";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { FaBan } from "react-icons/fa";
import { MdDoneAll, MdOutlineRemoveDone } from "react-icons/md";
import { IoHandRightOutline } from "react-icons/io5";

import Swal from 'sweetalert2'

import '../../App.scss'



const ListarUsuarios = () => {

    const [ usuarios, setUsuarios ] = useState([]);
    const [ buscarUsuario, setBuscarUsuario ] = useState( "" );
    const [ stockDisponible, setStockDisponible ] = useState(); 
   
    const usuariosCollection = collection(db, 'usuarios');
    
    const searcher = (e) => {
      setBuscarUsuario(e.target.value);
  }

    const results = !buscarUsuario ? usuarios : usuarios.filter((val) =>
     val.nombre.toLowerCase().includes(buscarUsuario.toLowerCase()))



    const getUsuarios = async () => {
        const data = await getDocs(usuariosCollection);
        setUsuarios(data.docs.map((doc) => ({...doc.data(), id: doc.id})));      
        
    };

    const deleteUsuario = async (id) => {

      try {
        const usuarioDoc = doc(db, "usuarios", id);
        const alertUser = await Swal.fire({
          title: '¿Desea eliminar?',    
          html: '<br />Esta operación no podrá ser revertida después<br />',
          showCancelButton: true,
          cancelButtonText: 'Cancelar',
          confirmButtonText: 'Confirmar',
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',    
          backdrop: true,               
          allowOutsideClick: false,     
          allowEscapeKey: false,        
          allowEnterKey: false,         
          reverseButtons: false,        
          customClass: {
            htmlContainer: 'sweet_htmlContainerImportant',
            popup: 'sweet_popupImportant',
            container: 'sweet_containerImportant',
            title: 'sweet_titleImportant',
            actions: 'sweet_actionsImportant',
            confirmButton: 'sweet_confirmbuttonImportant',
            cancelButton: 'sweet_cancelbuttonImportant',
          }
        }).then((result) => {
          if(result.isConfirmed) {
            deleteDoc(usuarioDoc);
            Swal.fire('Borrado!', '', 'success')
            getUsuarios();  
  
          } else if (result.isDenied){
            Swal.fire('Los cambios no fueron guardados', '', 'info')
          }
        })
        

      } catch (error) {
        console.log(error)
        
      }



      };



      useEffect(() => {
        getUsuarios();
       
   
      }, []);
    
   
  return (
    <>
    
    <div className="main-crud">     

    <input 
          type="text"
          value={buscarUsuario}
          onChange={searcher}
          placeholder='Buscar...'
          activeClassName='active'
          className='form-control buscador py-2 px-2 w-50'
         />  
       
 
      <div className="row content-crud"> 
        <div className="col-10">
          <table className="table table-bordered table-dark table-hover">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Rut</th>       
                <th>Ocupación</th>
                <th>Posesión</th>
                <th>Acciones</th>
              </tr>
            </thead>

            <tbody>
              {results.map((usuario) => (
                <tr key={usuario.id}>
                  <td>{usuario.nombre}</td>
                  <td>{usuario.rut}</td>
                  <td>{usuario.ocupacion}</td>
                  <td>{usuario.posesion}</td>
                
                    

                  <td className="actions">
                    <Link
                      to={`/editarUsuario/${usuario.id}`}
                      className="btn btn-warning me-2"
                    >
                      <i className="action-buttons"><AiOutlineEdit /></i>
                    </Link>
                    <button
                      onClick={() => deleteUsuario(usuario.id)}
                      className="btn btn-danger"
                    >
                      <i className="action-buttons"><AiOutlineDelete /></i>
                    </button>
                    <Link
                      to={`/solicitar/${usuario.id}`}
                      className="btn btn-danger ms-2"                      
                    >
                      <i className="action-buttons"><FaBan /></i>
                    </Link>
                  </td>
                
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  </>
  )
}

export default ListarUsuarios