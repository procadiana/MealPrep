import React, {Component} from 'react';
import {Container, Navbar, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';
import './styles/homepage.css';
import logo from './img/Logo2.png';
import login from './Login.jsx';
import HomePage from './Homepage.jsx';

export default class Layout extends Component {
  render() {
    return (
     <div>
          <Navbar expand="lg" variant="light" style={{backgroundColor: '#F6F6F6'}}>
          <Container style={{backgroundColor: '#F6F6F6'}}>

            <NavbarBrand href="/">
             <img src={logo} style={{ height: 70 }} alt ="logo"/ >

            </NavbarBrand>

              <Nav className="justify-content-end " variant="info" >
                <NavItem >
                  <NavLink  style={{ color: '#718087' }} href={'/'}>Recipes</NavLink>
              </NavItem>
                <NavItem>
                  <NavLink  style={{ color: '#718087' }} href={'/'}>About</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink style={{ color: '#e33d26' }} href={'login'}>Login</NavLink>
                </NavItem>
              </Nav>

          </Container>
          </Navbar>

           </div>
    );
  }
}