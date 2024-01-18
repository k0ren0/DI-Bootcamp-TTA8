import User from './components/User';
import './App.css';
import users from "./users.json"
console.log(users)



/** inline style 
 * class - external css
 * css library
*/

/**
 * components - funcion / class
 * lifecycle component
 * state
 * rerender
 */


function App() {
  return (
    <div>
        {
        users.map((item,indx) => {
          return <User userinfo={item} key={indx} />
        })
        
        }
      
    </div>
  );
}

export default App;
