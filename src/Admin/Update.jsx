// Update.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Update = () => {
  const [updateData, setUpdateData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
  });

  useEffect(() => {
    // Fetch data from the API for updating
    axios
      .get('your_update_api_url_here')
      .then((response) => {
        setUpdateData(response.data); // Update data with API response
      })
      .catch((error) => {
        console.error('Error fetching data for updating:', error);
      });
  }, []);

  const handleSelectChange = (event) => {
    const itemId = event.target.value;
    const selectedItem = updateData.find((item) => item.id === itemId);
    setSelectedItem(selectedItem);

    // Set the form fields with the selected item's data
    if (selectedItem) {
      setFormData({
        name: selectedItem.name,
        description: selectedItem.description,
      });
    } else {
      setFormData({
        name: '',
        description: '',
      });
    }
  };

  const handleUpdateClick = () => {
    // Handle the "Update" button click logic here
    // You can submit the updated data to your API or perform any other action
    // For example:
    console.log('Updated data submitted:', formData);
  };

  return (
    <div>
      <h2>Update Data</h2>
      <div>
        <label htmlFor="selectItem">Select item to update:</label>
        <select id="selectItem" onChange={handleSelectChange}>
          <option value="">Select an item</option>
          {updateData.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>

      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
          />
        </div>
      </form>

      <button onClick={handleUpdateClick}>Update</button>
    </div>
  );
};

export default Update;
