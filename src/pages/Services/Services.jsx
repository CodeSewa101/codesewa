
import React from "react";
import { FaProjectDiagram } from "react-icons/fa";
import { FiCode } from "react-icons/fi";
import { MdMiscellaneousServices, MdWorkOutline } from "react-icons/md";
//import HeroImage from './assets/hero-img.png'; // Add your image in src/assets

// ✅ HERO COMPONENT
const HeroPage = () => {
  return (
   <div className="bg-blue-900 text-white py-16 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-10">
  {/* Left Text Content */}
  <div className="flex-1 max-w-xl text-center md:text-left">
    <h1 className="text-4xl md:text-5xl font-bold leading-snug mb-4">
      Project & <br /> Software Solutions
    </h1>
    <p className="text-lg md:text-xl mb-6 text-gray-200">
      Transforming Ideas into Reality
    </p>
    <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-md transition-all duration-300 shadow-md hover:shadow-lg">
      Explore Services
    </button>
  </div>

  {/* Right Side Image */}
  <div className="flex-1 max-w-xs md:max-w-sm">
    {/* <img
      src={HeroImage}
      alt="Hero"
      className="w-full h-auto object-contain"
    /> */}
  </div>
</div>

  );
};

// ✅ MAIN SERVICES COMPONENT
const Services = () => {
  return (
    <div>
     
      <HeroPage />

      {/* Services Section */}
      <div className="bg-white text-gray-900 py-12 px-4 md:px-16">
        <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
        <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
          <ServiceCard
            icon={<FaProjectDiagram />}
            title="Project Development"
            description="Get customized academic and industry-ready projects tailored for college and school students"
          />
          <ServiceCard
            icon={<FiCode />}
            title="Website Development"
            description="We build responsive, modern websites for businesses, startups, and institutions at affordable rates"
          />
          <ServiceCard
            icon={<MdMiscellaneousServices />}
            title="Software Services"
            description="Providing efficient, scalable, and user-friendly software solutions for schools, hospitals, and enterprises"
          />
          <ServiceCard
            icon={<MdWorkOutline />}
            title="Internship"
            description="Hands-on internship programs designed to upskill students with real-time project experience and certification"
          />
        </div>
      </div>
    </div>
  );
};

// ✅ CARD COMPONENT
const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="group w-72 h-56 bg-white border border-gray-200 rounded-xl p-5 
                    shadow-sm hover:shadow-[0_4px_20px_rgba(59,130,246,0.4)] 
                    hover:scale-[1.02] transition-all duration-300 
                    flex flex-col items-center justify-start text-center">
      <div className="text-[36px] text-blue-600 mb-3 group-hover:text-blue-800 transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-1 group-hover:text-blue-900 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
        {description}
      </p>
    </div>
  );
};

export default Services;
