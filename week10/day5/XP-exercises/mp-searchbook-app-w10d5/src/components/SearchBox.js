import React from 'react';

const SearchBox = ({ setSearchTerm, searchTerm, onSearch }) => {
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Search for books..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && onSearch()}
      />
      <button className="btn btn-outline-secondary" type="button" onClick={onSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBox;
