import React from 'react';

const ProjectCard = ({ image, title, description }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
            <p className="text-gray-600 text-base">{description}</p>
        </div>
    </div>
);

export default function ProjectsPage() {
  // <-- UPDATE THIS DATA WITH YOUR PROJECTS -->
  const projectsData = [
      {
          image: '/listening-youth.jpg', // Image in /public folder
          title: 'Tech for Peace Initiative',
          description: 'Training 500 youths in coding and digital skills to provide them with alternatives to conflict and unemployment.'
      },
      {
          image: '/happy-children.jpg', // Image in /public folder
          title: 'Agro-Entrepreneurship Program',
          description: 'Empowering rural communities by providing training and seed funding for sustainable farming and agribusiness ventures.'
      },
      {
          image: '/children-on-line.jpg', // Image in /public folder
          title: 'Community Dialogue Forums',
          description: 'Organizing forums that bring together youth from different ethnic and religious backgrounds to foster understanding and peace.'
      }
  ];

  return (
      <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
              <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Projects</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                  {projectsData.map((project, index) => (
                      <ProjectCard key={index} {...project} />
                  ))}
              </div>
          </div>
      </div>
  );
}
