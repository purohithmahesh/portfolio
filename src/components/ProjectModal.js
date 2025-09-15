
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Github, ExternalLink } from 'lucide-react';

const ProjectModal = ({ isOpen, onClose, project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Reset image index when modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentImageIndex(0);
    }
  }, [isOpen]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!isOpen) return;
      
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isOpen, currentImageIndex]);

  // Disable body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const goToNext = () => {
    if (project?.screenshots && currentImageIndex < project.screenshots.length - 1) {
      setCurrentImageIndex(prev => prev + 1);
    }
  };

  const goToPrevious = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(prev => prev - 1);
    }
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  if (!project) return null;

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3
      }
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.2
      }
    }
  };

  const overlayVariants = {
    hidden: {
      opacity: 0,
      transition: {
        duration: 0.2
      }
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2
      }
    }
  };

  const imageVariants = {
    enter: {
      x: 300,
      opacity: 0
    },
    center: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      x: -300,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Background Blur Overlay */}
          <div className="absolute inset-0 bg-dark-900/80 backdrop-blur-lg" />
          
          {/* Modal Content */}
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative bg-dark-800 rounded-2xl border border-dark-700 shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-dark-700">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <div className="flex items-center gap-4">
                  <span className="px-3 py-1 bg-primary-500/20 text-primary-400 text-sm font-medium rounded-full border border-primary-500/30">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-3">
                    {project.github && (
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors duration-300"
                      >
                        <Github size={18} />
                        <span className="text-sm">Code</span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="p-2 text-gray-400 hover:text-white hover:bg-dark-700 rounded-lg transition-all duration-300"
              >
                <X size={24} />
              </motion.button>
            </div>

            {/* Image Carousel */}
            <div className="relative">
              {project.screenshots && project.screenshots.length > 0 ? (
                <>
                  {/* Main Image */}
                  <div className="relative h-96 sm:h-[500px] overflow-hidden bg-dark-900">
                    <AnimatePresence mode="wait" custom={currentImageIndex}>
                      <motion.img
                        key={currentImageIndex}
                        custom={currentImageIndex}
                        variants={imageVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        src={project.screenshots[currentImageIndex]}
                        alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          e.target.src = '/api/placeholder/800/500';
                        }}
                      />
                    </AnimatePresence>
                    
                    {/* Navigation Arrows */}
                    {project.screenshots.length > 1 && (
                      <>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={goToPrevious}
                          disabled={currentImageIndex === 0}
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-dark-800/80 hover:bg-dark-700 text-white rounded-full border border-dark-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm"
                        >
                          <ChevronLeft size={20} />
                        </motion.button>
                        
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={goToNext}
                          disabled={currentImageIndex === project.screenshots.length - 1}
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-dark-800/80 hover:bg-dark-700 text-white rounded-full border border-dark-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm"
                        >
                          <ChevronRight size={20} />
                        </motion.button>
                      </>
                    )}

                    {/* Image Counter */}
                    {project.screenshots.length > 1 && (
                      <div className="absolute top-4 right-4 px-3 py-1 bg-dark-800/80 text-white text-sm rounded-full border border-dark-600 backdrop-blur-sm">
                        {currentImageIndex + 1} / {project.screenshots.length}
                      </div>
                    )}
                  </div>

                  {/* Thumbnail Navigation */}
                  {project.screenshots.length > 1 && (
                    <div className="p-4 border-t border-dark-700">
                      <div className="flex gap-2 justify-center overflow-x-auto">
                        {project.screenshots.map((screenshot, index) => (
                          <motion.button
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => goToImage(index)}
                            className={`relative w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                              currentImageIndex === index
                                ? 'border-primary-500 shadow-lg shadow-primary-500/25'
                                : 'border-dark-600 hover:border-dark-500'
                            }`}
                          >
                            <img
                              src={screenshot}
                              alt={`${project.title} thumbnail ${index + 1}`}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.target.src = '/api/placeholder/100/100';
                              }}
                            />
                            {currentImageIndex === index && (
                              <div className="absolute inset-0 bg-primary-500/20" />
                            )}
                          </motion.button>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <div className="h-96 flex items-center justify-center bg-dark-900">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                      <ExternalLink className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-gray-400">No screenshots available</p>
                  </div>
                </div>
              )}
            </div>

            {/* Project Details */}
            <div className="p-6 border-t border-dark-700">
              <p className="text-gray-300 leading-relaxed mb-4">
                {project.description}
              </p>
              
              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies?.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-dark-700/50 text-gray-300 text-sm rounded-full border border-dark-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
