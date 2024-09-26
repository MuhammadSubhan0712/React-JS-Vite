import React from "react";

const About = () => {
  return (
    <>
      <div className="container mx-auto my-12 px-6 lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-blue-900 p-5 border-2 rounded-lg">
          {/* Image Section */}
          <div className="flex justify-center">
            <img
              src="https://c0.wallpaperflare.com/preview/506/226/547/store-shop-interor-retail.jpg"
              alt="Clothing Store"
              className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
              style={{ height: "400px", objectFit: "cover" }}
            />
          </div>

          {/* Text Section */}
          <div>
            <h1 className="text-4xl font-bold 6 mb-6 text-gray-100  dark:text-white">
              About Us
            </h1>
            <p className="text-gray-100 dark:text-gray-300 mb-4">
              Welcome to <strong>Lelo</strong>, where we're all about offering
              the coolest products and services in the fashion world! Our
              journey started a while back, and since then, we've been dedicated
              to delivering top-notch quality and unparalleled customer service.
              🚀
            </p>
            <p className="text-gray-100 dark:text-gray-300 mb-4">
              We’re powered by a team of passionate pros who live and breathe
              innovation, integrity, and strong relationships. Our squad is
              committed to making waves in every project we tackle. 💼👩‍💻
            </p>
            <p className="text-gray-100 dark:text-gray-300 mb-4">
              At <strong>Lelo</strong>, we’re not just about fashion; we’re
              about making a positive impact—on our customers, community, and
              the environment. 🌱 We're always on the lookout for ways to evolve
              and bring you even better products and experiences.
            </p>
            <p className="text-gray-100 dark:text-gray-300 mb-4">
              Thank you for choosing us! We can’t wait to continue rocking the
              fashion world with you by our side. 🎉
            </p>
            <p className="text-gray-100 dark:text-gray-300 mb-4">
              Welcome to <strong>Your Store Name</strong>, where style meets
              quality. We source the latest trends from around the globe to
              bring them right to your wardrobe—without breaking the bank! 🛍️
            </p>
            <p className="text-gray-100 dark:text-gray-300 mb-4">
              Whether it’s that perfect outfit for a big night or your daily
              essentials, we’ve got something for everyone. We’re all about
              delivering a smooth shopping experience with satisfaction
              guaranteed. 🙌
            </p>
            <a
              href="/products"
              className="inline-block bg-cyan-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:bg-blue-500 dark:hover:bg-blue-600">
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
