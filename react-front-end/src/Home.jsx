import React, {Component} from 'react';

import {Button, FormGroup, Label, Input,Container, Col,Row,Nav,NavLink,NavItem} from 'reactstrap';
import LayoutFooter from './Footer.jsx';
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles/homepage.css';
import { EmailIcon} from 'react-share';


import Recipe from"./Recipe.jsx";


export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      lastMealPlan: "",
      favouriteRecipes: [],
      ingredients:[],
      checked: [],

      user: {
        email: "diana.claudia.ilinca@gmail.com"

            }
    }
    this.checkedChanged = this.checkedChanged.bind(this)

  }


  getLastMealPlan = () => {
    axios.get('/api/meal_plans/last').then((response) => {
      this.setState({lastMealPlan: response.data, ingredients:response.data.ingredients})
      const l = this.state.ingredients.length
      console.log(l)
      const check = []
      for(let i = 0; i < l; i++){
        check.push(false)
      }
      this.setState({checked: check})
      console.log(this.state.checked)
    })
  }

  getFavouriteRecipes = () => {
    axios.get('/api/recipes').then((response) => {
      this.setState({favouriteRecipes: response.data.recipes})
    })
  }

  formatIngredientsForMail = () => {
    let emailBody = ''
    console.log()
    this.state.ingredients.forEach((element,index) => {
        this.state.checked[index] ? emailBody += element +'  ✓ '+'%0D%0A' : emailBody += element +'%0D%0A'

    })
    return emailBody
  }

  checkedChanged(event){
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name
    const check = this.state.checked
    check[name] = !check[name]
    this.setState({checked: check})
  }

 componentDidMount() {
  this.getLastMealPlan()
  this.getFavouriteRecipes()
 }

  render(){
    const ingredients = this.state.ingredients
    const {lastMealPlan, favouriteRecipes} = this.state


      return(
        <div>

          <div className="float-right">
             <Button variant="primary" color="success" className="new_plan_button" href='/mealplan/new'>
                <FontAwesomeIcon icon="plus" /> New Meal Plan</Button>
            <Nav>
              <NavItem>
                <NavLink href="/mealplans">View Previous Meal Plans</NavLink>
              </NavItem>
            </Nav>
          </div>
          <Container className= "home_meal_plan">

              {
                !lastMealPlan
                ? <FontAwesomeIcon icon="spinner" size="4x" spin style={{color: 'grey'}}/>
                : <div>

                <Container className="meal_plans">
                  <Row>
                    <Col lg="3" md="6" > <h5 className= "home_heading">Ingredients </h5>
                      <FormGroup check className="ingredient_check">

                        <ul>
                          {ingredients.map((item,index) =>
                            <li className = "ingredient_list" >
                            <input id={index} key={index}
                          name={index}
                          type="checkbox"
                          onChange={this.checkedChanged} />
                                <span>{item}</span>
                             </li>
                          )}
                        </ul>
                      </FormGroup>
                      <a className="email" href = {`mailto:${this.state.user.email}?subject=Ingredients%20for%20your%20Mealplan&body=${this.formatIngredientsForMail()}`} >
                        <EmailIcon size={20} /> </a>

                    </Col>

                    <Col lg="9" md="6">
                      <h5 className= "home_heading"> Here's your new meal plan: </h5>
                        <ul>
                          { lastMealPlan.recipes.map(item => <Recipe recipe={item}/>) }
                        </ul>
                        <h5 className="fav_heading">Your favourite recipes 😀 </h5>

                          {
                            !favouriteRecipes
                            ? <FontAwesomeIcon icon="spinner" size="4x" spin style={{color: 'grey'}} />
                            : <ul> { favouriteRecipes.map(item => <Recipe recipe={item} />) }</ul>
                          }
                    </Col>
                  </Row>
                </Container>
                  <LayoutFooter />
                </div>

              }

          </Container>


        </div>
      )
    }
}
