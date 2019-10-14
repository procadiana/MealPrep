import React, {Component} from 'react';

import {Button, FormGroup, Label, Input,Container, Col,Row} from 'reactstrap';
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
        email: "procadiana@icloud.com"

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
  var intervalId = setInterval(this.getFavouriteRecipes, 1000);
  this.setState({intervalId: intervalId});
  }
  componentWillMount(){
     clearInterval(this.state.intervalId)
  }


  render(){
    const ingredients = this.state.ingredients
    const {lastMealPlan, favouriteRecipes} = this.state


      return(
        <div>


          <Container className= "home_meal_plan">

              {
                !lastMealPlan
                ? <FontAwesomeIcon icon="spinner" size="4x" spin style={{color: 'grey'}}/>
                : <div>

                <Container className="meal_plans">
                  <Row>
                    <Col lg="3" md="6" > <h5>List of Ingredients</h5>
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
                        <EmailIcon className="email_icon" round={true}  size={40} /> </a>

                    </Col>

                    <Col lg="9" md="6">
                      <h5 className= "home_heading"> Here's your new meal plan: </h5>
                        <ul>
                          { lastMealPlan.recipes.map(item => <Recipe key={item.id} recipe={item}/>) }
                        </ul>

                        <h5 className="home_heading">Your favourite recipes  </h5>


                          {
                            !favouriteRecipes
                            ? <FontAwesomeIcon icon="spinner" size="4x" spin style={{color: 'grey'}} />
                            : <ul> { favouriteRecipes.map(item => <Recipe key={item.id} recipe={item}  />) }</ul>
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
