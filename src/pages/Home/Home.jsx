import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate(); // ⬅️ Define navigate inside component

  return (
    <div className="bg-gradient-to-r from-indigo-50 via-gray-50 to-indigo-100 min-h-screen flex items-center justify-center px-4 py-16 sm:py-20">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-8">
          Your All-in-One Destination <br className="hidden sm:block" />
          for Academic Projects & <br className="hidden sm:block" />
          Software Services
        </h1>
        
        <p className="text-gray-700 text-lg md:text-xl lg:text-2xl mb-10 max-w-3xl mx-auto">
          From college students to small businesses and institutions — <span className="font-semibold text-indigo-600">CodeSewa</span> provides ready-made projects, custom software, and digital solutions tailored to your sector's needs. Learn, build, and grow with confidence.
        </p>
        
        <ul className="space-y-3 mb-12 mx-auto max-w-xl bg-white/50 backdrop-blur-sm p-6 rounded-xl shadow-sm">
          <li className="flex items-start">
            <span className="flex-shrink-0 mt-1 mr-2 text-indigo-600 font-bold">▸</span>
            <span className="font-bold text-gray-800">
              Final-Year Projects for Students <span className="font-normal text-sm text-gray-500">(Code + Report + Support)</span>
            </span>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 mt-1 mr-2 text-indigo-600 font-bold">▸</span>
            <span className="font-bold text-gray-800">
              Software Solutions for Schools, Shops, Startups & More
            </span>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 mt-1 mr-2 text-indigo-600 font-bold">▸</span>
            <span className="font-bold text-gray-800">
              Web & Mobile App Development
            </span>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 mt-1 mr-2 text-indigo-600 font-bold">▸</span>
            <span className="font-bold text-gray-800">
              Affordable, Scalable & Customizable Tech Services
            </span>
          </li>
        </ul>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => navigate("/project-lab")}
            className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
          >
            Project Lab
          </button>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
            Submit Enquiry
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
