import React, { useState } from "react";

const ProjectLab = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = {
    "Web Development": [
      "Online Job Portal",
      "Online Shopping System",
      "Online Food Ordering System",
      "Portfolio Builder Platform",
      "Hospital Management System",
      "School ERP System",
      "Event Management System",
      "Online Voting System",
      "Online Movie Ticket Booking System",
      "Weather Forecast Dashboard",
      "Online Book Store",
      "Car Rental System",
      "Library Management System",
      "Online Job Seeking Application",
      "Online Home Stay",
      "Tourist Management System",
    ],
    "Data Science & Analytics": [
      "Healthcare Data Analysis",
      "Student Performance Analysis",
      "College Dropout Prediction",
      "Credit Card Fraud Detection",
      "Placement Chance Prediction",
      "Food Delivery Time Prediction",
      "Sentiment Analysis of Feedback",
      "Loan Approval Prediction",
      "Movie Recommendation System",
      "Supermarket Sales Dashboard",
      "Fake News Detection",
      "Used Car Price Prediction",
      "Retail Sales Dashboard",
      "House Price Prediction",
      "Flight Price Prediction",
    ],
    "AI/ML Projects": [
      "AI Chatbot",
      "Number Guessing Game with AI",
      "Voice Calculator",
      "Face Detection System",
      "Smart Attendance System",
      "Text-to-Speech Converter",
      "Image Caption Generator",
      "AI Math Solver",
      "AI Name Suggester",
    ],
    "IoT Systems": [
      "Smart Dustbin",
      "Home Automation System",
      "IoT Door Lock",
      "Smart Attendance System",
      "Smart Street Lighting",
      "IoT Smart Mirror",
    ],
  };

  const allProjects = Object.entries(categories).flatMap(
    ([category, projects]) => projects.map((project) => ({ project, category }))
  );

  const filteredProjects = allProjects.filter((item) => {
    const matchesCategory =
      activeCategory === "All" || item.category === activeCategory;
    const matchesSearch = item.project
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 px-4 py-12 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Our Readymade Project
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore innovative project ideas across different technology domains
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 mb-10">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search projects..."
              className="block w-full pl-10 pr-4 py-3 rounded-xl border-0 shadow-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5">
            Browse All Projects
          </button>
        </div>

        <div className="flex flex-wrap gap-3 mb-10 justify-center">
          <button
            onClick={() => setActiveCategory("All")}
            className={`px-5 py-2.5 rounded-full font-medium transition-all ${
              activeCategory === "All"
                ? "bg-blue-600 text-white shadow-md"
                : "bg-white text-gray-700 hover:bg-gray-100 shadow-sm"
            }`}
          >
            All Projects
          </button>

          {Object.keys(categories).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full font-medium cursor-pointer transition-all ${
                activeCategory === category
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-gray-100 shadow-sm"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {activeCategory === "All" ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {Object.entries(categories).map(([title, items]) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 border border-gray-100"
              >
                <div className="flex items-center mb-5">
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-500 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                    {title === "Web Development" && (
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                        />
                      </svg>
                    )}
                    {title === "Data Science & Analytics" && (
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        />
                      </svg>
                    )}
                    {title === "AI/ML Projects" && (
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                        />
                      </svg>
                    )}
                    {title === "IoT Systems" && (
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                        />
                      </svg>
                    )}
                  </div>
                  <h2 className="text-xl font-bold text-gray-800">{title}</h2>
                </div>
                <ul className="space-y-3">
                  {items.slice(0, 5).map((item) => (
                    <li key={item} className="flex items-start group">
                      <div className="bg-blue-100 w-2 h-2 rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 group-hover:text-blue-600 transition-colors">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((item, index) => (
              <div
                key={item.project}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100 flex flex-col"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-500 w-10 h-10 rounded-lg flex items-center justify-center mr-3">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">
                    {item.project}
                  </h3>
                </div>
                <div className="mt-auto">
                  <div className="inline-block px-3 py-1 text-xs font-semibold text-blue-700 bg-blue-100 rounded-full">
                    {item.category}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to start your next project?
          </h3>
          <p className="text-blue-100 max-w-2xl mx-auto mb-6">
            Join thousands of developers building innovative projects with our
            resources and tools
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <button className="px-6 py-3 bg-white text-blue-600 font-medium rounded-xl shadow-md hover:bg-blue-50 transition-all">
              Get Started
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectLab;
