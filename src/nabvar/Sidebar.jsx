import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  AiOutlineOrderedList,
  AiFillHome,
  AiFillFolderAdd,
} from "react-icons/ai";
import {
  FaBookMedical,
  FaUserPlus,
  FaBookReader,
  FaUsers,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="sidebar nav-bg">
      <div className="logo">
        <h2>Nabuk</h2>
        <h6>Control de biblioteca</h6>
      </div>

      <ul>
        <li>
          <NavLink
            exact
            className="sidebar-links py-2 w-100 d-inline-block px-3 rounded"
            to="/"
            activeClassName="active"
          >
            <AiFillHome className="me-2" />
            Inicio
          </NavLink>
        </li>
        <hr />
        <li>
          <NavLink
            exact
            className="sidebar-links py-2 w-100 d-inline-block px-3 rounded"
            to="/listarLibros"
            activeClassName="active"
          >
            <AiOutlineOrderedList className="me-2" />
            Listar libros
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            className="sidebar-links py-2 w-100 d-inline-block px-3 rounded"
            to="/ingresarNuevoLibro"
            activeClassName="active"
          >
            <FaBookMedical className="me-2" />
            Ingresar libros
          </NavLink>
        </li>

        <li>
          <NavLink
            exact
            className="sidebar-links py-2 w-100 d-inline-block px-3 rounded"
            to="/recibirLibro"
            activeClassName="active"
          >
            <AiFillFolderAdd className="me-2" />
            Recibir libros
          </NavLink>
        </li>
        <hr />
        <li>
          <NavLink
            exact
            className="sidebar-links py-2 w-100 d-inline-block px-3 rounded"
            to="/ListarUsuarios"
            activeClassName="active"
          >
            <FaUsers className="me-2" />
            Listar usuarios
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            className="sidebar-links py-2 w-100 d-inline-block px-3 rounded"
            to="/ingresarUsuario"
            activeClassName="active"
          >
            <FaUserPlus className="me-2" />
            Ingresar usuario
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
