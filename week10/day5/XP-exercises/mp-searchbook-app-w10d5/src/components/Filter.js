import React from 'react';

const Filter = ({ sortOrder, setSortOrder }) => {
  return (
    <select 
      className="form-select" 
      value={sortOrder} 
      onChange={(e) => setSortOrder(e.target.value)}
    >
      <option value="" disabled>Sort</option>
      <option value="newest">Newest</option>
      <option value="oldest">Oldest</option>
    </select>
  );
};

export default Filter;
