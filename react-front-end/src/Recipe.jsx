import React, {Component} from 'react';
import {Button,Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from "axios";

import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './styles/homepage.css';
import Layout from './Layout.jsx';

export default class Recipe extends Component {
  constructor(props) {
    super(props);
    this.state = {

      };
    this.addNotification = this.addNotification.bind(this);
    this.notificationDOMRef = React.createRef();
  }


  addNotification() {
    if (this.state.favourite){
      this.setState({
        favourite: false
      })
      }else {
        this.notificationDOMRef.current.addNotification({
          type: "success",
          message: "Your recipe was added to favourites.",
          insert: "top",
          container: "top-center",
          animationIn: ["animated", "fadeIn"],
          animationOut: ["animated", "fadeOut"],
          dismiss: { duration: 500 },
          dismissable: { click: true }
        });
        this.setState({
        favourite: true
      })
    }
    //insert get route to axios
  }



  render() {

    const item = this.props.recipe
    return (
        <>

        <li key={item['id']} style={{display: 'inline-block', margin:'15px'}} >
        <ReactNotification ref={this.notificationDOMRef} />
            <a href={item['shareAs']}><img  src={item['img_source']} style={{width:150}} /></a>
            <p><a href={item['shareAs']}>{item['name']}</a></p>
            <span style={{display: 'inline', padding:'5px'}}><FontAwesomeIcon icon="heart" href='' onClick={this.addNotification} style={{color: this.state.favourite ? 'red': 'black'}}  />  &nbsp;&nbsp; &nbsp;&nbsp;    <FontAwesomeIcon icon="times" href='' />  &nbsp;&nbsp;&nbsp;&nbsp;    <FontAwesomeIcon icon="check" href='' />  &nbsp;&nbsp;   </span>
        </li>
        </>


      )
  }
}