import React, {Component} from 'react';
import {Container, Navbar, NavbarBrand, Nav, NavItem, NavLink,UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem} from 'reactstrap';
import './styles/homepage.css';
import logo from './img/Logo2.png';
import login from './Login.jsx';
import HomePage from './Homepage.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default class Layout extends Component {
  render() {
    return (
     <div>
          <Navbar expand="lg" variant="light" className ="nav_bar" >
          <Container>

            <NavbarBrand href="/">
             <img src={logo} style={{ height: 70 }} alt ="logo"/ >

            </NavbarBrand>

              <Nav className="justify-content-end " variant="info" >
                <NavItem >
                  <NavLink className ="nav_bar_name"  href={'/'}>Recipes</NavLink>
              </NavItem>
                <NavItem>
                  <NavLink  className ="nav_bar_name" href={'/'}>About</NavLink>
                </NavItem>
                <NavItem>

                  <NavLink className = "nav_bar_names" href={'/login'}>Login</NavLink>

                </NavItem>
                <UncontrolledDropdown setActiveFromChild className="nav_bar_name">
                <DropdownToggle tag="a" className="nav-link" caret>  <FontAwesomeIcon icon="user" href=''/> Setting </DropdownToggle>
                <DropdownMenu>
                <DropdownItem tag="a" href="/blah" active>Edit User</DropdownItem>
                <DropdownItem tag="a" href="/blah" active>Edit Meal Plan</DropdownItem>
                <DropdownItem tag="a" href="/" style={{color:'#e33d26'}} active>Logout</DropdownItem>
                </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>

          </Container>
          </Navbar>

           </div>
    );
  }
}