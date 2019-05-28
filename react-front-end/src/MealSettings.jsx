import React, {Component} from 'react';
import { withRouter } from "react-router-dom";

import {Button,Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from "axios";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './styles/homepage.css';
import Layout from './Layout.jsx';




class MealSettings extends Component {

  constructor() {
        super();
        this.state = {
          days: '3',
          servings: '2',
          diet: 'Traditional',
          allergies: []
        };
      }


  // sendMealSettings(data) {
  //   // axios.post('/api/mealplan', {data: data}).then(response => {
  //   //   const id = response.id; //
  //   //   this.props.history.push(`/mealplan/${id}`);
  //   // });

  //   console.log(data);
  // }

//Saves data from the form on submit and sends it to teh backend
  onSubmit = (e) => {
        e.preventDefault();
        const { days, servings, diet, allergies} = this.state;
        axios.post('/api/mealplan', { days, servings, diet, allergies})
          .then((result) => {
            const id = result.mealplan.id; //
            this.props.history.push(`/mealplan/${id}`);
          });
        console.log(this.state);
      }

//Saves data from the select form fields
  onChange =(e) => {
    let index;
    this.setState({ [e.target.name]: e.target.value });
  }

//Saves data from the cehckbox part of form
  onAllergiesChange =(e) => {
    let index;
    if (e.target.checked) {
      this.state.allergies.push(e.target.value)
      } else { //removes unchecked data from the array
        index = this.state.allergies.indexOf(e.target.value)
        this.state.allergies.splice(index, 1)
      }

      // console.log(this.state);
  }

  render() {
    const { days, servings, diet, allergies} = this.state;

    return (
      <div>
      <Layout />
         <Form onSubmit={this.onSubmit}>
         <FormGroup>
          <Label for="select" >Number of days</Label>
          <Input type="select" name="days" value={days} onChange={this.onChange} >
            <option>3 </option>
            <option>5 </option>
          </Input>
        </FormGroup>
         <FormGroup>
          <Label for="select" >Number of servings</Label>
          <Input type="select" name="servings" value={servings} onChange={this.onChange}>
            <option>2 </option>
            <option>4 </option>
          </Input>
        </FormGroup>


        <FormGroup>
          <Label for="selectMulti" >Select Diet Type</Label>
          <Input type="select" name="diet" value={diet} onChange={this.onChange}>
            <option>Traditional</option>
            <option>Keto</option>
            <option>Pescaterian</option>
            <option>Vegetarian</option>
            <option>Paleo</option>

          </Input>
        </FormGroup>
        <FormGroup check name='allergies'>
           <p>Select Allergies</p>
          <p><Label check name='dairy'>
            <Input type="checkbox" value='dairy-free' onChange={this.onAllergiesChange}/>{' '}
            Dairy
          </Label></p>
          <p><Label check name='nuts'>
            <Input type="checkbox" value='tree-nut-free' onChange={this.onAllergiesChange}/>{' '}
            Nuts
          </Label></p>
          <p><Label check name='gluten'>
            <Input type="checkbox" value='gluten-free' onChange={this.onAllergiesChange}/>{' '}
            Gluten
          </Label>
          </p>
           <p><Label check name='eggs'>
            <Input type="checkbox" value='egg-free' onChange={this.onAllergiesChange} />{' '}
            Eggs
          </Label>
          </p>
          <p><Label check name='fish'>
            <Input type="checkbox" value='fish-free' onChange={this.onAllergiesChange} />{' '}
            Fish
          </Label>
          </p>
           <p><Label check name='wheat'>
            <Input type="checkbox" value='wheat-free' onChange={this.onAllergiesChange}/>{' '}
            Wheat
          </Label>
          </p>
          </FormGroup>

          <Button variant="primary" type="submit" name="meal-plan">
            Create Meal Plan
          </Button>
           </Form>

      </div>


      )
  }
}


export default withRouter(MealSettings)