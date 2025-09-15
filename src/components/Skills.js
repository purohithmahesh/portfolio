
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Code2, 
  Brain, 
  TrendingUp, 
  Database, 
  Github, 
  Globe,
  Zap,
  Shield,
  Cpu,
  Layers
} from 'lucide-react';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    {
      name: "React.js",
      icon: <Code2 className="w-8 h-8" />,
      description: "Frontend Development",
      color: "from-blue-500 to-cyan-500",
      level: 90
    },
    {
      name: "Python",
      icon: <Cpu className="w-8 h-8" />,
      description: "Backend & AI Development",
      color: "from-yellow-500 to-orange-500",
      level: 85
    },
    {
      name: "AI/ML",
      icon: <Brain className="w-8 h-8" />,
      description: "Machine Learning & Neural Networks",
      color: "from-purple-500 to-pink-500",
      level: 80
    },
    {
      name: "Data Science",
      icon: <TrendingUp className="w-8 h-8" />,
      description: "Data Analysis & ML",
      color: "from-green-500 to-emerald-500",
      level: 85
    },
    {
      name: "MongoDB",
      icon: <Database className="w-8 h-8" />,
      description: "Database Management",
      color: "from-green-600 to-green-700",
      level: 75
    },
    {
      name: "GitHub",
      icon: <Github className="w-8 h-8" />,
      description: "Version Control",
      color: "from-gray-700 to-gray-900",
      level: 90
    },
    {
      name: "Node.js",
      icon: <Globe className="w-8 h-8" />,
      description: "Backend Development",
      color: "from-green-500 to-green-600",
      level: 80
    },
    {
      name: "FastAPI",
      icon: <Zap className="w-8 h-8" />,
      description: "API Development",
      color: "from-teal-500 to-cyan-500",
      level: 75
    },
    {
      name: "Docker",
      icon: <Shield className="w-8 h-8" />,
      description: "Containerization",
      color: "from-blue-600 to-blue-700",
      level: 70
    },
    {
      name: "TensorFlow",
      icon: <Layers className="w-8 h-8" />,
      description: "Deep Learning",
      color: "from-orange-600 to-red-600",
      level: 75
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="skills" className="section-padding bg-dark-900">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                transition: { duration: 0.2 }
              }}
              className="group relative"
            >
              <div className="bg-dark-800/50 border border-dark-700 rounded-xl p-6 text-center hover:border-primary-500/50 transition-all duration-300 cursor-pointer">
                {/* Skill Icon */}
                <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${skill.color} p-4 text-white group-hover:shadow-lg transition-all duration-300`}>
                  {skill.icon}
                </div>
                
                {/* Skill Name */}
                <h3 className="font-semibold text-white mb-2 group-hover:text-primary-400 transition-colors duration-300">
                  {skill.name}
                </h3>
                
                {/* Skill Description */}
                <p className="text-sm text-gray-400 mb-4">
                  {skill.description}
                </p>
                
                {/* Skill Level Bar */}
                <div className="w-full bg-dark-700 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    className={`h-2 bg-gradient-to-r ${skill.color} rounded-full transition-all duration-300`}
                  />
                </div>
                
                {/* Skill Level Percentage */}
                <div className="text-xs text-primary-400 mt-2 font-mono">
                  {skill.level}%
                </div>
              </div>
              
              {/* Hover Effect Glow */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8">
            Other <span className="gradient-text">Technologies</span>
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS",
               "Next.js", "Express.js", "PostgreSQL", "AWS",
              "Linux", "Git", "REST APIs", "GraphQL"
            ].map((tech, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 1.0 + index * 0.05 }}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 bg-dark-700/50 border border-dark-600 rounded-full text-gray-300 hover:text-primary-400 hover:border-primary-500/50 transition-all duration-300 text-sm"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

