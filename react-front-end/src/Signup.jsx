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
              <Form ClassName ="signup_form" style={{marginTop:70}}>

                <FormGroup row >
                  <Label for="exampleEmail" md={2}>Email</Label>
                <Col md={{ span: 4, offset: 2 }} >
                  <Input type="email" name="email" id="exampleEmail" placeholder="email"  />
                </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="examplePassword" md={2}>Password</Label>
                <Col md={{ span: 4, offset: 2 }}>
                  <Input type="password" name="password" id="examplePassword" placeholder="password " />
                </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="examplePassword" md= {2}>Confirm Password</Label>
                <Col md={{ span: 4, offset: 2 }}>
                  <Input type="password" name="password" id="confirmPassword" placeholder="confirm password" />
                </Col>
                </FormGroup>
              <Button variant="primary" type="submit" color="success">
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
