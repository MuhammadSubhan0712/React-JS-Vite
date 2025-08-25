import React from "react";

const Services = () => {
  return (
    <div className="p-6  bg-gradient-to-r from-blue-200 to bg-blue-300 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Our Services
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Service Card 1 */}
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white p-6 transform hover:-translate-y-2">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            Web Development
          </h2>
          <p className="text-gray-700 text-base">
            Creating modern, responsive, and engaging websites with the latest
            web technologies.
          </p>
          <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300">
            Learn More
          </button>
        </div>

        {/* ----------------------------------------------------------------------- */}

        {/* Service Card 2 */}
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white p-6 transform hover:-translate-y-2">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            Mobile App Development
          </h2>
          <p className="text-gray-700 text-base">
            High-performance mobile apps tailored for iOS and Android platforms.
          </p>
          <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300">
            Learn More
          </button>
        </div>

        {/* ----------------------------------------------------------------------- */}

        {/* Service Card 3 */}
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white p-6 transform hover:-translate-y-2">
          <h2 className="text-xl font-bold text-gray-900 mb-2">UI/UX Design</h2>
          <p className="text-gray-700 text-base">
            Designing user-friendly interfaces for an intuitive and delightful
            experience.
          </p>
          <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300">
            Learn More
          </button>
        </div>

        {/* ----------------------------------------------------------------------- */}

        {/* Service Card 4 */}
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white p-6 transform hover:-translate-y-2">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            Python Development
          </h2>
          <p className="text-gray-700 text-base">
            Building robust backend systems and automation with Python.
          </p>
          <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300">
            Learn More
          </button>
        </div>

        {/* ----------------------------------------------------------------------- */}

        {/* Service Card 5 */}
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white p-6 transform hover:-translate-y-2">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            Digital Marketing
          </h2>
          <p className="text-gray-700 text-base">
            Innovative marketing strategies to boost your online presence and
            drive engagement.
          </p>
          <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300">
            Learn More
          </button>
        </div>

        {/* ----------------------------------------------------------------------- */}

        {/* Service Card 6 */}
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white p-6 transform hover:-translate-y-2">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            Artificial Intelligence
          </h2>
          <p className="text-gray-700 text-base">
            Implement AI-driven solutions for automation and intelligent
            decision-making.
          </p>
          <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300">
            Learn More
          </button>
        </div>

        {/* ----------------------------------------------------------------------- */}

        {/* Service Card 7 */}
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white p-6 transform hover:-translate-y-2">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Consultation</h2>
          <p className="text-gray-700 text-base">
            Providing expert advice to drive growth and improve your business
            strategy.
          </p>
          <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300">
            Learn More
          </button>
        </div>

        {/* ----------------------------------------------------------------------- */}

        {/* Service Card 8 */}
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white p-6 transform hover:-translate-y-2">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Best Ideas</h2>
          <p className="text-gray-700 text-base">
            Offering creative solutions and unique strategies for complex
            challenges.
          </p>
          <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300">
            Learn More
          </button>
        </div>

        {/* ----------------------------------------------------------------------- */}

        {/* Service Card 9 */}
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white p-6 transform hover:-translate-y-2">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            Simple Setting
          </h2>
          <p className="text-gray-700 text-base">
            Simplicity at its best! Clean and efficient settings for streamlined
            user experiences.
          </p>
          <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
