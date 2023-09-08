import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Navbar from "./Navbar";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { Carousel } from 'react-responsive-carousel'; // Import Carousel component from react-responsive-carousel
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import Papa from 'papaparse'; // Import PapaParse for CSV parsing
import "../App.css";
import BannerBackground from "../Assets/home-banner-background.png";
import ProductImage1 from "../Assets/Logo.png"; // Import your product images
import ProductImage2 from "../Assets/Logo.png"; // Import your product images
import axios from 'axios';

function Csv() {
  const [apiData, setApiData] = useState([]);
  const [csvData, setCsvData] = useState([]);
  const [selectedRowIndex, setSelectedRowIndex] = useState(null); // Track selected row index
  const [selectedRowData, setSelectedRowData] = useState(null); // Track selected row data
  const [error, setError] = useState(null);

  const fetchApiData = async () => {
    try {
      // Replace with your actual API endpoint URL
      const response = await axios.get('https://your-api-url-here.com/users');
      setApiData(response.data);
    } catch (error) {
      console.error('Error fetching API data:', error);
      setError('An error occurred while fetching API data.');
    }
  };

  const handleRowClick = (rowIndex) => {
    setSelectedRowIndex(rowIndex);
    setSelectedRowData(csvData[rowIndex]);
  };

  useEffect(() => {
    // Fetch API data when the component mounts
    fetchApiData();

    // You can also set initial CSV data here
    const initialCsvData = [
      ['Insurance Name', 'Product Name', 'Claim Status', 'Premium', 'Min Age - Max Age', 'Actions'],
      ['Sample Insurance', 'Sample Product', 'Active', '$100', '18-65', 'Download'],
      // Add more CSV data as needed
    ];
    setCsvData(initialCsvData);
  }, []); // The empty dependency array ensures this effect runs only once when the component mounts

  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
      </div>

      <div className="container mt-5">
        <h1>CSV File Reader</h1>

        <Row>
          {/* Display selected row details in a card */}
          <Col sm={6}>
            {selectedRowData && (
              <Card className="mt-3">
                <Card.Body>
                  <h5 className="card-title">Selected Row Details</h5>
                  {selectedRowData.map((cell, index) => (
                    <p className="card-text" key={index}>
                      {csvData[0][index]}: {cell}
                    </p>
                  ))}
                </Card.Body>
              </Card>
            )}
          </Col>

          {/* Display other products with images in a vertical carousel */}
          <Col sm={6}>
            <Card className="mt-3">
              <Card.Body>
                <h5 className="card-title">Other Products</h5>
                <Carousel vertical>
                  {apiData.map((product, index) => (
                    <div key={index}>
                      <Image src={ProductImage1} alt={`Product ${index + 1}`} />
                    </div>
                  ))}
                </Carousel>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Insurance Name</th>
              <th>Product Name</th>
              <th>Claim Status</th>
              <th>Premium</th>
              <th>Min Age - Max Age</th>
              <th>Actions</th>
              {csvData[0] &&
                csvData[0].slice(6).map((header, index) => (
                  <th key={index}>{header}</th>
                ))}
            </tr>
          </thead>
          <tbody>
            {csvData.slice(1).map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={selectedRowIndex === rowIndex ? 'selected-row' : ''}
                onClick={() => handleRowClick(rowIndex)}
              >
                {row.slice(0, 6).map((cell, cellIndex) => (
                  <td key={cellIndex}>{cell}</td>
                ))}
                {row.slice(6).map((cell, cellIndex) => (
                  <td key={cellIndex}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Csv;
