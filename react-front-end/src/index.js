import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './index.css';
import App from './App';
import HomePage from './Homepage.jsx';
import * as serviceWorker from './serviceWorker';
import Signup from './Signup.jsx';
import Layout from './Layout.jsx';



ReactDOM.render(

  <Router>
    <Route path="/" component={App} />
  </Router>,



  document.getElementById('root')

);


serviceWorker.unregister();


