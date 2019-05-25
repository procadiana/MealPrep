import React, {Component} from 'react';
import Nav from 'react-bootstrap/Nav';


export default class HomePage extends Component {
  render() {
    return (
      <div>

      <Nav className="justify-content-end" activeKey="/home">
    <Nav.Item>
      <Nav.Link href="/home">Recipes</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-1">About</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-2">Login</Nav.Link>
    </Nav.Item>

  </Nav>


        <h1>Hello World</h1>

      </div>
    );
  }
}
