import React, {Component} from 'react';
import {Button,Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './styles/homepage.css';
import Layout from './Layout.jsx';

export default class MealSettings extends Component {
  render() {
    return (
        <div>
      <Layout />
         <Form>
         <FormGroup>
          <Label for="select">Number of days</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>3 days</option>
            <option>5 days</option>
          </Input>
        </FormGroup>
         <FormGroup>
          <Label for="select">Number of servings</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>2 servings</option>
            <option>4 servings</option>
          </Input>
        </FormGroup>



        {/*<FormGroup check>
        <p>Select Diet Type</p>
          <Label check>
          <Input type="checkbox" name="select" >Traditional</Input>
            {/*<Input type="checkbox" name="select" >Keto</Input>*/}
            {/*<Input type="checkbox" name="select" >Pescaterian</Input>
            <Input type="checkbox" name="select" >Vegetarian</Input>
            <Input type="checkbox" name="select" >Traditional</Input>
            </Label>*/}


        <FormGroup>
          <Label for="selectMulti">Select Diet Type</Label>
          <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
            <option>Traditional</option>
            <option>Keto</option>
            <option>Pescaterian</option>
            <option>Vegetarian</option>
            <option>Traditional</option>

          </Input>
        </FormGroup>
        <FormGroup check>
           <p>Select Allergies</p>
          <p><Label check>
            <Input type="checkbox" />{' '}
            Dairy
          </Label></p>
          <p><Label check>
            <Input type="checkbox" />{' '}
            Nuts
          </Label></p>
          <p><Label check>
            <Input type="checkbox" />{' '}
            Gluten
          </Label>
          </p>
           <p><Label check>
            <Input type="checkbox" />{' '}
            Eggs
          </Label>
          </p>
          <p><Label check>
            <Input type="checkbox" />{' '}
            Fish
          </Label>
          </p>
           <p><Label check>
            <Input type="checkbox" />{' '}
            Wheat
          </Label>
          </p>
          </FormGroup>

          <Button variant="primary" type="submit">
            Create Meal Plan
          </Button>
           </Form>

      </div>


      )
  }
}