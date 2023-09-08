// ProductFeatures.jsx

import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import BannerBackground from '../Assets/home-banner-background.png';
import Add from './Add';
import Update from './Update'; // Import the Update component

const ProductFeatures = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [data, setData] = useState([]); // Your data goes here


  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleDeleteClick = () => {
    // Show a confirmation dialog
    const confirmDelete = window.confirm('Are you sure you want to delete the data?');
    
    if (confirmDelete) {
      // Clear or delete the data (replace with your logic)
      setData([]);
    }
  };

  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>

        {/* Dropdown menu */}
        <div className="dropdown">
          <select value={selectedOption} onChange={handleOptionChange}>
            <option value="">Select an option</option>
            <option value="add">Add</option>
            <option value="update">Update</option>
            <option value="delete">Delete</option>
          </select>
        </div>

        {/* Conditionally render the components based on the selected option */}
        {selectedOption === 'add' && <Add />}
        {selectedOption === 'update' && <Update />}
        {selectedOption === 'delete' && (
          <div>
            <button onClick={handleDeleteClick}>Delete</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductFeatures;
