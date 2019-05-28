import React, {Component} from 'react';
import {Button,Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from "axios";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './styles/homepage.css';
import Layout from './Layout.jsx';

export default class MealPlan extends Component {
  componentDidMount(){
    // const id = this.props.match.params.id
    // axios.get('/api/mealplan/${id}').then(response =>{
    //   this.setState({mealPlan: response.body })
    // })
    this.setState({mealPlan: {title:"Chicken Recipe", }})
  }

  render() {


    return (
        <div>
        <Layout />
        <img />
        <h3></h3>
        <span style={{display: 'inline'}}><Button>Like</Button><Button>Remove</Button><Button>Check</Button></span>

        </div>


      )
  }
}