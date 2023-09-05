import React, { useState, useEffect } from 'react';
import Navbar from "./Navbar";
import BannerBackground from "../Assets/home-banner-background.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown, DropdownButton, Button, Modal } from 'react-bootstrap';

const Admin = () => {
  const [rowData, setRowData] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null); // Track selected row index
  const [showResetConfirmation, setShowResetConfirmation] = useState(false);
  const [columns, setColumns] = useState([]); // Store all table columns
  const [displayedColumns, setDisplayedColumns] = useState([]); // Store currently displayed columns
  const [isLoading, setIsLoading] = useState(false); // Add loading state

  useEffect(() => {
    // Fetch data and determine columns when the component mounts
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setIsLoading(true); // Set loading state
      const response = await fetch("https://dummy.restapiexample.com/api/v1/employees");
      const data = await response.json();
      setRowData(data.data); // The API response contains a 'data' property
      setColumns(Object.keys(data.data[0])); // Determine columns dynamically
      setDisplayedColumns(Object.keys(data.data[0])); // Initially display all columns
      setSelectedRow(null); // Reset selected row
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false); // Clear loading state
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
      employee_name: 'New Employee',
      employee_salary: '0.00',
      employee_age: 0,
      profile_image: 'https://dummy.restapiexample.com/img/employee-placeholder.png', // Replace with the actual API image URL
    };
    setRowData([...rowData, newRow]);
    setSelectedRow(null); // Reset selected row
  };

  const toggleColumn = (column) => {
    // Toggle the display of a specific column
    if (displayedColumns.includes(column)) {
      setDisplayedColumns([column]); // Show only the selected column
    } else {
      setDisplayedColumns(Object.keys(rowData[0])); // Show all columns
    }
  };

  const handleUpdateRow = async (rowIndex) => {
    const updatedRow = rowData[rowIndex]; // Get the selected row data
    try {
      const response = await fetch(`https://your-api-endpoint/${updatedRow.id}`, {
        method: 'PUT', // or 'PATCH' depending on your API
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedRow),
      });
      if (response.ok) {
        // The update was successful, refetch the data to update the table
        fetchData();
      } else {
        // Handle errors if the update was not successful
        console.error('Update failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error updating data:', error);
    }
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
          <Dropdown.Item onClick={() => toggleColumn('employee_name')}>Toggle Employee Name</Dropdown.Item>
        </DropdownButton>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          rowData.length > 0 && (
            <div className="mt-4">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    {columns.map((column) => (
                      displayedColumns.includes(column) && (
                        <th key={column}>{column}</th>
                      )
                    ))}
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {rowData.map((row, index) => (
                    <tr
                      key={index}
                      className={selectedRow === index ? 'selected-row' : ''}
                      onClick={() => selectRow(index)}
                    >
                      {columns.map((column) => (
                        displayedColumns.includes(column) && (
                          <td
                            key={column}
                            contentEditable={selectedRow === index}
                            onBlur={(e) => handleEditRow(e.target.textContent, column, index)}
                          >
                            {column === 'profile_image' ? (
                              <img src={row[column]} alt="Profile" width="50" height="50" />
                            ) : (
                              row[column]
                            )}
                          </td>
                        )
                      ))}
                      <td>
                        <Button
                          variant="warning"
                          size="sm"
                          onClick={() => handleUpdateRow(index)} // Pass the row index to the update handler
                        >
                          Update
                        </Button>{' '}
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
          )
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
