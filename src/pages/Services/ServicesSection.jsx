import React from "react";
import { FaCheck, FaLaptop, FaMobileAlt, FaGlobe, FaChartLine } from "react-icons/fa";

const ServicesSection = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Our passion is offering your business quality IT services
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          With cutting-edge technology and vast experience we are capable of delivering comprehensive solutions for our clients.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Website Designing */}
        <ServiceCard
          icon={<FaLaptop className="text-blue-600 text-3xl" />}
          title="Website Designing"
          items={[
            "Static Design",
            "Dynamic Design",
            "Ecommerce Design",
            "Portal Design"
          ]}
        />

       {/* Web Development */}
        <ServiceCard
          icon={<FaGlobe className="text-blue-600 text-3xl" />}
          title="Web Development"
          items={[
            "full-stack Development",
            "Custom Website Development",
            "CRM & ERP System",
            "Api Integration & Developent",
            "Security & Optimization"
          ]}
        />

        {/* Mobile App Development */}
        <ServiceCard
          icon={<FaMobileAlt className="text-blue-600 text-3xl" />}
          title="Mobile App Development"
          items={[
            "Android App",
            "iOS App",
            "Cross Platform (React Native)"
          ]}
        />

        

           {/* Digital Marketing */}
        <ServiceCard
          icon={<FaChartLine className="text-blue-600 text-3xl" />}
          title="Digital Marketing"
          items={[
            "SEO",
            "Social Media",
            "Bulk SMS",
            "Bulk WhatsApp"
          ]}
        />

      </div>
    </div>
  );
};

// Service Card Component
const ServiceCard = ({ icon, title, items }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="bg-blue-100 p-3 rounded-full mr-4">
            {icon}
          </div>
          <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        </div>
        <ul className="space-y-3">
          {items.map((item, index) => (
            <li key={index} className="flex items-start">
              <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServicesSection;