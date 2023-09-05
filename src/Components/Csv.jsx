import React, { useState, useEffect } from 'react';
import CSVReader from 'react-csv-reader';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Carousel from 'react-bootstrap/Carousel';
import Navbar from "./Navbar";
import "../App.css";
import BannerBackground from "../Assets/home-banner-background.png";

function Csv() {
  const [csvData, setCsvData] = useState([]);
  const [selectedRowIndex, setSelectedRowIndex] = useState(null); // Track selected row index
  const [selectedRowData, setSelectedRowData] = useState(null); // Track selected row data

  const handleCsvData = (data) => {
    setCsvData(data);
  };

  const handleRowClick = (rowIndex) => {
    setSelectedRowIndex(rowIndex);
    setSelectedRowData(csvData[rowIndex + 1]); // Set selected row data
  };

  useEffect(() => {
    // Display the details of the first product initially
    if (csvData.length > 1) {
      setSelectedRowData(csvData[1]);
    }
  }, [csvData]);

  return (
    <div className="home-container">
      <Navbar/>
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
      </div>
          
      <div className="container mt-5">
        <div className="container mt-4">
          <div className="row">
            <div className="col-sm-6">
              {selectedRowData && (
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Selected Row Details</h5>
                    {selectedRowData.map((cell, index) => (
                      <p className="card-text" key={index}>
                        Column {index + 1}: {cell}
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          {/* Additional Card for Different Products */}
          <div className="col-sm-6 mt-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Different Products</h5>
                <p className="card-text">Display different products here.</p>
              </div>
            </div>
          </div>
        </div>
        <h1>CSV File Reader</h1>
        <CSVReader onFileLoaded={handleCsvData} />
        <Table striped bordered hover>
          <thead>
            <tr>
              {csvData[0] && csvData[0].map((header, index) => (
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
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
    </div>
    
  );
}

export default Csv;
