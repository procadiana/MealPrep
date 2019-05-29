import React, {Component} from 'react';
import {Container, Row, Col,Button,Form, FormGroup, Label, Input } from 'reactstrap';
import './styles/homepage.css';
import Layout from './Layout.jsx';
import log from './img/Log.jpg';

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
      <Container >
      <Row>
        <Col lg="6" md="12">
        <img class="home_image" width="100%" src={log} style={{ height: 400 }} alt ="login meal image"/ >
        </Col>
        <Col lg="6" md="12">
        <Form  className= "login_form">
          <FormGroup row >
            <Label for="exampleEmail" inline className="login_form_email">Email</Label>
            <Col >
              <Input type="email" name="email" id="exampleEmail" placeholder="email"  /> <br />
            </Col>
          </FormGroup>
          <FormGroup row>
           <Label for="examplePassword" inline>Password</Label>
            <Col >
            <Input type="password" name="password" id="examplePassword" placeholder="password " />

            </Col>

          </FormGroup>
          <Button variant="primary" type="submit"  color="success" className="login_button" >
            Log-in
          </Button>
        </Form>
        </Col>
      </Row>

        </Container>
      </div>

    )
  }
}

