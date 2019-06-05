import React, {Component} from 'react';
import {Button,Form, FormGroup, Label, Input, Container, Row,Col} from 'reactstrap';


import './styles/homepage.css';

import sign from './img/Sign.jpg';
import LayoutFooter from './Footer.jsx';



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

        <Container>
          <Row>
            <Col lg="6" md="12">
              <img class="home_image"  src={sign}  alt ="sign meal"/ >
            </Col>
            <Col lg="6" md="12">
              <Form className = "sign_up_form">

                <FormGroup row >
                  <Label for="exampleEmail" className= "sign_up_email">Email</Label>
                <Col >
                  <Input type="email" name="email" id="exampleEmail" placeholder="email"  inline />
                </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="examplePassword" className="sign_up_password">Password</Label>
                <Col >
                  <Input  type="password" name="password" id="examplePassword" placeholder="password " />
                </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="examplePassword" >Confirm Password</Label>
                <Col >
                  <Input type="password" name="password" id="confirmPassword" placeholder="confirm password" />
                </Col>
                </FormGroup>
              <Button variant="primary" type="submit" color="success" className="sign_up_button" href="/mealplan/new">
                Create Account
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <LayoutFooter />
    </div>

    );
  }
}

export default Signup;
