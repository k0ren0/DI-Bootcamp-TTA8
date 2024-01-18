// import logo from './logo.svg';
import './App.css';
import UserFavoriteAnimals from './component/UserFavoriteAnimals.js';



function App() {

  // const myelement = <h1>I Love JSX!</h1>; 
  // const sum = 5 + 5;

  const user = {
    firstName: 'Bob',
    lastName: 'Dylan',
    favAnimals : ['Horse','Turtle','Elephant','Monkey']
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h3>{user.firstName}</h3>
          <h3>{user.lastName}</h3>
          <UserFavoriteAnimals favAnimals={user.favAnimals} />
        </div>

      </header>
    </div>
  );
}





        {/* <p>Hello world!</p>
        {myelement}
        <p>React is {sum} times better with JSX</p> */}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


export default App;
