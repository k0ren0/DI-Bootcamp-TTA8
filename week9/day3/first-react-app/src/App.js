import logo from './logo.svg';
import './App.css';
// import Hello from "./Hello";
// import SubHello from "./SubHello";
import User from './components/User';


const arr = [
  {id:1, name: "1Jonh", email:"jjj@gmail.com"},
  {id:2, name:"1Jonh", email:"jjj@gmail.com"},
  {id:3, name:"1Jonh", email:"jjj@gmail.com"},
]

/**props */
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {
          arr.map((item,indx) => {
            return (
              <User userinfo={item} key={indx}/>
            )
          })
        }
      </header>
    </div>
  );
}
// // v1
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         2 <SubHello />
//         <h1>I love React!</h1>
//         <Hello />
//         <Hello />
//         <Hello />
//       </header>
//     </div>
//   );
// }

export default App;
