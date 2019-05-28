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
        <Col xs="6">
        <img class="home_image" width="100%" src={log} style={{ height: 400 }} alt ="login meal image"/ >
        </Col>
        <Col xs="6">
        <Form style={{marginTop:50}}>
          <FormGroup>
            <Label for="exampleEmail" >Email</Label>
            <Col>
              <Input type="email" name="email" id="exampleEmail" placeholder="email"  />
            </Col>
          </FormGroup>
          <FormGroup>
           <Label for="examplePassword" >Password</Label>
            <Col >
            <Input type="password" name="password" id="examplePassword" placeholder="password " />

            </Col>

          </FormGroup>
          <Button variant="primary" type="submit">
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

