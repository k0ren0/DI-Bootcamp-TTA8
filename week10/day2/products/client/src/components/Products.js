import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate ( Link delete)

const BASE_URL = process.env.REACT_APP_BASE_URL;

const Products = (props) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Use useNavigate to access the navigation function

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/products`);
        setProducts(res.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching data: {error.message}</div>;
  }

  return (
    <>
      <h1>Shop</h1>
      {products ? (
        products.map((item) => (
          <div
            key={item.product_id}
            style={{
              display: "inline-block",
              padding: "28px",
              margin: "28px",
              border: "1px solid #000"
            }}
          >
            <h2>{item.product_name}</h2>
            <h3>{item.price}</h3>
            <button onClick={() => navigate(`/${item.product_id}`)}>Buy Now</button>
          </div>
        ))
      ) : (
        null
      )}
    </>
  );
};

export default Products;
