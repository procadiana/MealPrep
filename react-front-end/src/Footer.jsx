import React, {Component} from 'react';







export default class LayoutFooter extends Component {
  render() {
    return (
     <div>
        <footer className="fixed-bottom">
        <small className="text-muted float-left"> Poweredby Edamam </small>
        <small className="text-muted float-right">{'\u00A9'}Copyright 2019 MealPrep LTD </small>


        </footer>
      </div>
    );
  }
}

