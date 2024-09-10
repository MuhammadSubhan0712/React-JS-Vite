import React from "react";
import { useNavigate } from "react-router-dom";

const Cards = ({ image, title, category, price, count, rate }) => {
  const navigate = useNavigate();

  return (
    <div className="card w-80 bg-white shadow-2xl hover:shadow-xl transform hover:scale-105 transition-all duration-300">
    <figure>
      <img
        src={image}
        alt="Product"
        className="w-50 h-60 object-cover rounded-t-lg"
      />
    </figure>
    <div className="card-body bg-gray-600 text-white rounded-b-lg">
      <h3 className="card-title text-lg font-bold">{title}</h3>
      <p className="text-white ">Category: {category}</p>
      <p className="text-white">Rate: {rate}</p>
      <p className="text-white">Count: {count}</p>
      <p className="text-white font-semibold">Price: ${price}</p>
      <div className="card-actions justify-end">
        <button
          className="btn btn-primary bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-400 text-white"
          onClick={() => navigate(`/product/${title}`)}
        >
          See Details
        </button>
      </div>
    </div>
  </div>

  );
};

export default Cards;
