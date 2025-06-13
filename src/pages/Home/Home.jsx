import React from "react";

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-50 via-gray-50 to-indigo-200 min-h-screen flex items-center justify-center px-4 py-10">
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
          Your All-in-One Destination <br />
          for Academic Projects & <br />
          Software Services
        </h1>
        <p className="text-gray-700 text-lg md:text-xl mb-8">
          From college students to small businesses and institutions — <span className="font-semibold">CodeSewa</span> provides ready-made projects, custom software, and digital solutions tailored to your sector's needs. Learn, build, and grow with confidence.
        </p>
        <ul className="text-left text-gray-800 font-medium space-y-3 mb-10 list-disc list-inside mx-auto max-w-xl">
          <li>
            Final-Year Projects for Students <span className="text-sm text-gray-600">(Code + Report + Support)</span>
          </li>
          <li>Software Solutions for Schools, Shops, Startups & More</li>
          <li>Web & Mobile App Development</li>
          <li>Affordable, Scalable & Customizable Tech Services</li>
        </ul>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-all duration-300">
            Explore Services
          </button>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-all duration-300">
            Submit Enquiry
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
