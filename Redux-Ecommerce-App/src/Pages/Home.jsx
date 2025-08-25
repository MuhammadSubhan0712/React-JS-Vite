import React from "react";
import Cards from "../component/Cards";
import Carousel from "../component/Carousel";

export const Home = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-blue-200 to bg-blue-300">
        <div>
          <Carousel />
        </div>

        <div>
          <Cards />
        </div>
      </div>
    </>
  );
};
