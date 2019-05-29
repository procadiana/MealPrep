import React, {Component} from 'react';
import {Button,Form, FormGroup, Label, Input, FormText, ListGroup, ListGroupItem,Container,Row,Col,Nav,NavItem,NavLink} from 'reactstrap';
import axios from "axios";
import LayoutFooter from './Footer.jsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



import './styles/homepage.css';
import Layout from './Layout.jsx';
import history from './history';

export default class MealPlan extends Component {

   constructor(props) {
        super(props);
        this.state = {
          mealplan: {},
          recipes: [],
          id: 0
        };

      }
  componentWillMount(){

    // const id = this.props.match.params.id
    axios.get(`/api/meal_plans/`).then(response =>{
        // const id = this.state.mealplan['id']
      this.setState({mealplan: response.data.mealplan, recipes: response.data.recipes, id: response.data.mealplan.id})
      history.push(`/mealplan/${this.state.id}`)

    })
  }


   // axios.get(`/api/meal_plan/`, { mealplan, recipes}).then((response) => {
   //    // Upon response, dispatch another event with the house data
   //    console.log(response)
   //    });
   //  });

  render() {
    const { mealplan, recipes} = this.state;

    return (
        <div>
        <Layout />
        <div className="float-right">

        <Button variant="primary" type="submit" color="success" className="new_plan_button">
              <FontAwesomeIcon icon="plus" href=''/>  New Meal Plan
        </Button>
          <Nav >
            <NavItem>
              <NavLink href="#">View Previous Meal Plans</NavLink>
            </NavItem>

          </Nav>
          </div>
        <Container style={{marginTop:50}}>
          <Row>
            <Col sm= "3">
              Shopping List
            </Col>


            <Col sm="9">
            <h6> Here's your meal plan for 4 days </h6>


        <ul>
        {recipes.map(item =>

          <li key={item['id']} style={{display: 'inline-block', margin:'15px'}}>
            <img src={item['img_source']} style={{width:150}} />
            <p><a href=''>{item['name']}</a></p>
            <span style={{display: 'inline', padding:'5px'}}><FontAwesomeIcon icon="heart" href=''/>  &nbsp;&nbsp; &nbsp;&nbsp;    <FontAwesomeIcon icon="times" href='' />  &nbsp;&nbsp;&nbsp;&nbsp;    <FontAwesomeIcon icon="check" href='' />  &nbsp;&nbsp;   </span>
          </li>
        )}
      </ul>
        <h6> Drag and Drop your favourite recipes </h6>
        <ul>
        {recipes.map(item =>

          <li key={item['id']} style={{display: 'inline-block', margin:'15px'}}>
            <img src={item['img_source']} style={{width:150}} />
            <p><a href=''>{item['name']}</a></p>
            <span style={{display: 'inline', padding:'5px'}}><FontAwesomeIcon icon="heart" href=''/>  &nbsp;&nbsp; &nbsp;&nbsp;    <FontAwesomeIcon icon="times" href='' />  &nbsp;&nbsp;&nbsp;&nbsp;    <FontAwesomeIcon icon="check" href='' />  &nbsp;&nbsp;   </span>
          </li>
        )}
      </ul>
      </Col>
      </Row>
      </Container>
      <LayoutFooter />

        </div>


      )
  }
}