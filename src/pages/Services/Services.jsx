import React from "react";
import { FaProjectDiagram } from "react-icons/fa";
import { FiCode } from "react-icons/fi";
import { MdMiscellaneousServices, MdWorkOutline } from "react-icons/md";

// ✅ HERO COMPONENT
const HeroPage = () => {
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
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-md transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Explore Services
          </button>
          <button className="border-2 border-white hover:bg-white hover:text-blue-900 text-white font-semibold py-3 px-6 rounded-md transition-all duration-300 shadow-lg hover:shadow-xl">
            Contact Us
          </button>
        </div>
      </div>

      {/* Right Side Image */}
      <div className="flex-1 max-w-xs md:max-w-md flex justify-center">
        <div className="w-full h-64 bg-blue-800 rounded-lg flex items-center justify-center shadow-2xl">
          <span className="text-white text-lg">Your Image Here</span>
        </div>
      </div>
    </div>
  );
};

// ✅ MAIN SERVICES COMPONENT
const Services = () => {
  return (
    <div className="overflow-hidden">
      <HeroPage />

      {/* Services Section */}
      <div className="bg-gray-50 text-gray-900 py-16 px-4 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive solutions tailored to your needs, helping you achieve your goals with our expertise.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 justify-items-center">
            <ServiceCard
              icon={<FaProjectDiagram className="w-full h-full" />}
              title="Project Development"
              description="Get customized academic and industry-ready projects tailored for college and school students"
            />
            <ServiceCard
              icon={<FiCode className="w-full h-full" />}
              title="Website Development"
              description="We build responsive, modern websites for businesses, startups, and institutions at affordable rates"
            />
            <ServiceCard
              icon={<MdMiscellaneousServices className="w-full h-full" />}
              title="Software Services"
              description="Providing efficient, scalable, and user-friendly software solutions for schools, hospitals, and enterprises"
            />
            <ServiceCard
              icon={<MdWorkOutline className="w-full h-full" />}
              title="Internship"
              description="Hands-on internship programs designed to upskill students with real-time project experience and certification"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// ✅ CARD COMPONENT WITH PROMINENT SHADOW BACKGROUND
const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="w-full max-w-xs h-80 bg-white rounded-2xl p-6
                    shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_50px_-10px_rgba(59,130,246,0.3)]
                    border border-gray-100 hover:border-blue-200 transition-all duration-500
                    flex flex-col items-center text-center group relative overflow-hidden transform hover:-translate-y-2">
      
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
      
      {/* Icon container with shadow */}
      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 
                      shadow-md group-hover:shadow-lg transition-shadow duration-300 relative z-10
                      text-blue-600 group-hover:text-blue-800">
        <div className="w-8 h-8">
          {icon}
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-blue-900 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
          {description}
        </p>
      </div>
      
      {/* Learn more button with shadow */}
      <button className="mt-6 px-4 py-2 bg-white text-blue-600 rounded-full text-sm font-medium 
                         shadow-sm hover:shadow-md transition-all duration-300 relative z-10
                         group-hover:bg-blue-50 group-hover:text-blue-800 flex items-center gap-1">
        Learn more
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default Services;