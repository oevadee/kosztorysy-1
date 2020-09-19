import React from "react";
import "./styles/App.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Routes
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import Offer from "./routes/Offer";
import Gallery from "./routes/Gallery";

// Components
import GalleryPreview from "./routes/GalleryPreview";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      {/* Home */}
      <Route exact path="/">
        <Navbar imageType="/img/logo-light.png" textColor="#fff" />
        <Home />
        <Footer />
      </Route>
      {/* Offer */}
      <Route exact path="/offer">
        <Navbar />
        <Offer />
        <Footer />
      </Route>
      {/* Gallery */}
      <Route exact path="/gallery">
        <Navbar />
        <Gallery />
        <Footer />
      </Route>
      {/* Gallery Preview */}
      <Route exact path="/gallery/preview">
        <GalleryPreview />
      </Route>
      {/* Contact */}
      <Route exact path="/contact">
        <Navbar imageType="/img/logo-contact.png" />
        <Contact />
      </Route>
    </Router>
  );
}

export default App;
