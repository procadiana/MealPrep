import React, {Component, useState} from 'react';

import MealPlan from "./MealPlan.jsx";

import {Button,Form, FormGroup, Label, Input, FormText, ListGroup, ListGroupItem,Container, Col,Row,Nav,NavLink,NavItem} from 'reactstrap';
import LayoutFooter from './Footer.jsx';
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles/homepage.css';
import Layout from './Layout.jsx';

import History from './History';
import Recipe from"./Recipe.jsx";


export default class Home extends Component {



  render(){


   return (
      <div>

        <div className="float-right">
          <Button variant="primary" type="submit" color="success" className="new_plan_button" href='/mealplan/new'>
                <FontAwesomeIcon icon="plus" />  New Meal Plan
          </Button>

          <Nav >
            <NavItem>
              <NavLink href="#">View Previous Meal Plans</NavLink>
            </NavItem>

          </Nav>



           </div>

          <MealPlan recipes={this.props.recipes} ingredients={this.props.ingredients} mealplan={this.props.mealplan}/>
        <LayoutFooter />

        </div>

    )
}
}
