import React, { Component } from 'react';
import data from './data.json';

class Example2 extends Component {
  render() {
    const programmingLanguages = data.Skills.find(
      (skill) => skill.Area === 'Programming Language'
    )?.SkillSet;

    const webDevSkills = data.Skills.find(
      (skill) => skill.Area === 'Web-Based Application Development'
    )?.SkillSet;

    return (
      <div>
        <div>
          <h1>Programming Languages</h1>
          <ul>
            {programmingLanguages &&
              programmingLanguages.map((language, index) => (
                <li key={index}>{language.Name}</li>
              ))}
          </ul>
        </div>
        <div>
          <h1>Web-Based Application Development Skills</h1>
          <ul>
            {webDevSkills &&
              webDevSkills.map((skill, index) => (
                <li key={index}>{skill.Name}</li>
              ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Example2;
