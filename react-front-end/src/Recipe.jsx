import React, {Component} from 'react';
import axios from "axios";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import Figure from 'react-bootstrap/Figure'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './styles/homepage.css';


export default class Recipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorite: false,
      recipe: [],
      color: 'black'
      };
    this.addNotification = this.addNotification.bind(this);
    this.notificationDOMRef = React.createRef();

  }


  componentDidMount() {
    if(this.props.recipe.favorite){
      this.setState({favorite: true})
    }

  }


  addNotification() {
    var favorite = this.state.favorite
    if (this.state.favorite){
      this.setState({
        favorite: false,
        color: 'black'
      })

      this.notificationDOMRef.current.addNotification({
          type: "warning",
          message: "Your recipe was removed from favourites.",
          insert: "top",
          container: "top-center",
          animationIn: ["animated", "fadeIn"],
          animationOut: ["animated", "fadeOut"],
          dismiss: { duration: 500 },
          dismissable: { click: true }
        });
      // localStorage.favorite = JSON.stringify(favorite);
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
          favorite: true,
          color:'red'
        })


// window.location.reload()
    }axios.post(`/api/recipes/${this.props.recipe.id}/favorite`)
          .then((response) =>{
        })

}

  render() {



    const item = this.props.recipe

    return (

        <li key={item['id']} className ="recipe_display">
        <ReactNotification ref={this.notificationDOMRef} />
            <a href={item['shareAs']}>
            <Figure className="recipe_bg">
            <Figure.Image
            width={200}
            height={200}
            alt="171x180"
            src={item['img_source']}/>
            </Figure>

            </a>
            <Figure.Caption>
            <span>
            <a className="recipe_link" href={item['shareAs']}>{item['name']}</a>
            </span>
            </Figure.Caption>
            <FontAwesomeIcon icon="heart" onClick={this.addNotification}  className={this.state.favorite ? "red" : "black"} />  &nbsp;&nbsp; &nbsp;&nbsp;
            <FontAwesomeIcon icon="times" onClick={this.props.deleteItem}/>  &nbsp;&nbsp;&nbsp;&nbsp;
        </li>


      )
  }
}
