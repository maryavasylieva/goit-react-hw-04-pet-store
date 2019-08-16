import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import App from './App';

// ReactDOM.render(
//   <HashRouter basename="/">
//     <Route component={App} />
//   </HashRouter>,
//   document.getElementById('root'),
// );

ReactDOM.render(
  <BrowserRouter>
    <Route component={App} />
  </BrowserRouter>,
  document.getElementById('root'),
);
