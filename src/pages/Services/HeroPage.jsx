import React from "react";
import heroImage from "../../assets/images/Services.jpg";
import { useNavigate } from "react-router-dom";
const HeroPage = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-10">
      {/* Left Text Content */}
      <div className="flex-1 max-w-xl text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold leading-snug mb-4">
          Project & <br /> Software Solutions
        </h1>
        <p className="text-lg md:text-xl mb-6 text-blue-100">
          Transforming Ideas into Reality with Cutting-Edge Technology
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <button
            onClick={() => navigate("/contact")}
            className="border-2 border-white hover:bg-white hover:text-blue-900 text-white  cursor-pointer font-semibold py-3 px-6 rounded-md transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Contact Us
          </button>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="flex-1 flex justify-center items-center">
        <div className="relative w-full max-w-md">
          <img
            src={heroImage}
            alt="Project and Software Solutions"
            className="w-full h-auto object-cover rounded-lg shadow-2xl transform transition-all duration-500 hover:scale-105"
            loading="lazy"
          />
          {/* Decorative Layers */}
          <div className="absolute -z-10 w-full h-full bg-blue-600 rounded-lg -bottom-3 -right-3"></div>
          <div className="absolute -z-20 w-full h-full bg-blue-400 rounded-lg -bottom-6 -right-6 opacity-30"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
