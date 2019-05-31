import React, {Component, useState} from 'react';
import {Button,Form, FormGroup, Label, Input, FormText, ListGroup, ListGroupItem,Container, Col,Row,Nav,NavLink,NavItem} from 'reactstrap';
import LayoutFooter from './Footer.jsx';
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles/homepage.css';
import Layout from './Layout.jsx';
import History from './History';
import Recipe from"./Recipe.jsx";
import { EmailShareButton} from 'react-share';
import { EmailIcon} from 'react-share';



export default class MealPlan extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mealplan: {},
      recipes: [],
      ingredients: [],
      user: {
        email: "anithaamarnath04@gmail.com"


            }

      };
  }


  componentDidMount(){
    const id = this.props.match.params.id
    axios.get(`/api/meal_plans/${id}`).then(response =>{
      this.setState({mealplan: response.data.mealplan, recipes: response.data.recipes, ingredients: response.data.ingredients} )
    })
  }



  render() {
    const { mealplan, recipes, ingredients} = this.state;

    return (

        <div>

        <Layout />
        <div className="float-right">

        <Button variant="primary" type="submit" color="success" className="new_plan_button">
              <FontAwesomeIcon icon="plus" href=''/>  New Meal Plan
        </Button>

          </div>
        <Container style={{marginTop:50}}>
          <Row>

            <Col sm= "3">
              Shopping List

            <ul>
        {ingredients.map(item =>
           <li key={item['name']} style={{display: 'inline-block', margin:'15px'}}>
            {item}
          </li>

        )}

        </ul>
          <a href = {`mailto:${this.state.user.email}?subject=Ingredients%20for%20your%20Mealplan%20mail&body=${this.state.ingredients}`} >

              < EmailIcon size={32} />
            </a>

            </Col>



            <Col>
            <h6> Here's your meal plan for 4 days </h6>
            </Col>
        </Row>
      </Container>

        <ul>
        {recipes.map(item =>
          (<Recipe recipe={item}/>)
        )}

        </ul>

      <LayoutFooter />

        </div>

      )
  }
}