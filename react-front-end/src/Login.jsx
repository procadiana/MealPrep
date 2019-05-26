import React, {Component} from 'react';
import {Button,Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles/homepage.css';
import Layout from './Layout.jsx';

export default class Login extends Component {

   constructor(){
        super();
        this.state = {
            email: '',
            password: ''
        };
    }




  render() {

    return (

      <div>
      <Layout />
         <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
        </FormGroup>

          <Button variant="primary" type="submit">
            Log-in
          </Button>
           </Form>

      </div>

    )
  }
}

