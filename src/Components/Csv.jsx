import React, { useState } from 'react';
import CSVReader from 'react-csv-reader';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Navbar from "./Navbar"
import "../App.css"

function Csv() {
  const [csvData, setCsvData] = useState([]);

  const handleCsvData = (data) => {
    setCsvData(data);
  };

  return (
    <div className="home-container">
    <Navbar/>
    
    <div className="container mt-5">
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
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
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
