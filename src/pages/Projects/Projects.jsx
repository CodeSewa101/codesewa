import React, { useState } from 'react';
import { portfolio } from '../../data';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="portfolio" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-lg font-medium text-indigo-600 mb-2">Our Portfolio</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Digital Solutions That Deliver Impact
          </h2>
        </div>
        
        {portfolio.length === 0 ? (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-500">Projects coming soon!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <div 
                key={index}
                className="group relative bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl"
              >
                {/* Image container with zoom effect */}
                <div className="relative h-60 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay that appears on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <button 
                      onClick={() => setSelectedProject(project)}
                      className="w-full py-2 px-4 bg-white text-indigo-600 font-medium rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      View Case Study
                    </button>
                  </div>
                </div>
                
                {/* Content that stays visible */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                  
                  {project.tags && (
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag, i) => (
                        <span key={i} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded group-hover:bg-indigo-50 group-hover:text-indigo-700 transition-colors">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative h-64 w-full">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title}
                className="w-full h-full object-cover rounded-t-xl"
              />
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-white/80 hover:bg-white rounded-full p-2 backdrop-blur-sm transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{selectedProject.title}</h3>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.tags?.map((tag, i) => (
                  <span key={i} className="text-xs bg-indigo-50 text-indigo-700 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              
              <p className="text-gray-600 mb-6 whitespace-pre-line">{selectedProject.description}</p>
              
              <div className="flex justify-end">
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;