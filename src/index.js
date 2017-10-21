import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import About from './Container/About/About';
import './Theme/GlobalStyle';
import {BrowserRouter, Route} from "react-router-dom";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route path={`${process.env.PUBLIC_URL}/`} exact component={App} />
      <Route path={`${process.env.PUBLIC_URL}/about`} exact component={About} />
    </div>
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
