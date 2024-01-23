import React, { Component } from 'react';
import data from './data.json';

class Example3 extends Component {
  render() {
    const experiences = data.Experiences;

    return (
      <div>
        <h1>Work Experiences</h1>
        {experiences.map((experience, index) => (
          <div key={index}>
            <img
              src={experience.logo}
              alt={`${experience.companyName} Logo`}
              style={{ maxWidth: '100px' }}
            />
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li>
                {experience.companyName}
              </li>
              <li>
                <span style={{ fontWeight: 'bold' }}>{experience.roles[0].title}</span>
              </li>
              <li>
                {experience.roles[0].startDate} <strong>Location:</strong> {experience.roles[0].location}
              </li>
              <li>
                {experience.roles[0].description}
              </li>
            </ul>
          </div>
        ))}
      </div>
    );
  }
}

export default Example3;
