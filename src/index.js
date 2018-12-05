import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, browserHistory } from 'react-router-dom';
import App from './App';
import './index.css';
import AutorBox from './autor/AutorBox'
//import {Router,Route} from 'react-router';

ReactDOM.render(
  (<Router>
  	<div>
	    <Route path="/" component={App}/>
	    <Route path="/autor" component={AutorBox}/>
	    <Route path="/livro"/>
    </div>
  </Router>),
  document.getElementById('root')
);