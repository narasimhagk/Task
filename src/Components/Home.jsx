import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import Navbar from "./Navbar";
import Video from "./Video";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">Insurance</h1>
          
          <p className="primary-text">
            It's a way to protect your loved ones, property, business, and lifestyle from financial losses and unexpected costs
          </p>
          <button className="secondary-button">
            Explore Now <FiArrowRight />
          </button>
          
        </div>
        <div className="home-image-section" >
        <div className="responsive-video-container" >
        <Video />
        </div>
          
        </div>
      </div>
    </div>
  );
};

export default Home;