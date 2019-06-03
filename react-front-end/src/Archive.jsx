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
import Moment from 'react-moment';

export default class Archive extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mealplans: [],
      recipes: null,
      id: []
    }
  }

  //gets mealplans for the archive
  getMealPlans = () =>{
    axios.get('/api/meal_plans').then(response =>{
      this.setState({mealplans: response.data.mealplans, recipes: response.data.recipes, id: response.data.mealplans.id })
    })
  }


  componentDidMount() {
  this.getMealPlans()
  }

  render(){
    return(
      <div>
          <Col lg="9" md="6">
              <h6> Previous Meal Plans </h6>
              <ul>
                <li>{this.state.mealplans.map(item =>
                    <div key={item.id}> Created at: <Moment format="LLLL" date={item.created_at} />
                    {this.state.recipes && Array.isArray(this.state.recipes[item.id]) && this.state.recipes[item.id].map(items =>
                      <Recipe recipe={items} />
                    )}
                    </div>
                )}
                </li>
              </ul>
          </Col>
      <LayoutFooter />
      </div>
    )
  }
}
