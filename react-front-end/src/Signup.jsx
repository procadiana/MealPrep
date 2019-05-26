import React, {Component} from 'react';
import {Button,Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles/homepage.css';
import Layout from './Layout.jsx';



class Signup extends Component {
   constructor(){
        super();
        this.state = {
            email: '',
            password: '',
            password_confirmation: '',
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
        <FormGroup>
          <Label for="examplePassword">Confirm Password</Label>
          <Input type="password" name="password" id="confirmPassword" placeholder="confirm password" />
        </FormGroup>



          <Button variant="primary" type="submit">
            Create Account
          </Button>
           </Form>

      </div>

    )
  }
}

export default Signup;
