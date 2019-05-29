import React, {Component} from 'react';
import {Container, Row, Col,ListGroup,ListGroupItem, Button} from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import home from './img/Home.jpg';
import './styles/homepage.css';
import Layout from './Layout.jsx';
import LayoutFooter from './Footer.jsx';


export default class HomePage extends Component {
  render() {
    return (
        <div>
        <Layout />
        <Container>
        <Row>
          <Col lg="6" md="12">
               <img  className="home_image" src={home} />
        </Col>
          <Col lg="6" md="12">
          <ListGroup className ="list-group">
                <ListGroupItem className ="item-group"><FontAwesomeIcon icon="check"   /> 30 Minutes Recipes</ListGroupItem>
                <ListGroupItem className ="item-group"><FontAwesomeIcon icon="check"  /> Meal Plan for up to a week </ListGroupItem>
                <ListGroupItem className ="item-group"><FontAwesomeIcon icon="check"  /> Grocery list made for you</ListGroupItem>
                <ListGroupItem className ="item-group"><FontAwesomeIcon icon="check" /> Share the plan with your family</ListGroupItem>
          </ListGroup>
           </Col>

        </Row>

        <Button href="/signup" className="home_button" color="success">Sign-up Now</Button>{' '}


         </Container>

         <LayoutFooter />

      </div>
    );
  }
}
