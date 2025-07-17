import React from "react";
import { useNavigate } from "react-router-dom";
import ServicesPage from "../Services/ServicesPage";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="bg-gradient-to-r from-indigo-50 via-gray-50 to-indigo-100 min-h-screen flex items-center justify-center px-4 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-8">
            Your All-in-One Destination <br className="hidden sm:block" />
            for Academic Projects & <br className="hidden sm:block" />
            Software Services
          </h1>

          <p className="text-gray-700 text-lg md:text-xl lg:text-2xl mb-10 max-w-3xl mx-auto">
            From college students to small businesses and institutions —{" "}
            <span className="font-semibold text-indigo-600">CodeSewa</span>{" "}
            provides ready-made projects, custom software, and digital solutions
            tailored to your sector's needs. Learn, build, and grow with
            confidence.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => navigate("project-lab")}
              className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md cursor-pointer transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            >
              Readymade Projects
            </button>
            <button
              onClick={() => navigate("contact")}
              className="bg-indigo-600 hover:bg-indigo-700 text-white cursor-pointer font-semibold py-3 px-8 rounded-lg shadow-md transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            >
              Submit Enquiry
            </button>
          </div>
        </div>
      </div>

      <ServicesPage />

      <section className="py-4 pb-10">
        <center>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose CodeSewa?
          </h2>
          <p className="text-lg text-gray-600 max-w-[80%] mx-auto">
            CodeSewa is your trusted partner for academic and digital growth. We
            offer high-quality project development, web and software solutions,
            and skill-focused internships tailored for students, startups, and
            institutions. Backed by Udyam (MSME) registration, we ensure
            affordable, timely, and reliable services that drive real results.
            Whether it's a final-year project or a digital solution for your
            business—CodeSewa delivers with excellence.
          </p>
        </center>
      </section>
    </div>
  );
};

export default Home;
