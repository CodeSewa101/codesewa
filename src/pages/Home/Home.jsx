// import React from "react";
// import { useNavigate } from "react-router-dom";
// import ServicesPage from "../Services/ServicesPage";

// const Home = () => {
//   const navigate = useNavigate();

//   return (
//     <div>
//       <div className="bg-gradient-to-r from-indigo-50 via-gray-50 to-indigo-100 min-h-screen flex items-center justify-center px-4 py-16 sm:py-20">
//         <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-8">
//             Your All-in-One Destination <br className="hidden sm:block" />
//             for Academic Projects & <br className="hidden sm:block" />
//             Software Services
//           </h1>

//           <p className="text-gray-700 text-lg md:text-xl lg:text-2xl mb-10 max-w-3xl mx-auto">
//             From college students to small businesses and institutions —{" "}
//             <span className="font-semibold text-indigo-600">CodeSewa</span>{" "}
//             provides ready-made projects, custom software, and digital solutions
//             tailored to your sector's needs. Learn, build, and grow with
//             confidence.
//           </p>

//           <div className="flex flex-col sm:flex-row justify-center gap-4">
//             <button
//               onClick={() => navigate("project-lab")}
//               className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md cursor-pointer transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
//             >
//               Readymade Projects
//             </button>
//             <button
//               onClick={() => navigate("contact")}
//               className="bg-indigo-600 hover:bg-indigo-700 text-white cursor-pointer font-semibold py-3 px-8 rounded-lg shadow-md transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
//             >
//               Submit Enquiry
//             </button>
//           </div>
//         </div>
//       </div>

//       <ServicesPage />

//       <section className="py-4 pb-10">
//         <center>
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">
//             Why Choose CodeSewa?
//           </h2>
//           <p className="text-lg text-gray-600 max-w-[80%] mx-auto">
//             CodeSewa is your trusted partner for academic and digital growth. We
//             offer high-quality project development, web and software solutions,
//             and skill-focused internships tailored for students, startups, and
//             institutions. Backed by Udyam (MSME) registration, we ensure
//             affordable, timely, and reliable services that drive real results.
//             Whether it's a final-year project or a digital solution for your
//             business—CodeSewa delivers with excellence.
//           </p>
//         </center>
//       </section>
//     </div>
//   );
// };

// export default Home;
import React from "react";
import { useNavigate } from "react-router-dom";
import ServicesPage from "../Services/ServicesPage";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Hero Section with White & Blue Gradient */}
      <div className="bg-gradient-to-br from-white via-blue-50 to-blue-100 min-h-screen flex items-center justify-center px-4 py-16 sm:py-20 relative overflow-hidden">
        {/* Simple background pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full blur-xl"></div>
          <div className="absolute bottom-32 right-16 w-16 h-16 bg-indigo-200 rounded-full blur-xl"></div>
          <div className="absolute top-1/3 right-20 w-12 h-12 bg-blue-300 rounded-full blur-xl"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-8">
            Your All-in-One Destination <br className="hidden sm:block" />
            for Academic Projects & <br className="hidden sm:block" />
            <span className="text-blue-600">Software Services</span>
          </h1>

          <p className="text-gray-700 text-lg md:text-xl lg:text-2xl mb-10 max-w-3xl mx-auto">
            From college students to small businesses and institutions —{" "}
            <span className="font-semibold text-blue-600">CodeSewa</span>{" "}
            provides ready-made projects, custom software, and digital solutions
            tailored to your sector's needs. Learn, build, and grow with
            confidence.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <button
              onClick={() => navigate("project-lab")}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-8 rounded-lg shadow-lg cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              Readymade Projects
            </button>
            <button
              onClick={() => navigate("contact")}
              className="bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white cursor-pointer font-semibold py-4 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              Submit Enquiry
            </button>
          </div>

          {/* Simple trust indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>5+ Projects Delivered</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>MSME Registered</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>

      <ServicesPage />

      {/* Why Choose Section */}
      <section className="py-16 pb-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Why Choose <span className="text-blue-600">CodeSewa</span>?
            </h2>

            <div className="max-w-4xl mx-auto bg-white rounded-xl p-8 shadow-lg border border-blue-100">
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                CodeSewa is your trusted partner for academic and digital
                growth. We offer high-quality project development, web and
                software solutions, and skill-focused internships tailored for
                students, startups, and institutions. Backed by Udyam (MSME)
                registration, we ensure affordable, timely, and reliable
                services that drive real results. Whether it's a final-year
                project or a digital solution for your business—CodeSewa
                delivers with excellence.
              </p>

              {/* Simple feature grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-6 h-6 bg-blue-600 rounded-full"></div>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Fast Delivery
                  </h3>
                  <p className="text-sm text-gray-600">
                    Quick turnaround times without compromising quality
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-6 h-6 bg-indigo-600 rounded-full"></div>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Quality Assured
                  </h3>
                  <p className="text-sm text-gray-600">
                    Professional standards with thorough testing
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-6 h-6 bg-purple-600 rounded-full"></div>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Affordable
                  </h3>
                  <p className="text-sm text-gray-600">
                    Budget-friendly solutions for students and startups
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
