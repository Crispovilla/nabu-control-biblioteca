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
import { MdDoneAll, MdOutlineRemoveDone } from "react-icons/md";
import { IoHandRightOutline } from "react-icons/io5";

// ES6 Modules or TypeScript
import Swal from "sweetalert2";

import "./estilos.scss";

const ListarLibros = () => {
  const [libros, setLibros] = useState([]);
  const [buscar, setBuscar] = useState("");
  const [stockDisponible, setStockDisponible] = useState();

  const librosCollection = collection(db, "libros");

  const searcher = (e) => {
    setBuscar(e.target.value);
  };

  const results = !buscar
    ? libros
    : libros.filter((val) =>
        val.nombre.toLowerCase().includes(buscar.toLowerCase())
      );

  const getLibros = async () => {
    try {
      const data = await getDocs(librosCollection);
      setLibros(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    } catch (error) {
      console.log(error);
      console.log("Critical error!!!! This device was been hacked!");
    }
  };

  const deleteLibro = async (id) => {
    try {
      const libroDoc = doc(db, "libros", id);
      const alert = await Swal.fire({
        title: "¿Desea eliminar?",
        html: "<br />Esta operación no podrá ser revertida después<br />",
        showCancelButton: true,
        cancelButtonText: "Cancelar",
        confirmButtonText: "Confirmar",
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        backdrop: true,
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        reverseButtons: false,
        customClass: {
          htmlContainer: "sweet_htmlContainerImportant",
          popup: "sweet_popupImportant",
          container: "sweet_containerImportant",
          title: "sweet_titleImportant",
          actions: "sweet_actionsImportant",
          confirmButton: "sweet_confirmbuttonImportant",
          cancelButton: "sweet_cancelbuttonImportant",
        },
      }).then((result) => {
        if (result.isConfirmed) {
          deleteDoc(libroDoc);
          Swal.fire("Borrado!", "", "success");
          getLibros();
        } else if (result.isDenied) {
          Swal.fire("Los cambios no fueron guardados", "", "info");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLibros();
  }, []);

  return (
    <>
      <div className="main-crud">
        <input
          type="text"
          value={buscar}
          onChange={searcher}
          placeholder="Buscar..."
          activeClassName="active"
          className="form-control buscador py-2 px-2 w-50"
        />

        <div className="row content-crud">
          <div className="col-10">
            <table className="table table-bordered table-dark table-hover">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Código</th>
                  <th>Categoría</th>
                  <th>Autor</th>
                  <th>Año publicación</th>
                  <th>Stock</th>
                  <th>Disponible</th>
                  <th>Acciones</th>
                </tr>
              </thead>

              <tbody>
                {results.map((libro) => (
                  <tr key={libro.id}>
                    <td>{libro.nombre}</td>
                    <td>{libro.codigo}</td>
                    <td>{libro.categoria}</td>
                    <td>{libro.autor}</td>
                    <td>{libro.anioPublicacion}</td>
                    <td>{libro.stock}</td>
                    <td>
                      {libro.disponible === true && <MdDoneAll color="green" />}
                      {libro.disponible === false && (
                        <MdOutlineRemoveDone color="red" />
                      )}
                    </td>

                    <td className="actions">
                      <Link
                        to={`/editar/${libro.id}`}
                        className="btn btn-warning me-2"
                      >
                        <i className="action-buttons">
                          <AiOutlineEdit />
                        </i>
                      </Link>
                      <button
                        onClick={() => deleteLibro(libro.id)}
                        className="btn btn-danger"
                      >
                        <i className="action-buttons">
                          <AiOutlineDelete />
                        </i>
                      </button>
                      <Link
                        to={`/solicitar/${libro.id}`}
                        className="btn btn-primary ms-2"
                      >
                        <i className="action-buttons">
                          <IoHandRightOutline />
                        </i>
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
  );
};

export default ListarLibros;
