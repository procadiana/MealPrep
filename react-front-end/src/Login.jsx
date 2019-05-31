import React, {Component} from 'react';
import {Container, Row, Col,Button,Form, FormGroup, Label, Input } from 'reactstrap';
import './styles/homepage.css';
import Layout from './Layout.jsx';
import log from './img/Log.jpg';
import { logout, getCookie, setCookie } from './App';
import axios from "axios";
import LayoutFooter from './Footer.jsx';


export default class Login extends Component {

  constructor(){
        super();
        this.state = {
            email: '',
            password: '',
            cookie: '',

        };
    }

  onChange =(e) => {
    this.setState({ [e.target.name]: e.target.value });
  }


  handleLogin = (e) => {
        e.preventDefault();
        const { email, password} = this.state;
        axios.post('/api/login', { email, password })
          .then((result) => {
              if(result.data.authenticated){
                localStorage.setItem('email', this.state.email);

                this.props.setLogin(true);
              }
          });
        // window.location.reload()
        this.props.history.push('/home');
      }

  render() {
    const { email,password,cookie,  } = this.state;


    return (

      <div>

      <Container >
      <Row>
        <Col lg="6" md="12">
        <img className="home_image" width="100%" src={log} style={{ height: 400 }} alt ="login meal image"/ >
        </Col>
        <Col lg="6" md="12">
        <Form  className= "login_form" onSubmit={this.handleLogin}>
          <FormGroup row >
            <Label for="exampleEmail"  className="login_form_email" >Email</Label>
            <Col >
              <Input type="email" name="email" id="exampleEmail" placeholder="email" defaultValue={email} onChange={this.onChange} /> <br />
            </Col>
          </FormGroup>
          <FormGroup row>
           <Label for="examplePassword" >Password</Label>
            <Col >
            <Input type="password" name="password" id="examplePassword" defaultValue={password} placeholder="password " onChange={this.onChange}/>

            </Col>

          </FormGroup>
          <Button variant="primary" type="submit"  color="success" className="login_button" >
            Log-in
          </Button>
        </Form>
        </Col>
      </Row>

        </Container>
        <LayoutFooter />
      </div>

    )
  }
}

