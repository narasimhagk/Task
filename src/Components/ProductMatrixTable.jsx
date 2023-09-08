import React, { useEffect, useState } from 'react';
import Navbar from "./Navbar"
import BannerBackground from "../Assets/home-banner-background.png"
import Table from 'react-bootstrap/Table';
import "../App.css";


const ProductMatrixTable = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    // Define the URL of your API
    const apiUrl = 'https://api.example.com/products';

    // Fetch data from the API
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // Assuming the API response is an array of product objects similar to your sample data
        setProductData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="home-container">
    <Navbar/>
        <div className="home-banner-container">
          <div className="home-bannerImage-container">
            <img src={BannerBackground} alt="" />
          </div>
          
    <div className="product-matrix">
    <Table striped bordered hover>
        <thead>
          <tr>
            <th>Insurance Name</th>
            <th>Product Name</th>
            <th>Claim Status</th>
            <th>Premium</th>
            <th>Min Age - Max Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {productData.map((product, index) => (
            <tr key={index}>
              <td>{product.insuranceName}</td>
              <td>{product.productName}</td>
              <td>{product.claimStatus}</td>
              <td>{product.premium}</td>
              <td>{`${product.minAge} - ${product.maxAge}`}</td>
              <td>
                <button>Download PDF</button>
                <a href="#">More Details</a>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
    </div>
    </div>
  );
};

export default ProductMatrixTable;
