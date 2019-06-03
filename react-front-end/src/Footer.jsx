import React, {Component} from 'react';





export default class LayoutFooter extends Component {
  render() {
    return (
     <div>
        <footer className="fixed-bottom">
        <small className="text-muted float-left footer_font_size"> Poweredby Edamam </small>
        <small className="text-muted float-right footer_font_size">{'\u00A9'}Copyright 2019 MealPrep LTD </small>


        </footer>
      </div>
    );
  }
}

