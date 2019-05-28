import React, {Component} from 'react';
import {Container, Row, Col,ListGroup,ListGroupItem, Button} from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import home from './img/Home.jpg';
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


               <img  class="home_image" width="100%" src={home} alt="home" />


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
