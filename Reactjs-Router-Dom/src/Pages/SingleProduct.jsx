import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


const SingleProduct = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();


  useEffect(() => {
    axios(`https://fakestoreapi.com/products/${id}`)
    
      .then((res) => {
        setProduct(res.data);
        console.log(res.data);
      })

      .catch((err) => console.log("Error ==>", err));
  }, []);


  if (!product) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }


  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center my-6">Product: {product.title}</h1>
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8">
        <div className="w-full lg:w-1/2">
          <img
            src={product.image}
            alt="Product"
            className="rounded-lg shadow-lg w-full max-w-sm mx-auto"
          />
        </div>
        <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
          <h2 className="text-2xl font-semibold mb-4">{product.title}</h2>
          <p className="text-gray-600 mb-4">Category: {product.category}</p>
          <p className="text-xl font-bold text-green-600 mb-4">Price: ${product.price}</p>
          <p className="text-gray-800 mb-4">Rate: {product.rating?.rate}</p>
          <p className="text-gray-800 mb-6">Count: {product.rating?.count}</p>
          <button className="btn btn-primary w-full lg:w-auto">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
