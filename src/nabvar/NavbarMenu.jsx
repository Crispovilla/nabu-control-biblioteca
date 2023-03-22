import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Breadcrumb,
  BreadcrumbItem,
} from 'reactstrap';
import { RiAccountCircleLine, RiUserSettingsLine } from "react-icons/ri";
import { BiLogOut } from "react-icons/bi";
import '../App.scss'

const NavbarMenu = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar expand='md' {...args} className='nav-bg'>
        <NavbarBrand href="/" className='navbar-text'><h3>Nabuk</h3></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>      
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret className='navbar-text'><h6>Nombre Usuario</h6></DropdownToggle>              <DropdownMenu right className='navbar-text menu-nav'>
                <DropdownItem className='navbar-text'><span className='menu-estilo'><RiAccountCircleLine /> Cuenta </span></DropdownItem>
                <DropdownItem className='navbar-text'><span className='menu-estilo'><RiUserSettingsLine /> Configuración</span></DropdownItem>
                <DropdownItem divider />
                <DropdownItem className='navbar-text'><span className='menu-estilo'><BiLogOut /> Logout</span></DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>

        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarMenu;