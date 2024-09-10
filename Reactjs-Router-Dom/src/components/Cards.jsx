import React from "react";
import { useNavigate } from "react-router-dom";


// Cards Daisyui
const Cards = ({ image, title, category, price, count, rate , items}) => {
  const navigate = useNavigate();


//   const singleUser = (p) => {
//     navigate(`SingleProduct/${p.id}`);
//   }
const singleUser = () => {
    console.log("Items:", items); // Log the items prop to debug

    if (items && items.id) {
      navigate(`/SingleProduct/${items.id}`); // Ensure the correct route is used
    } else {
      console.error("Item ID is missing or items is undefined");
    }
  };


  return (
    <div className="card w-96 bg-white shadow-2xl hover:shadow-xl transform hover:scale-105 transition-all duration-300">
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
           onClick={singleUser}>
            See Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
