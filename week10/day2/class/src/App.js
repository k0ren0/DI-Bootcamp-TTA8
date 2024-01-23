import './App.css';
import About from './components/About';
import Home from './components/Home';
import Shop from './components/Shop';
import ErrorPage from './components/ErrorPage';
import { Link, createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

/** Routing */
const Root = () => {
  return (
    <>
      <header> 
        <nav>
          <Link to="/">Home</Link>{" "}
          <Link to="/about">About</Link>{" "}
          <Link to="/shop">Shop</Link>{" "}
        </nav>
      </header>
      <Outlet /> 
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path: "/", // Home page
        element: <Home />,
      },
      {
        path: "/about", // About page
        element: <About />,
      },
      {
        path: "/shop", // Shop page without product ID
        element: <Shop />,
      },
      {
        path: "/shop/:productid", // Shop page with product ID
        element: <Shop />,
      },
      {
        path: "*", // Any other path
        element: <ErrorPage />, // Component for displaying error
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
