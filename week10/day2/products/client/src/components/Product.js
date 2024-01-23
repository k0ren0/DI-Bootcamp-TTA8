import React, { useState, useEffect } from "react";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const Products = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Define an async function to fetch data
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/products`);
        // Assuming the API response contains an array of products
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <>
      <h1>Shop</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Products;



// import { useState, useEffect } from "react";
// import axios from "axios";

// const BASE_URL = process.env.REACT_APP_BASE_URL;

// const Products = (props) => {
//   const [products, setProducts] = useState();

//   useEffect(() => {}, []);
  
//   return (
//     <>
//       <h1>Shop</h1>
//     </>
//   );
// };
// export default Products;