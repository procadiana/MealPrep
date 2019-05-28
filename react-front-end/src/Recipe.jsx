import React, {Component} from 'react';
import {Button,Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from "axios";



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './styles/homepage.css';
import Layout from './Layout.jsx';

export default class Recipe extends Component {
  componentDidMount(){

    // const id = this.props.match.params.id
    // axios.get('/api/mealplan/${id}').then(response =>{
    //   this.setState({mealPlan: response.body })
    // })
    this.setState(
          {mealPlan: "xx"}
    //       name: "chicken",
    //       image: "https://images.unsplash.com/photo-1543352631-6b884eafab2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
        )
  }


  render() {


    return (
        <div>
        <Layout />
        <img href='{this.state.mealPlan.image}' />
        <h3></h3>
        <span style={{display: 'inline'}}><Button>Like</Button><Button>Remove</Button><Button>Check</Button></span>
        <p>{this.setState}</p>
        </div>


      )
  }
}