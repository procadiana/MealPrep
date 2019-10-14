import React, {Component} from 'react';
import {Button, FormGroup, Label, Input,Container, Col,Row} from 'reactstrap';
import LayoutFooter from './Footer.jsx';
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles/homepage.css';

import Recipe from"./Recipe.jsx";



export default class MealPlan extends Component {

  constructor(props) {
    super(props);
    this.setRecipes()
    this.state = {
      recipes: [],
      ingredients: [],
      mealplan: {}

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



  render() {
    let {recipes, mealplan, ingredients} = this.state;
    if (this.props.recipes){
      recipes = this.props.recipes;
    }


    return (

        <div>
          {
            !ingredients
              ? <FontAwesomeIcon icon="spinner" size="4x" spin style={{color: 'grey'}} />
                : <div>

                <Container className="meal_plans">
                  <Row>
                    <Col lg="3" md="6" > <h5 className="headings">List of Ingredients</h5>
                      <FormGroup check className="ingredient_check">
                        <ul >

                          {ingredients.map(item =>
                            <li key={item['name']} className = "ingredient_list">
                              <Label check >
                            <Input type="checkbox" />{' '}
                              <span> {item} </span>

                              </Label>
                             </li>
                          )}

                          {}
                        </ul>

                      </FormGroup>


                    </Col>

                    <Col lg="9" md="6">
                      <h5 className="heading_mealplan">Here's your new meal plan: </h5>
                        <ul>
                          {recipes.map(item =>
                            (<Recipe recipe={item}/>)
                          )}
                        </ul>
                    </Col>
                  </Row>
                </Container>
                  <LayoutFooter />
                </div>
          }
      </div>
      )
   }
}