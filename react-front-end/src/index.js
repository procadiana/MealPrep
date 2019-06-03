import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import './index.css';
import App from './App';

import * as serviceWorker from './serviceWorker';



ReactDOM.render(

  <Router>

    <Route path="/" component={props => <App {...props} />} />
  </Router>,



  document.getElementById('root')

);


serviceWorker.unregister();


