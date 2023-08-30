import React, { useState } from 'react';
import Navbar from "./Navbar";
import BannerBackground from "../Assets/home-banner-background.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown, DropdownButton, Button, Modal } from 'react-bootstrap';

const Admin = () => {
  const [rowData, setRowData] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null); // Track selected row index
  const [showResetConfirmation, setShowResetConfirmation] = useState(false);

  const fetchData = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      setRowData(data);
      setSelectedRow(null); // Reset selected row
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const resetData = () => {
    if (rowData.length > 0) {
      setShowResetConfirmation(true);
    }
  };

  const confirmReset = () => {
    setRowData([]);
    setSelectedRow(null); // Reset selected row
    setShowResetConfirmation(false);
  };

  const cancelReset = () => {
    setShowResetConfirmation(false);
  };

  const selectRow = (rowIndex) => {
    setSelectedRow(rowIndex);
  };

  const handleEditRow = (newValue, property, rowIndex) => {
    // Update the selected row's property with the new value
    const updatedRowData = [...rowData];
    updatedRowData[rowIndex][property] = newValue;
    setRowData(updatedRowData);
  };

  const handleDeleteRow = (rowIndex) => {
    // Remove the selected row from the data
    const updatedRowData = [...rowData];
    updatedRowData.splice(rowIndex, 1);
    setRowData(updatedRowData);
    setSelectedRow(null); // Reset selected row
  };

  const addRow = () => {
    const newRow = {
      username: 'New Username',
      name: 'New Name',
      email: 'new@example.com',
    };
    setRowData([...rowData, newRow]);
    setSelectedRow(null); // Reset selected row
  };

  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
      </div>
      <div className="container mt-5">
        <h1>Options:</h1>
        <DropdownButton id="dropdown-basic-button" title="Dropdown button">
          <Dropdown.Item onClick={fetchData}>Fetch Data</Dropdown.Item>
          <Dropdown.Item onClick={resetData}>Reset</Dropdown.Item>
        </DropdownButton>
        {rowData.length > 0 && (
          <div className="mt-4">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Actions</th>
                  {/* Add more column headers as needed */}
                </tr>
              </thead>
              <tbody>
                {rowData.map((row, index) => (
                  <tr
                    key={index}
                    className={selectedRow === index ? 'selected-row' : ''}
                    onClick={() => selectRow(index)}
                  >
                    <td contentEditable={selectedRow === index} onBlur={(e) => handleEditRow(e.target.textContent, 'username', index)}>{row.username}</td>
                    <td contentEditable={selectedRow === index} onBlur={(e) => handleEditRow(e.target.textContent, 'name', index)}>{row.name}</td>
                    <td contentEditable={selectedRow === index} onBlur={(e) => handleEditRow(e.target.textContent, 'email', index)}>{row.email}</td>
                    <td>
                      <Button variant="warning" size="sm">Update</Button>{' '}
                      <Button variant="danger" size="sm" onClick={() => handleDeleteRow(index)}>Delete</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-3">
              <Button variant="primary" onClick={addRow}>Add</Button>{' '}
              <Button variant="secondary" onClick={resetData}>Reset</Button>
            </div>
          </div>
        )}
      </div>

      {/* Reset Confirmation Modal */}
      <Modal show={showResetConfirmation} onHide={cancelReset}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Reset</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to reset the data?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={cancelReset}>Cancel</Button>
          <Button variant="danger" onClick={confirmReset}>Reset</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Admin;
