import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import { Table } from 'react-bootstrap';
import BannerBackground from "../Assets/home-banner-background.png"

const Product_Benefits = () => {
  const [benefitsData, setBenefitsData] = useState([]);

  useEffect(() => {
    // Define the URL of your API
    const apiUrl = 'https://api.example.com/benefits'; // Replace with your API URL

    // Fetch data from the API
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // Assuming the API response is an array of benefit objects
        setBenefitsData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // Function to display custom status based on benefits_status
  const getStatusDisplay = (status) => {
    return status ? 'Benefits is Active' : 'Benefits is Inactive';
  };

  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        </div>
      <div className="table-container">
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Benefits ID</th>
              <th>Product ID</th>
              <th>Benefits Name</th>
              <th>Benefits Priority</th>
              <th>Benefits Status</th>
            </tr>
          </thead>
          <tbody>
            {benefitsData.map((benefit, index) => (
              <tr key={index}>
                <td>{benefit.benefits_id}</td>
                <td>{benefit.product_id}</td>
                <td>{benefit.benefits_name}</td>
                <td>{benefit.benefits_priority}</td>
                <td>{getStatusDisplay(benefit.benefits_status)}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
    
  );
};

export default Product_Benefits;
