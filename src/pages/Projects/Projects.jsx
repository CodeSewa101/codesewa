import React, { useState, useEffect } from "react";
import { portfolio } from "../../data";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Modal control functions
  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  // Keyboard escape handler
  useEffect(() => {
    const handleKeyDown = (e) => e.key === "Escape" && closeModal();
    if (selectedProject) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

  return (
    <section className="bg-white py-12 px-4 md:px-20" id="projects">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-indigo-700">
        Projects
      </h2>
      
      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolio.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
            className="group bg-white rounded-lg shadow-md overflow-hidden cursor-pointer border border-gray-100 hover:shadow-lg transition-all duration-300"
            onClick={() => openModal(project)}
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white font-medium">View Project</span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech?.slice(0, 3).map((tech, idx) => (
                  <span key={idx} className="text-xs bg-indigo-100 text-indigo-800 px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
                {project.tech?.length > 3 && (
                  <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">
                    +{project.tech.length - 3}
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Key Features Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white w-full max-w-2xl rounded-xl shadow-2xl relative max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-gray-600 hover:text-red-600 text-xl bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-all"
                onClick={closeModal}
              >
                <FaTimes />
              </button>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
                  {selectedProject.title}
                </h3>
                
                {/* Key Features Section with Custom Background */}
                <div className="bg-indigo-50/50 rounded-xl p-6 mb-6 border border-indigo-100">
                  <h4 className="text-xl font-bold text-center text-indigo-700 mb-6">
                    ✨ Our Projects
                  </h4>
                  
                  {/* Alternative List Style 1: Checkmark Bullets */}
                  <ul className="space-y-4">
                    {selectedProject.projectName?.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="flex-shrink-0 mt-1 mr-3 text-indigo-600">
                          ✓
                        </span>
                        <span className="font-medium text-gray-800">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Alternative List Style 2: Numbered (Uncomment to use) */}
                  {/* <ol className="list-decimal list-inside space-y-3 pl-4">
                    {selectedProject.projectName?.map((feature, idx) => (
                      <li key={idx} className="font-medium text-gray-800">
                        {feature}
                      </li>
                    ))}
                  </ol> */}
                  
                  {/* Alternative List Style 3: Card Style (Uncomment to use) */}
                  {/* <div className="grid gap-3">
                    {selectedProject.projectName?.map((feature, idx) => (
                      <div key={idx} className="bg-white p-3 rounded-lg shadow-sm border border-gray-200">
                        <p className="font-medium text-gray-800">{feature}</p>
                      </div>
                    ))}
                  </div> */}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;