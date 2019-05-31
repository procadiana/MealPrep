import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import {Container, Navbar, NavbarBrand, Nav, NavItem, NavLink, Row, Col,Card,CardImg,ListGroup,ListGroupItem} from 'reactstrap';
import {Route, Switch} from "react-router-dom";
import HomePage from './Homepage.jsx';
import Signup from './Signup.jsx';
import Layout from './Layout.jsx';
import Home from './Home.jsx'
import Login from './Login.jsx';
import MealSettings from './MealSettings.jsx';
import MealPlan from './MealPlan.jsx';
import Recipe from './Recipe.jsx';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { EmailShareButton} from 'react-share';





library.add(faCheck)
library.add(faHeart)
library.add(faTimes)
library.add(faPlus)
library.add(faUser)





class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      recipes: [],
      ingredients: [],
      mealplan: {}
    }
  }

  // fetchData = () => {
  //   axios.get('/api/data') // You can simply make your requests to "/api/whatever you want"
  //   .then((response) => {
  //     // handle success
  //     console.log(response.data) // The entire response from the Rails API

  //     console.log(response.data.message) // Just the message
  //     this.setState({
  //       message: response.data.message
  //     });
  //   })
  // }
//users mealplans

  getMealplans = () =>{
    axios.get(`/api/meal_plans/`).then(response =>{
      const mealPlans = [{}]
    })
 }

  componentDidMount(){
    let id = this.props.match.params.id
    axios.get(`/api/meal_plans/1`).then(response =>{
      this.setState({mealplan: response.data.mealplan, recipes: response.data.recipes, ingredients: response.data.ingredients} )
    })
    this.getMealplans()
  }

  render() {
    return (
      <div className="App">
       <Layout />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/mealplan/new" component={MealSettings} />
          <Route exact path="/mealplan/:id" component={(props) => <MealPlan {...props} ></MealPlan>} />
          <Route exact path="/recipe" component={Recipe} /> //mealplan/:id/recipe??
          <Route exact path="/home" component={() => <Home ingredients={this.state.ingredients} recipes={this.state.recipes} mealplan={this.state.mealplan}/> } />



        </Switch>



        {/*<h1>{ this.state.message }</h1>
        <button onClick={this.fetchData} >
          Fetch Data
        </button>*/}
      </div>
    );
  }
}

export default App;
