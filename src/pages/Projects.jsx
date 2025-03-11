import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'Unity 3D Game',
      description: 'A 3D multiplayer car racing game made in Unity, using C#.',
      tech: ['Unity', 'C#', '3D Modeling', 'Networking'],
      image: 'https://images.unsplash.com/photo-1614294148960-9aa740632a87?auto=format&fit=crop&q=80&w=1200'
    },
    {
      title: 'E-Commerce Website',
      description: 'Built a fully functional e-commerce platform with product listings, shopping cart, and payment gateway integration.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Database'],
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1200'
    },
    {
      title: 'Weather App',
      description: 'Developed a real-time weather forecast app using OpenWeather API.',
      tech: ['HTML', 'CSS', 'JavaScript', 'API Integration'],
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=1200'
    }
  ];

  return (
    <div className="min-h-screen py-20 pt-32">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          My Projects
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-110 duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-accent rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;