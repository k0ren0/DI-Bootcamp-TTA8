import React, { useState } from 'react';
import './App.css';

function App() {
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaScript", votes: 0 },
    { name: "Java", votes: 0 }
  ]);

  const incrementVote = (languageName) => {
    setLanguages(languages.map(lang => {
      if (lang.name === languageName) {
        return { ...lang, votes: lang.votes + 1 };
      }
      return lang;
    }));
  };

  return (
    <div>
      <h1>Vote Your Language!</h1>
      {languages.map((lang, index) => (
        <div key={index} className="voteItem">
          <span>{lang.votes} {lang.name}</span>
          <button onClick={() => incrementVote(lang.name)}>Click on your vote</button>
        </div>
      ))}
    </div>
  );
}

export default App;
