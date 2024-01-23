import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    gender: '',
    destination: '',
    nutsFree: false,
    lactoseFree: false,
    vegan: false
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value
    }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here (e.g., sending data to a server, logging to console, etc.)
  }

  return (
    <div className="form-container">
      <h1>Sample form</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
        />
        <div className="gender-selection">
          <div>
            <input
              type="radio"
              id="male"
              name="gender"
              value="male"
              checked={formData.gender === 'male'}
              onChange={handleChange}
            />
            <label htmlFor="male">Male</label>
          </div>
          <div>
            <input
              type="radio"
              id="female"
              name="gender"
              value="female"
              checked={formData.gender === 'female'}
              onChange={handleChange}
            />
            <label htmlFor="female">Female</label>
          </div>
        </div>
        <select name="destination" value={formData.destination} onChange={handleChange}>
          <option value="">-- Please Choose a Destination --</option>
          {/* Add more destination options here */}
        </select>
        <div>
          <label className="checkbox-label">
            <input
              type="checkbox"
              name="nutsFree"
              checked={formData.nutsFree}
              onChange={handleChange}
            />
            Nuts free
          </label>
          <label className="checkbox-label">
            <input
              type="checkbox"
              name="lactoseFree"
              checked={formData.lactoseFree}
              onChange={handleChange}
            />
            Lactose free
          </label>
          <label className="checkbox-label">
            <input
              type="checkbox"
              name="vegan"
              checked={formData.vegan}
              onChange={handleChange}
            />
            Vegan
          </label>
        </div>
        <button type="submit" className="submit-button">Submit</button>

      </form>

      <div className="entered-information">
        <h2>Entered information:</h2>
        <p>Your name: {formData.firstName} {formData.lastName}</p>
        <p>Your age: {formData.age}</p>
        <p>Your gender: {formData.gender}</p>
        <p>Your destination: {formData.destination}</p>
        <p>Your dietary restrictions:</p>
        <p>**Nuts free : {formData.nutsFree ? 'Yes' : 'No'}</p>
        <p>**Lactose free : {formData.lactoseFree ? 'Yes' : 'No'}</p>
        <p>**Vegan meal : {formData.vegan ? 'Yes' : 'No'}</p>
      </div>
    </div>
  );
}

export default App;
