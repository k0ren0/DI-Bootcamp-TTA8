import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/products/${id}`);
        setProduct(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const backToShop = () => {
    navigate('/');
  };

  return (
    <div>
      <h1>Product</h1>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error fetching data: {error.message}</div>
      ) : (
        <div>
          {product.map((item) => (
            <div key={item.product_id}>
              <h1>{item.product_name}</h1>
              <h2>{item.price}</h2>
              <p>{item.description}</p>
            </div>
          ))}
          <button onClick={backToShop}>Back to Shop</button>
        </div>
      )}
    </div>
  );
};

export default Product;




// // duble link

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams, useNavigate, Link } from 'react-router-dom';

// const BASE_URL = process.env.REACT_APP_BASE_URL;

// const Product = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(`${BASE_URL}/api/products/${id}`);
//         setProduct(response.data);
//         setLoading(false);
//       } catch (err) {
//         setError(err);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [id]);

//   const backToShop = () => {
//     navigate('/');
//   };

//   return (
//     <div>
//       <h1>Product</h1>
//       {loading ? (
//         <div>Loading...</div>
//       ) : error ? (
//         <div>Error fetching data: {error.message}</div>
//       ) : (
//         <div>
//           {product.map((item) => (
//             <div key={item.product_id}>
//               <h1>{item.product_name}</h1>
//               <h2>{item.price}</h2>
//               <p>{item.description}</p>
//             </div>
//           ))}
//           <Link to='/'>Back to Shop</Link>
//           <button onClick={backToShop}>Back to Shop</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Product;
