import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom' 

import Home from './routes/Home';
import Contact from './routes/Contact';
import Offer from './routes/Offer';
import Gallery from './routes/Gallery';

function App() {
  return (<>
      <Router>
        <h1>Navbar hehe</h1>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/pffer">
            <Offer />
          </Route>
          <Route exact path="/gallery">
            <Gallery />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>




        </Switch>

      </Router>
      </>
  );
}

export default App;
