import React from 'react';
import { Link } from 'react-router-dom'; 
// Corrected import path assuming 'data' folder is under 'src'
import { projectsData } from '../data/projects'; 


export default function ProjectsPage() {
  // Add a check to ensure projectsData is an array before mapping
  if (!Array.isArray(projectsData)) {
    console.error("Projects data is not loaded correctly.");
    // Optionally return a loading state or error message
    return <div className="text-center py-12">Loading projects or error loading data...</div>;
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Our Projects
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Explore the initiatives we're leading to empower youth and foster peace.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            // Wrap the card content in a Link component
            <Link 
              to={`/projects/${project.id}`} // Link to the specific project detail page
              key={project.id} 
              className="group block bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-xl"
            >
              <div >
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-56 object-cover group-hover:opacity-90 transition-opacity" // Slightly change image on hover
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-green-700 transition-colors"> 
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {project.description}
                  </p>
                  <span className="text-sm font-semibold text-green-600 group-hover:underline">
                    View Details &rarr; 
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {/* Optional: Add a section about how to get involved or propose a project */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Want to get involved?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Your support can help us launch even more impactful projects. Learn how you can contribute or partner with us.
          </p>
          <Link 
            to="/support-us" 
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            Support Our Work
          </Link>
        </div>
      </div>
    </div>
  );
}