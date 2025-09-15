import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Eye, Github, ArrowRight, Code2 } from 'lucide-react';
import ProjectModal from './ProjectModal';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const projects = [
    {
      id: 'ai-financial-segmentation',
      title: "AI-Based Financial Needs Segmentation",
      description: "An intelligent data analytics system that uses machine learning to process large datasets and provide actionable insights. Features real-time data processing, predictive analytics, and interactive dashboards.",
      image: "/api/placeholder/400/250",
      technologies: ["Still in PROGRESS"],
      github: "#",
      category: "AI/ML & Data Science",
      screenshots: [
        "/screenshots/ai-financial-segmentation/image.png"
      ]
    },
    {
      id: 'ecommerce-buyflow',
      title: "E-Commerce Web Application(BuyFLOW)",
      description: "Developed a responsive shopping platform with product catalog, cart, and payment integration. Improved user experience with secure checkout and mobile-friendly design.",
      image: "/api/placeholder/400/250",
      technologies: ["Javascript","TypeScript", "HTML"],
      github: "https://github.com/purohithmahesh/ECommerce-BuyFLOW-",
      category: "Digital Platforms",
      screenshots: [
        "/screenshots/ecommerce-buyflow/img1.png",
        "/screenshots/ecommerce-buyflow/img2.png",
        "/screenshots/ecommerce-buyflow/img3.png",
        "/screenshots/ecommerce-buyflow/img4.png",
        "/screenshots/ecommerce-buyflow/img5.png",
        "/screenshots/ecommerce-buyflow/img7.png",
        "/screenshots/ecommerce-buyflow/img8.png"
      ]
    },
    {
      id: 'lost-found-portal',
      title: "Lost & Found Portal",
      description: "Created a web portal to report, search, and track lost items within a community or campus. Simplified item recovery with automated matching and notifications.",
      image: "/api/placeholder/400/250",
      technologies: ["JavaScript", "HTML", "CSS",  "MongoDB", "Node.js"],
      github: "https://github.com/purohithmahesh/Lost-Found",
      category: "Web Development/Digital Platforms",
      screenshots: [
        "/screenshots/lost-found-portal/img1.png",
        "/screenshots/lost-found-portal/img2.png",
        "/screenshots/lost-found-portal/img3.png",
        "/screenshots/lost-found-portal/img4.png",
        "/screenshots/lost-found-portal/img5.png",
        "/screenshots/lost-found-portal/img6.png"
      ]
    },
    {
      id: 'ai-whiteboard-summarizer',
      title: "AI Whiteboard Summarizer",
      description: "Designed an AI tool that captures and summarizes handwritten notes from whiteboards. Helps users convert classroom or meeting notes into structured digital text.",
      image: "/api/placeholder/400/250",
      technologies: ["Python", "HTML"],
      github: "https://github.com/purohithmahesh/Ai-WhiteBoard-Summarizer",
      category: "AI/ML & Data Science",
      screenshots: [
        "/screenshots/ai-whiteboard-summarizer/img1.png",
        "/screenshots/ai-whiteboard-summarizer/img2.png",
        "/screenshots/ai-whiteboard-summarizer/img3.png"
      ]
    },
    {
      id: 'library-management-system',
      title: "Library Management System",
      description: "Built a system for book cataloging, issue/return tracking, and student records management. Enhanced efficiency with search, overdue alerts, and reporting features.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
      github: "https://github.com/purohithmahesh/Library-Management-System",
      category: "Digital Platforms",
      screenshots: [
        "/screenshots/library-management-system/img1.png",
        "/screenshots/library-management-system/img2.png",
        "/screenshots/library-management-system/img3.png",
        "/screenshots/library-management-system/img4.png",
        "/screenshots/library-management-system/img5.png",
        "/screenshots/library-management-system/img6.png"
      ]
    },
    {
      id: 'Agriculture',
      title: "AI-Powered Agriculture Assistant",
      description: "Developed an AI system to provide crop recommendations, pest detection, and yield predictions using data from soil, weather, and farming patterns. Helps farmers make data-driven decisions to improve productivity and reduce losses",
      image: "/api/placeholder/400/250",
      technologies: ["Still in PROGRESS"],
      github: "/",
      category: "AI/ML & Data Science",
      screenshots: [
        "/screenshots/Agriculture/image.png"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="projects" className="section-padding bg-dark-800/50">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work and technical expertise
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03,
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group bg-dark-800/50 border border-dark-700 rounded-xl overflow-hidden hover:border-primary-500/50 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-dark-700 to-dark-800 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                      <Code2 className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-primary-400 font-medium">{project.title}</p>
                    <p className="text-sm text-gray-500 mt-1">Project Preview</p>
                  </div>
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary-500/20 text-primary-400 text-xs font-medium rounded-full border border-primary-500/30">
                    {project.category}
                  </span>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <div className="flex gap-2">
                      {project.github && (
                        <motion.a
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-dark-800/80 hover:bg-primary-600 text-white text-center py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                        >
                          <Github size={16} />
                          Code
                        </motion.a>
                      )}
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => openModal(project)}
                        className="flex-1 bg-primary-600 hover:bg-primary-700 text-white text-center py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        <Eye size={16} />
                        View
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-dark-700/50 text-gray-300 text-xs rounded border border-dark-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Project Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => openModal(project)}
                  className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 font-medium text-sm transition-colors duration-300 group-hover:gap-3"
                >
                  View Project
                  <ArrowRight size={16} className="transition-transform duration-300" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-12"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/purohithmahesh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Github size={20} />
            View All Projects on GitHub
            <ArrowRight size={20} />
          </motion.a>
        </motion.div>
      </div>

      {/* Project Modal */}
      <ProjectModal 
        isOpen={isModalOpen}
        onClose={closeModal}
        project={selectedProject}
      />
    </section>
  );
};

export default Projects;
