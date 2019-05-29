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
        <Form style={{marginTop:75}}>
          <FormGroup row >
            <Label for="exampleEmail" md={2} >Email</Label>
            <Col md={{ span: 4, offset: 2 }}>
              <Input type="email" name="email" id="exampleEmail" placeholder="email"  />
            </Col>
          </FormGroup>
          <FormGroup row >
           <Label for="examplePassword" md ={2}>Password</Label>
            <Col md={{ span: 4, offset: 2 }} >
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

