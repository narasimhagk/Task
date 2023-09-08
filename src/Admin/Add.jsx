import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

const Add = () => {
  const [columns, setColumns] = useState([]);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    // Fetch data from the API to determine the columns
    // Replace 'API_URL' with your actual API endpoint
    fetch('API_URL')
      .then((response) => response.json())
      .then((data) => {
        // Assuming the API response is an array of column names
        setColumns(data);

        // Initialize formData with default values for the columns
        const defaultFormData = {};
        data.forEach((column) => {
          defaultFormData[column] = ''; // You can set default values here
        });
        setFormData(defaultFormData);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit the form data to the server or perform any desired action here
    console.log('Form Data:', formData);
  };

  const handleReset = () => {
    // Reset the form data to the default values
    setFormData({});
  };

  return (
    <div className="card">
      <Form onSubmit={handleSubmit}>
        <div className="form-container">
          {columns.map((column) => (
            <Form.Group key={column}>
              <p>{column}</p>
              <Form.Control
                className={`${column}-input`}
                type="text"
                placeholder={column}
                name={column}
                value={formData[column] || ''}
                onChange={handleInputChange}
              />
            </Form.Group>
          ))}
          <Button className="submit-button" type="submit">
            Submit
          </Button>
          <Button className="reset-button" type="button" onClick={handleReset}>
            Reset
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Add;
