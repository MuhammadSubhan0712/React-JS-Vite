import React from "react";
import Cards from "../component/Cards";
import Carousel from "../component/Carousel";

export const Home = () => {
  return (
    <>
      <div>
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
