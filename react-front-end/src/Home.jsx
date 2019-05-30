import React, {Component, useState} from 'react';
import {Button,Form, FormGroup, Label, Input, FormText, ListGroup, ListGroupItem,Container, Col,Row,Nav,NavLink,NavItem} from 'reactstrap';
import LayoutFooter from './Footer.jsx';
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles/homepage.css';
import Layout from './Layout.jsx';
import history from './History';
import Recipe from"./Recipe.jsx";

export default class Home extends Component {


  constructor(props) {
    super(props);
    this.state = {
      mealplan: {},
      recipes: []
      };
  }


  componentWillMount(){
    const id = this.props.match.params.id
    axios.get(`/api/meal_plans/${id}`).then(response =>{
      this.setState({mealplan: response.data.mealplan, recipes: response.data.recipes})
    })
  }



  render() {
    const { mealplan, recipes} = this.state;

    return (

        <div>

        <Layout />
        <div className="float-right">

        <Button variant="primary" type="submit" color="success" className="new_plan_button">
              <FontAwesomeIcon icon="plus" href=''/>  New Meal Plan
        </Button>
          <Nav >
            <NavItem>
              <NavLink href="#">View Previous Meal Plans</NavLink>
            </NavItem>

          </Nav>
          </div>
        <Container style={{marginTop:50}}>
          <Row>
            <Col sm= "3">
              Shopping List
            </Col>


            <Col sm="9">
            <h6> Here's your meal plan for 4 days </h6>
            </Col>
      </Row>
      </Container>



      <LayoutFooter />

        </div>

      )
  }

}