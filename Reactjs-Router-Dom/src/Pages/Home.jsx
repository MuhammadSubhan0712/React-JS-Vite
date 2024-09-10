import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "../components/Cards";

const Home = () => {
  const [Data, setData] = useState(null);

  useEffect(() => {
    axios("https://fakestoreapi.com/products")
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log("Error ==>", err));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 via-black to-purple-900 py-8">
      <div className="mt-8 container mx-auto">
        <div className=" flex flex-wrap justify-around gap-10">
          {Data ? (
            Data.map((item) => (
              <Cards
                key={item.id}
                image={item.image}
                title={item.title}
                category={item.category}
                price={item.price}
                rate={item.rating.rate}
                count={item.rating.count}
              />
            ))
          ) : (
            <h1 className="text-center w-full text-2xl text-white">
              Loading...
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
