import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import {Container, Navbar, NavbarBrand, Nav, NavItem, NavLink, Row, Col,Card,CardImg,ListGroup,ListGroupItem} from 'reactstrap';
import {Route, Switch} from "react-router-dom";
import HomePage from './Homepage.jsx';
import Signup from './Signup.jsx';
import Layout from './Layout.jsx';
import Login from './Login.jsx';
import MealSettings from './MealSettings.jsx';
import MealPlan from './MealPlan.jsx'

import { faCheck } from '@fortawesome/free-solid-svg-icons';
library.add(faCheck)



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 'Click the button to load data!'
    }
  }

  fetchData = () => {
    axios.get('/api/data') // You can simply make your requests to "/api/whatever you want"
    .then((response) => {
      // handle success
      console.log(response.data) // The entire response from the Rails API

      console.log(response.data.message) // Just the message
      this.setState({
        message: response.data.message
      });
    })
  }



  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/mealplan/new" component={MealSettings} />
          <Route exact path="/mealplan/:id" component={MealPlan} />


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
