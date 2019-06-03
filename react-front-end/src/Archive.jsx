import React, {Component} from 'react';

import {Container, Col,Row} from 'reactstrap';
import LayoutFooter from './Footer.jsx';
import axios from "axios";

import './styles/homepage.css';


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
      <h5 className= "archive_home_heading">Previous Meal Plans : </h5>

          <Container >



            <Row>
              <ul className="align">

                <li id="archive_item">{this.state.mealplans.map(item =>
                    <p key={item.id}> <span className="archive_time">Created at <Moment format="LLLL" date={item.created_at} /></span>
                    {this.state.recipes && Array.isArray(this.state.recipes[item.id]) && this.state.recipes[item.id].map(items =>
                     <Recipe recipe={items} />
                    )}
                    </p>
                )}
                </li>
              </ul>

          </Row>
          </Container>
      <LayoutFooter />

      </div>
    )
  }
}
