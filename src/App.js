import "./App.css";
import Home from "./Components/Home";
import FeedBack from "./Components/FeedBack";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import QuoteCarousel from "./Components/QuoteCarousel";

function App() {
  return (
    <div className="App">
      <Home />
      <QuoteCarousel/>
      <FeedBack />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
