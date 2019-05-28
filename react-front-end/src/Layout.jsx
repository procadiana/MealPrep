import React, {Component} from 'react';
import {Container, Navbar, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';
import './styles/homepage.css';
import logo from './img/Logo2.png';
import Login from './Login.jsx';

export default class Layout extends Component {
  render() {
    return (
     <div>
          <Navbar expand="lg" variant="light" style={{backgroundColor: '#F6F6F6'}}>
          <Container style={{backgroundColor: '#F6F6F6'}}>
            <NavbarBrand href="#">
             <img src={logo} style={{ height: 70 }} alt ="logo"/ >
            </NavbarBrand>

              <Nav className="justify-content-end " variant="info" activeKey="/home">
                <NavItem >
                  <NavLink  style={{ color: '#718087' }} href="/home">Recipes</NavLink>
              </NavItem>
                <NavItem>
                  <NavLink  style={{ color: '#718087' }} href="/home">About</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink style={{ color: '#e33d26' }} href={"Login"}>Login</NavLink>
                </NavItem>
              </Nav>

          </Container>
          </Navbar>
           </div>
    );
  }
}