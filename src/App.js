import './App.css';
import Home from './Components/Home';
import FeedBack from './Components/FeedBack';
import Testimonial from './Components/Testimonial';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import QuoteCarousel from './Components/QuoteCarousel';
import DataGridTypeMatrixTable from './Components/DataGridTypeMatrixTable';
import Csv from "./Components/Csv"


function App() {
  return (
    <div className="App">
       <Home />
       <QuoteCarousel />
       <FeedBack />
       <Testimonial />
       <Contact />
       <Footer />
       {/* <DataGridTypeMatrixTable /> */}
      {/* <Csv/> */}
    </div>
  );
}

export default App;
