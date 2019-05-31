import React, {Component, useState} from 'react';

import {Button,Form, FormGroup, Label, Input, FormText, ListGroup, ListGroupItem,Container, Col,Row,Nav,NavLink,NavItem} from 'reactstrap';
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
<<<<<<< HEAD
      mealplan: {},
    }
=======
      user: {
        email: "anithaamarnath04@gmail.com"


            }

      };
>>>>>>> feature/setting1
  }

  componentDidMount(){
    // this.setRecipes()
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

  render() {
    let {recipes, mealplan, ingredients} = this.state;

    if (this.props.recipes){
      recipes = this.props.recipes;
    }

    return (
        <div>

          <Col sm= "3">

              Shopping List
           <ul>
            {ingredients.map(item =>
             <li key={item['name']} style={{display: 'inline-block', margin:'15px'}}>
            {item}
            </li>
            )}

<<<<<<< HEAD
            </ul>
=======
        </ul>
          <a href = {`mailto:${this.state.user.email}?subject=Ingredients%20for%20your%20Mealplan%20mail&body=${this.state.ingredients}`} >

              < EmailIcon size={32} />
            </a>

            </Col>
>>>>>>> feature/setting1

        </Col>


        <Col sm="9">
            <h6> Here's your new meal plan: </h6>
            </Col>


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