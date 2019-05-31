import React, {Component, useState} from 'react';
import {Button,Form, FormGroup, Label, Input, FormText,Container, Col,Row} from 'reactstrap';
import LayoutFooter from './Footer.jsx';
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles/homepage.css';
import Layout from './Layout.jsx';
import History from './History.js';
import Recipe from"./Recipe.jsx";
import { EmailShareButton} from 'react-share';
import { EmailIcon} from 'react-share';




export default class MealPlan extends Component {

  constructor(props) {
    super(props);
    this.setRecipes()
    this.state = {
      recipes: [],
      ingredients: [],

      mealplan: {},
      user: {
        email: "anithaamarnath04@gmail.com"

            }
          }
      };




  componentDidMount(){
    this.setRecipes()
  }




  setRecipes = () => {
    if(this.props.match && this.props.match.params.id){
        let id = this.props.match.params.id
        axios.get(`/api/meal_plans/${id}`).then(response =>{
          this.setState({mealplan: response.data.mealplan, recipes: response.data.recipes, ingredients: response.data.ingredients} )
        })
      }else {
      this.setState({recipes: this.props.recipes, ingredients: this.props.ingredients, mealplan: this.props.mealplan})
    }
  }

  formatIngredientsForMail = () => {
    let emailBody = ''
    this.state.ingredients.forEach(element => {
          emailBody += element+'%0D%0A'
      })
    return emailBody
  }

  render() {
    let {recipes, mealplan, ingredients} = this.state;
    if (this.props.recipes){
      recipes = this.props.recipes;
    }


    return (


        <div>
        <Container className="meal_plans">
        <Row>
          {
            !mealplan
              ? <div> loading... </div>
              : <div><Col lg="3" md="6" >
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
              <a className="email" href = {`mailto:${this.state.user.email}?subject=Ingredients%20for%20your%20Mealplan&body=${this.formatIngredientsForMail()}`} >
              < EmailIcon size={20} /> </a>

            <Col lg="9" md="6">
            <h6> Here's your new meal plan: </h6>
            </Col>


            <ul>
            {recipes.map(item =>
              (<Recipe recipe={item}/>)
            )}


            </ul>
            </Row>
            </Container>
            <LayoutFooter />

            </div>
           }

      </div>
  )
}
}