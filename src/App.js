import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Import BrowserRouter and Route
import Home from './Components/Home';
import FeedBack from './Components/FeedBack';
import Testimonial from './Components/Testimonial';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import QuoteCarousel from './Components/QuoteCarousel';
import DataGridTypeMatrixTable from './Components/DataGridTypeMatrixTable';
import Csv from './Components/Csv';
import Admin from './Components/Admin'; 
import Navbar from './Components/Navbar';

function App() {
  return (
    <Router> {/* Wrap the entire app in a Router */}
      <div className="App">
        {/* <Navbar />
        <Home/>
        <FeedBack/>
        <Testimonial/>
        <Contact/>
        <QuoteCarousel/>

        <Switch>
          <Route path="/csv" component={Csv} />
          <Route path="/admin" component={Admin} />
        </Switch>
        <Footer /> */}
        <Admin/>
      </div>
    </Router>
  );
}

export default App;
