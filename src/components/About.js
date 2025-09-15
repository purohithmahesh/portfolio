import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Brain, TrendingUp, Users } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });


  const features = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full-Stack Development",
      description: "Building modern web applications with React, Node.js, and modern technologies"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI & Machine Learning",
      description: "Developing intelligent systems and algorithms for real-world applications"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Data Science & Analytics",
      description: "Building data-driven solutions and analytical tools for business insights"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Collaboration",
      description: "Working effectively in teams and leading projects to successful completion"
    }
  ];

  return (
    <section id="about" className="section-padding bg-dark-800/50">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A passionate developer with a love for innovation and problem-solving
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Profile Picture */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Profile Picture */}
              <div className="w-80 h-80 mx-auto rounded-2xl border border-primary-500/30 overflow-hidden shadow-2xl">
                <img 
                  src="/profile.jpg" 
                  alt="Mahesh Purohit - Profile Picture"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-8 h-8 bg-primary-500 rounded-full opacity-80"
              />
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary-400 rounded-full opacity-60"
              />
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Who I Am
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I'm a final-year B-Tech student passionate about technology and innovation. 
                                 My journey in software development started with a curiosity about how things work, 
                 which led me to explore various domains including web development, artificial intelligence, 
                 and data science.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                I believe in continuous learning and pushing the boundaries of what's possible. 
                                 Whether it's building responsive web applications, developing AI models, or creating 
                 data-driven solutions, I approach each challenge with enthusiasm and determination.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="flex items-start space-x-3 p-4 bg-dark-700/50 rounded-lg border border-dark-600 hover:border-primary-500/50 transition-all duration-300"
                >
                  <div className="text-primary-400 mt-1">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="grid grid-cols-3 gap-6 pt-6"
            >
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">4+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">20+</div>
                <div className="text-sm text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">5+</div>
                <div className="text-sm text-gray-400">Technologies</div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;


