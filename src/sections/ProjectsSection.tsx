import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import HandImage from '../Assets/HAND CLAP COUNTER.jpg';
import FaceImage from '../Assets/FACE DETECTION.jpg';
import shop from '../Assets/E-COMMERCE WEBSITE.jpg';
import chat from '../Assets/CHATBOT AI UI INTERFACE.jpg';


type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
};

const ProjectsSection: React.FC = () => {
  const [projects] = useState<Project[]>([
    {
      id: 1,
      title: "HAND CLAP COUNTER",
      description: "A Hand Clap Counter is a simple application that detects and counts the number of claps using a microphone",
      image: HandImage,
      tags: ["JAVASCRIPT", "PYTHON"],
      githubUrl: "https://github.com",
      liveUrl: "https://drive.google.com/file/d/1T9diEgYZx6pPhQ8TdPhbm8GjL402q8Tl/view?usp=drivesdk "
    },
    {
      id: 2,
      title: "E-COMMERCE WEBSITE",
      description: "An E-Commerce Website is an online platform that allows users to browse products, add items to a cart, and make secure purchases",
      image: shop,
      tags: ["React Native", "Reactjs", "TypeScript", "Tailwindcss"],
      githubUrl: " https://github.com/Dandikarthik/Dandico",
      liveUrl: "https://dandikarthik.github.io/Dandico/,"
    },
    {
      id: 3,
      title: "FACE DETECTION",
      description: "Face Detection is a computer vision technology that identifies and locates human faces in images or video. ",
      image: FaceImage,
      tags: ["openCV2", "Python"],
      githubUrl: "https://github.com/Dandikarthik/FaceDetection",
      liveUrl: ""
    },
    {
      id: 4,
      title: "CHATBOT AI UI INTERFACE",
      description: "A Chatbot AI UI Interface is a front-end application that allows users to interact with an AI-powered chatbot in a conversational format. It typically features a clean chat window, user input box, message bubbles, and typing indicators to mimic real-time human-like interaction.",
      image: chat,
      tags: ["TYPESCRIPT", "ReactJs","Tailwindcss"],
      githubUrl: "https://github.com/Dandikarthik/ChatBot",
      liveUrl: "https://dandikarthik.github.io/ChatBot/"
    }
  ]);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({ 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5, 
        delay: 0.1 * i 
      }
    })
  };

  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-primary-900 to-primary-950">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2 
          className="section-title text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>
        
        <motion.p 
          className="text-center text-gray-300 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Here are some of my recent projects that showcase my skills and experience in building modern web applications.
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="group relative overflow-hidden rounded-xl bg-primary-900/70 border border-primary-800/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary-600/10"
            >
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950 to-transparent opacity-80"></div>
              </div>
              
              <div className="p-6 relative z-10">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-2 py-1 text-xs rounded-full bg-primary-800/50 text-primary-300 border border-primary-700/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-full bg-primary-800 text-white hover:bg-primary-700 transition-colors"
                    aria-label="View on GitHub"
                  >
                    <Github size={18} />
                  </motion.a>
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-full bg-accent-700 text-white hover:bg-accent-600 transition-colors"
                    aria-label="View Live Demo"
                  >
                    <ExternalLink size={18} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a 
            href="https://github.com/Dandikarthik"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-800/50 hover:bg-primary-800 text-white rounded-lg font-medium transition-colors border border-primary-700/50"
          >
            <Github size={18} />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;