// ProductFeatures.jsx

import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import BannerBackground from '../Assets/home-banner-background.png';
import Add from './Add';
import Update from './Update';
import Delete from './Delete';

const ProductFeatures = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [menuVisible, setMenuVisible] = useState(false);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    setMenuVisible(false); // Close the menu when an option is selected
  };

  const handleMenuToggle = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>

        {/* Responsive dropdown menu */}
        <div className="dropdown">
          <div className="menu-toggle" onClick={handleMenuToggle}>
            <span className="menu-label">Options</span>
            <span className={`menu-icon ${menuVisible ? 'open' : ''}`}></span>
          </div>
          <div className={`options ${menuVisible ? 'open' : ''}`}>
            <select value={selectedOption} onChange={handleOptionChange}>
              <option value="">Select an option</option>
              <option value="add">Add</option>
              <option value="update">Update</option>
              <option value="delete">Delete</option>
            </select>
          </div>
        </div>

        {/* Conditionally render the components based on the selected option */}
        {selectedOption === 'add' && <Add />}
        {selectedOption === 'update' && <Update />}
        {selectedOption === 'delete' && <Delete />}
      </div>
    </div>
  );
};

export default ProductFeatures;
