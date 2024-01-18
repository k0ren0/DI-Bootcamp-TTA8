import React from 'react';
import "./Exercise3.css";

const style_header = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
  };

class Exercise extends React.Component {
  render() {
    return (
      <div>
        <h1 style={style_header}>Hello World</h1>
        <p className="para">This is a paragraph with custom styling.</p>
        
        <h1 style={{ color: 'red', backgroundColor: 'lightblue' }}>Hello World</h1>
        <p>This is a paragraph.</p>
        <a href="#">This is a link</a>
        <form>
          <input type="text" placeholder="Enter text" />
          <button type="submit">Submit</button>
        </form>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbl4FutwnDXulqce_VtXB7zxK48ABhNzBlCIM1nu_4ouKWrVGag6oY6x9eiXzC0gEJzLs&usqp=CAU" alt="Sample" />
        <ul>
          <li>tartartar</li>
          <li>atratratr</li>
          <li>artartart</li>
        </ul>
      </div>
    );
  }
}

export default Exercise;
