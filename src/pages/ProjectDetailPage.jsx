import React from 'react';
import { useParams, Link } from 'react-router-dom';
// Ensure the path is correct relative to src/pages/ProjectDetailPage.jsx
// If data folder is directly under src, this path is correct.
import { projectsData } from '../data/projects'; 
// Ensure NotFoundPage.jsx is in the same src/pages/ folder
import NotFoundPage from './NotFoundPage'; 
import { ArrowLeft } from 'lucide-react'; 

export default function ProjectDetailPage() {
  const { projectId } = useParams(); 
  
  // Check if projectsData is available before finding
  const project = projectsData?.find(p => p.id === parseInt(projectId)); 

  // If project not found, render the NotFoundPage
  if (!project) {
    // Make sure NotFoundPage component exists and is imported correctly
    return <NotFoundPage />; 
  }

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Link */}
        <Link 
          to="/projects" 
          className="inline-flex items-center text-green-600 hover:text-green-800 mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 mr-2 transition-transform duration-200 group-hover:-translate-x-1" />
          Back to All Projects
        </Link>

        {/* Project Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
            {project.title}
          </h1>
          {/* Optional: Add a subtitle or category here if needed */}
        </div>

        {/* Project Image */}
        <div className="mb-10">
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-lg mx-auto" 
          />
        </div>

        {/* Project Full Description */}
        {/* Added check for fullDescription existence */}
        {project.fullDescription && (
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>{project.fullDescription}</p>
          </div>
        )}
        
        {/* Optional: Add a CTA related to the project */}
        <div className="mt-12 text-center">
           <Link 
             to="/support-us" 
             className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
           >
             Support Projects Like This
           </Link>
        </div>

      </div>
    </div>
  );
}

