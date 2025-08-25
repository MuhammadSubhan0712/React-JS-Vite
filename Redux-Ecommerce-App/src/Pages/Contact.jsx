import React from 'react';

const Contact = () => {
  return (
    <div className="flex flex-col items-center p-6 bg-gradient-to-r from-blue-200 to bg-blue-300 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h1>
      <form className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Full Name</label>
          <input
            type="text"
            className="form-input mt-1 block w-full border border-gray-300 rounded-md p-2"
            placeholder="Enter your full name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Email Address</label>
          <input
            type="email"
            className="form-input mt-1 block w-full border border-gray-300 rounded-md p-2"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Message</label>
          <textarea
            className="form-textarea mt-1 block w-full border border-gray-300 rounded-md p-2"
            rows="4"
            placeholder="Enter your message"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
