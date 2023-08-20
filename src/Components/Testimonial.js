import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ProfilePic1 from "../Assets/john-doe-image.png";
import img1 from "../Assets/img1.jpg";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
      </div>
      <div className="testimonial-section-center">
        <Carousel showThumbs={false} showStatus={false} autoPlay={true} infiniteLoop={true}>

          <div className="testimonial-slide">
            <img src={ProfilePic1} style={{ width: "50px", height: "50px" }} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
              elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
            </p>
            <div className="testimonials-stars-container">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            <h2>John Doe</h2>
          </div>
          <div className="testimonial-slide">
            <img src={img1} style={{ width: "50px", height: "50px" }} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
              elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
            </p>
            <div className="testimonials-stars-container">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            <h2>John Doe</h2>
          </div>
          {/* Add more slides as needed */}
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonial;
