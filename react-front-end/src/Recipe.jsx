import React, {Component} from 'react';

import axios from "axios";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './styles/homepage.css';


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

         axios.post(`/api/recipes/${this.props.recipe.id}/favorite`)
          .then((response) =>{

        })
      }
  }




  // isFavourite = () =>
  //   axios.get(`/api/recipe/${this.props.recipe.id}`).then(response =>{
  // }



  render() {

    const item = this.props.recipe
    return (
        <>

        <li key={item['id']} className ="recipe_display">
        <ReactNotification ref={this.notificationDOMRef} />
            <a href={item['shareAs']}><img  src={item['img_source']} className= "recipe_item" /></a>
            <p><a href={item['shareAs']}>{item['name']}</a></p>
            <span style={{display: 'inline', padding:'5px'}}>
            <FontAwesomeIcon icon="heart" href='' onClick={this.addNotification} style={{color: this.state.favourite  ? 'red': 'black'}}  />  &nbsp;&nbsp; &nbsp;&nbsp;
            <FontAwesomeIcon icon="times" href=''  />  &nbsp;&nbsp;&nbsp;&nbsp;
            <FontAwesomeIcon icon="check" href='' />  &nbsp;&nbsp;   </span>
        </li>

        </>
      )
  }
}