// src/App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Section from './components/Section';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Section 
          title="Become a Full Stack Developer"
          content="Join our intensive program in Israel to become a professional in Full Stack development."
          image="https://images.unsplash.com/photo-1556761175-b413da4baf72" // Working image
        />
        <Section 
          title="Innovative Learning"
          content="Our courses incorporate the latest technologies and teaching methodologies to enhance your skills."
          image="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f" // New image
          reverse
        />
        <Section 
          title="Start Your Journey in IT"
          content="Regardless of your current experience, our course will prepare you for a successful career in IT."
          image="https://images.unsplash.com/photo-1498050108023-c5249f4df085" // New image
        />
        <Contact />
      </main>
    </div>
  );
}

export default App;
