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
      <Container>
        <h4 className= "archive_home_heading">Previous Meal Plans  </h4>

              <ul>


                <li className="archive_item">{this.state.mealplans.map(item =>

                    <div key={item.id} > <h6 className="archive_time" >Created at <Moment format="LLLL" date={item.created_at} /> </h6><div className='food-flex'>
                   {this.state.recipes && Array.isArray(this.state.recipes[item.id]) && this.state.recipes[item.id].map(items =>
                    <span className="div_image"><Recipe recipe={items} /></span>
                    )}
                    </div> </div>
                )}
                </li>

              </ul>


      </Container>


      <LayoutFooter />

      </div>
    )
  }
}
