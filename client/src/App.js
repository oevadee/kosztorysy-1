import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom' 

// Routes
import Home from './routes/Home';
import Contact from './routes/Contact';
import Offer from './routes/Offer';
import Gallery from './routes/Gallery';

// Components
import GalleryPreview from './routes/GalleryPreview'

function App() {
  return (<>
      <Router>
        {/* Trzeba się zastanowić co zrobić z navem, ponieważ zawsze jest nad elementami co psuje GalleryPreview */}

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
          <Route exact path="/gallery/preview">
            <GalleryPreview />
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
