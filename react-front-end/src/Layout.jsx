import React, {Component} from 'react';
import {Container, Navbar, NavbarBrand, Nav, NavItem, NavLink,UncontrolledDropdown, DropdownToggle, DropdownMenu,DropdownItem} from 'reactstrap';
import './styles/homepage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from './img/Logo2.png';
import login from './Login.jsx';
import HomePage from './Homepage.jsx';
import { logout, getCookie, setCookie } from './Cookie';
import * as cookie from 'react-cookies';




export default class LayoutSignedIn extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  logout = (name) => {
  return cookie.remove(name, { path: '/' })
  }


  render() {
    let content = <NavLink className = "nav_bar_names" href={'/login'} >Login</NavLink>
    if(this.props.authenticated){
      content = (<UncontrolledDropdown setActiveFromChild className="nav_bar_name">
                <DropdownToggle tag="a" className="nav-link" caret>  <FontAwesomeIcon icon="user" href=''/> Setting </DropdownToggle>
                <DropdownMenu>
                <DropdownItem tag="a" href="/blah" active>Edit User</DropdownItem>
                <DropdownItem tag="a" href="/blah" active>Edit Meal Plan</DropdownItem>
                <DropdownItem tag="a" href="/" style={{color:'#e33d26'}} onClick={() => logout(false)} active>Logout</DropdownItem>
                </DropdownMenu>
                </UncontrolledDropdown>);
    }


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
                {content}




                </NavItem>


              </Nav>

          </Container>
          </Navbar>

           </div>
    );
  }
}