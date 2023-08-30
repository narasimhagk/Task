import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import FeedBack from './Components/FeedBack';
import Testimonial from './Components/Testimonial';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import QuoteCarousel from './Components/QuoteCarousel';
import DataGridTypeMatrixTable from './Components/DataGridTypeMatrixTable';
import Csv from './Components/Csv';
import Admin from './Components/Admin';

function App() {
  return (
    <Router>
      <div className="App">
        <Home />
        <QuoteCarousel />
        <FeedBack />
        <Testimonial />
        <Contact />
        <Footer />
        {/* <DataGridTypeMatrixTable /> */}
        <Switch>
          <Route path="/health-insurance" component={Csv} />
          <Route path="/admin" component={Admin} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
