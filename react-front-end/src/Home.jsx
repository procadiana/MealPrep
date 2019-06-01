import React, {Component, useState} from 'react';

import MealPlan from "./MealPlan.jsx";

import {Button,Form, FormGroup, Label, Input, FormText, ListGroup, ListGroupItem,Container, Col,Row,Nav,NavLink,NavItem} from 'reactstrap';
import LayoutFooter from './Footer.jsx';
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles/homepage.css';
import Layout from './Layout.jsx';
import { EmailShareButton} from 'react-share';
import { EmailIcon} from 'react-share';

import History from './History.js';

import Recipe from"./Recipe.jsx";


export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      lastMealPlan: "",
      favouriteRecipes: []
    }
  }

  // {mealplans.map(item =>
  //              <li key={item['id']} style={{display: 'inline-block', margin:'15px'}}>
  //               {item['id']}
  //               </li>
  //             )}


  getLastMealPlan = () => {
    axios.get('/api/meal_plans/last').then((response) => {
      this.setState({lastMealPlan: response.data, ingredients:response.data.ingredients})
    })
  }

  getFavouriteRecipes = () => {
    axios.get('/api/recipes').then((response) => {
      this.setState({favouriteRecipes: response.data.recipes})
    })
  }

 componentDidMount() {
  this.getLastMealPlan()
  this.getFavouriteRecipes()
 }

  render(){
    const ingredients = this.state.ingredients
    const {lastMealPlan, favouriteRecipes} = this.state
    let mealplans = this.props.mealplans
    console.log(favouriteRecipes)
      return(
        <div>
          <div className="float-right">
             <Button variant="primary" color="success" className="new_plan_button" href='/mealplan/new'>
                <FontAwesomeIcon icon="plus" /> New Meal Plan</Button>
            <Nav>
              <NavItem>
                <NavLink href="#">View Previous Meal Plans</NavLink>
              </NavItem>
            </Nav>
          </div>
          <Container className= "home_meal_plan">


              {
                !lastMealPlan
                ? <div> loading... </div>
                : <div>

                <Container className="meal_plans">
                  <Row>
                    <Col lg="3" md="6" > Ingredients
                      <FormGroup check className="ingredient_check">
                        <ul>
                          {ingredients.map(item =>
                            <li key={item['name']} className = "ingredient_list">
                              <Label check>
                            <Input type="checkbox" />{' '}
                                {item}
                              </Label>
                             </li>
                          )}
                        </ul>
                      </FormGroup>

                    </Col>

                    <Col lg="9" md="6">
                      <h6> Here's your new meal plan: </h6>
                        <ul>
                          { lastMealPlan.recipes.map(item => <Recipe recipe={item}/>) }
                        </ul>
                    </Col>
                  </Row>
                </Container>
                  <LayoutFooter />
                </div>

              }

          </Container>

          <Container className= "home_meal_plan">
          <h6> Your favourite recipes: </h6>

              {
                !favouriteRecipes
                ? <div> loading... </div>
                : <ul> { favouriteRecipes.map(item => <Recipe recipe={item} />) }</ul>
              }

          </Container>
            <LayoutFooter />
        </div>
      )
    }
}
