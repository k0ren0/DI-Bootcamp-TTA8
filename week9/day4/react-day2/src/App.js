import React, { useState } from 'react';
import User from './components/User';
import './App.css';
import users from './users.json';
import SearchUsers from './components/SearchUsers';


/** inline style 
 * class - external css
 * css library
*/

/**
 * components - funcion / class
 * lifecycle component
 * state
 * rerender
 */


function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const filterUsers = () => {
    if (searchQuery.trim() === '') {
      // If the search query is empty or contains only whitespace, return all users
      return users;
    } else {
      // Filter users based on the search query
      return users.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
  };

  return (
    <div>
      <SearchUsers onSearch={(value) => setSearchQuery(value)} />
      {filterUsers().map((item, indx) => {
        return <User userinfo={item} key={indx} />;
      })}
    </div>
  );
}

export default App;