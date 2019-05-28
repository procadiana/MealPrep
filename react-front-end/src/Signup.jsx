import React, {Component} from 'react';
import {Button,Form, FormGroup, Label, Input, Container, Row,Col} from 'reactstrap';


import './styles/homepage.css';
import Layout from './Layout.jsx';
import sign from './img/Sign.jpg';



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
        <Container>
          <Row>
            <Col sm="6">
              <img class="home_image" width="100%" src={sign} style={{ height: 400 }} alt ="sign meal"/ >
            </Col>
            <Col sm="6">
              <Form ClassName ="signup_form" style={{marginTop:50}}>

                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                <Col >
                  <Input type="email" name="email" id="exampleEmail" placeholder="email"  />
                </Col>
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword">Password</Label>
                <Col >
                  <Input type="password" name="password" id="examplePassword" placeholder="password " />
                </Col>
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword">Confirm Password</Label>
                <Col >
                  <Input   type="password" name="password" id="confirmPassword" placeholder="confirm password" />
                </Col>
                </FormGroup>
              <Button variant="primary" type="submit" >
                Create Account
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>

    );
  }
}

export default Signup;
