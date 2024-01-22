import React from 'react';

const SearchUsers = (props) => {
  const handleInputChange = (e) => {
    // Get the value of the input field
    const inputValue = e.target.value;

    // Call the onSearch callback with the updated search query
    props.onSearch(inputValue);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search users..."
        onChange={handleInputChange} // Call handleInputChange on input change
      />
    </div>
  );
};

export default SearchUsers;
