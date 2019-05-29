import React, {Component, useState} from 'react';
import {Button,Form, FormGroup, Label, Input, FormText, ListGroup, ListGroupItem} from 'reactstrap';

import axios from "axios";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './styles/homepage.css';
import Layout from './Layout.jsx';
import history from './history';
import Recipe from"./Recipe.jsx";

export default class MealPlan extends Component {
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
        <ul>
        {recipes.map(item =>
          (<Recipe recipe={item}/>)
        )}
        </ul>
        </div>

      )
  }
}