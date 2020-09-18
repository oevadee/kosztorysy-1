import React from 'react';
import './styles/App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom' 

// Routes
import Home from './routes/Home';
import Contact from './routes/Contact';
import Offer from './routes/Offer';
import Gallery from './routes/Gallery';

// Components
import GalleryPreview from './routes/GalleryPreview'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (<>
      <Router>
        {/* Trzeba się zastanowić co zrobić z navem, ponieważ zawsze jest nad elementami co psuje GalleryPreview */}

        <Switch>
          <Route exact path="/">
            <Navbar imageType='/img/logo-light.png' textColor="#fff"/>
            <Home />
          </Route>
          <Route exact path="/offer">
            <Navbar />
            <Offer />
          </Route>
          <Route exact path="/gallery/page/:page" >
            <Navbar />
            <Gallery />
          </Route>
          <Route exact path="/gallery/preview/:id">
            <GalleryPreview />
          </Route>
          <Route exact path="/contact">
            <Navbar />
            <Contact />
          </Route>
        </Switch>
        <Footer />
      </Router>
      </>
  );
}

export default App;
