import React from 'react';
import { BrowserRouter } from 'react-router-dom'; 

import * as Components from './components';
import Router from './router';

export default function App() {
  return (
    <BrowserRouter>
      <Components.Navbar />
      <Router />
    </BrowserRouter>
  )
}
