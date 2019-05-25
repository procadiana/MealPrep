import React, {Component} from 'react';
import {Container, Navbar, NavbarBrand, Nav, NavItem, NavLink, Row, Col,Card, CardTitle, CardText,CardImg,FormGroup,CustomInput} from 'reactstrap';


export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Navbar expand="lg" variant="light" bg="light">
        <Container style={{backgroundColor: '#444444'}}>
          <NavbarBrand href="#">
           <span style={{ color: '#ffffff' }}>Meal Prep</span>
          </NavbarBrand>

            <Nav className="justify-content-end " variant="info" activeKey="/home">
              <NavItem >
                <NavLink style={{ color: '#ffffff' }} href="/home">Recipes</NavLink>
            </NavItem>
              <NavItem>
                <NavLink style={{ color: '#ffffff' }} eventKey="link-1">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={{ color: '#e33d26' }} eventKey="link-2">Login</NavLink>
              </NavItem>
            </Nav>

        </Container>
        </Navbar>
        <Container>
        <Row>
          <Col sm="6">
            <Card body>

               <CardImg  width="100%" src="https://images.unsplash.com/photo-1543352631-6b884eafab2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80" alt="Card image cap" />

            </Card>
        </Col>
          <Col sm="6">
            <FormGroup>


            <CustomInput  type="checkbox" id="exampleCustomCheckbox" label="Check this custom checkbox"  />
            <CustomInput type="checkbox" id="exampleCustomCheckbox2" label="Or this one" />
            <CustomInput type="checkbox" id="exampleCustomCheckbox3" label="But not this disabled one" />
            <CustomInput type="checkbox" id="exampleCustomCheckbox4" label="Can't click this label to check!"  />

        </FormGroup>
           </Col>
        </Row>
         </Container>

      </div>
    );
  }
}
