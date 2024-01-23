import React, { Component } from 'react';
import data from './data.json';

class Example1 extends Component {
  render() {
    const socialMedias = data.SocialMedias;

    return (
      <div>
        <h1>Social Media Links</h1>
        <ul>
          {socialMedias.map((url, index) => (
            <li key={index}>
              <a href={url} target="_blank" rel="noopener noreferrer">
                {url}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Example1;
