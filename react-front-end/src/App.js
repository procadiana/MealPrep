import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import {Route, Switch} from "react-router-dom";
import HomePage from './Homepage.jsx';
import Signup from './Signup.jsx';
import Layout from './Layout.jsx';
import Home from './Home.jsx'
import Login from './Login.jsx';
import MealSettings from './MealSettings.jsx';
import MealPlan from './MealPlan.jsx';
import Recipe from './Recipe.jsx';
import Archive from './Archive.jsx';

import * as cookie from 'react-cookies';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { EmailShareButton} from 'react-share';
import Moment from 'react-moment';



library.add(faCheck)
library.add(faHeart)
library.add(faTimes)
library.add(faPlus)
library.add(faUser)
library.add(faSpinner)


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      recipes: [],
      ingredients: [],
      mealplan: {},
      cookie: false,
      mealplans: [],
      authenticated: false

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


getCookie = key => {
  return cookie.load(key)
}

setCookie = (name, value) => {
  const now = new Date()
  now.setDate(now.getDate() + 14)

  this.setState({cookie: true})
  return cookie.save(name, value, {
    expires: now,
    path: '/'
  })
}

logout = (name) => {
  localStorage.clear();
  // return cookie.remove(name, { path: '/' })
}

 deleteItem(item){
    const data = this.state.recipes.filter(i => i.id !== item.id)
    this.setState({data})
  }

  // isLoggedIn = () =>{
  //   axios.get('/api/logedin/').then(response =>{
  //     console.log(response.data)
  //     this.setState({authenticated: response.data.authenticated})
  //   })
  // }
  setLogin = (loggedin ) => {
    this.setState({authenticated: loggedin});
  }



  componentDidMount(){
    let id = this.props.match.params.id
    axios.get(`/api/meal_plans/1`).then(response =>{
      this.setState({mealplan: response.data.mealplan, recipes: response.data.recipes, ingredients: response.data.ingredients} )
    })
    // this.getMealplans()
    // this.isLoggedIn()
  }

  render() {
    let content = "";
    const loggedInEmail = localStorage.getItem('email');
    if (loggedInEmail) {
    // if(this.state.authenticated){
      content = (

        <Switch>

          <Route exact path="/mealplan/new" component={MealSettings} />
          <Route exact path="/mealplan/:id" render={(props) => <MealPlan {...props} ></MealPlan>} />
          <Route exact path="/recipe" render={() => <Recipe deleteItem={this.deleteItem.bind(this)} /> } />//mealplan/:id/recipe??
          <Route exact path="/home" render={() => <Home ingredients={this.state.ingredients} mealplans={this.state.mealplans} recipes={this.state.recipes} mealplan={this.state.mealplan}/> } />
          <Route exact path="/mealplans" render={() => <Archive /> } />

        </Switch>

        );
    }
    return (
      <div className="App">
       <Layout authenticated = {Boolean(loggedInEmail)} logout={this.logout}/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" render={(props) => <Login {...props} setLogin={this.setLogin.bind(this)} getCookie={this.getCookie} setCookie={this.setCookie} />}  />
          {content}

        </Switch>



      </div>
    );
  }
}

export default App;
