import React, {Component} from 'react';
import {Container, Navbar, NavbarBrand, Nav, NavItem, NavLink, Row, Col,Card,CardImg,ListGroup,ListGroupItem, Button} from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './styles/homepage.css';
import Layout from './Layout.jsx';

export default class HomePage extends Component {
  render() {
    return (
        <div>
        <Layout />
        <Container>
        <Row>
          <Col sm="6">


               <img  class="home_image" width="100%" src="https://images.unsplash.com/photo-1543352631-6b884eafab2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80" alt="Card image cap" />


        </Col>
          <Col sm="6">
          <ListGroup className ="list-group">
                <ListGroupItem className ="item-group"><FontAwesomeIcon icon="check"   /> 30 Minutes Recipes</ListGroupItem>
                <ListGroupItem className ="item-group"><FontAwesomeIcon icon="check"  /> Meal Plan for up to a week </ListGroupItem>
                <ListGroupItem className ="item-group"><FontAwesomeIcon icon="check"  /> Grocery list made for you</ListGroupItem>
                <ListGroupItem className ="item-group"><FontAwesomeIcon icon="check" /> Share the plan with your family</ListGroupItem>
          </ListGroup>
           </Col>

        </Row>

        <Button href="/signup" className="sign_up" color="success">Sign-up Now</Button>{' '}


         </Container>

      </div>
    );
  }
}
