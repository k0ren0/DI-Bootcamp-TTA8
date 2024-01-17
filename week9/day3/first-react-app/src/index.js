import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// const arr = [
//   {id:1, name:"iPhone", price:700},
//   {id:2, name:"iPad", price:900},
//   {id:3, name:"iMac", price:1500}
// ]

// const element = (
// <div>
//   {
//     arr.map(item=> {
//       return (
//         <div>
//         <h1>{item.name} {item.price}</h1>,
//         <h2>{item.id}</h2>
//         </div>
//       )
//     })
//   }
// </div>
// );

// //v1
// const element = (
// <div>
//   <h1>I</h1>
//   <h2>love</h2>
//   <h3>React</h3>
// </div>
// );
const root = ReactDOM.createRoot(document.getElementById('root'));
// v3
root.render(
  <div>
    <App />
  </div>
);

// // v2
// root.render(
//   element,
// );
// // v1
// root.render(
//   element
// );


//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
