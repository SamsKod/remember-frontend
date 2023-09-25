import React, { useState } from 'react';
import axios from 'axios';

const AddTag = ({ objectId }) => {
  const [tag, setTag] = useState('');

  const handleTagChange = (event) => {
    setTag(event.target.value);
  };

  const handleAddTag = async () => {
    try {
      // Make a POST request to your Django API endpoint to add the tag
      await axios.post(`/api/add-tag/${objectId}/`, { tag });

      // Reset the tag input field
      setTag('');

      // Optionally, update the component's state or refresh the data
      // ...
    } catch (error) {
      console.error('Error adding tag:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a tag"
        value={tag}
        onChange={handleTagChange}
      />
      <button onClick={handleAddTag}>Add Tag</button>
    </div>
  );
};


export default AddTag;
