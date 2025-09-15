
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Trophy, Award, Star, Target, Users, Zap, Code2 } from "lucide-react";

const Achievements = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const achievements = [
    {
      year: "2023",
      title: "SIH Finalist",
      description:
        "Reached the final round of Smart India Hackathon, showcasing innovative solutions for real-world problems.",
      icon: <Trophy className="w-6 h-6" />,
      category: "Competition",
      color: "from-yellow-500 to-orange-500",
    },
    {
      year: "2024",
      title: "Bootcamp Winner",
      description:
        "Won first place in the AI/ML Bootcamp organized by leading tech companies, demonstrating exceptional skills in machine learning.",
      icon: <Award className="w-6 h-6" />,
      category: "Training",
      color: "from-blue-500 to-cyan-500",
    },
    {
      year: "2022",
      title: "3rd Rank in College",
      description:
        "Achieved third rank in the entire college based on academic performance across all departments.",
      icon: <Star className="w-6 h-6" />,
      category: "Academic",
      color: "from-purple-500 to-pink-500",
    },
    // {
    //   year: "2023",
    //   title: "Hackathon Champion",
    //   description:
    //     "Led team to victory in college hackathon, developing an innovative AI-powered solution for healthcare data analysis.",
    //   icon: <Target className="w-6 h-6" />,
    //   category: "Competition",
    //   color: "from-green-500 to-emerald-500",
    // },
    {
      year: "2022",
      title: "Best Project Award",
      description:
        "Received recognition for developing a comprehensive data analytics system that demonstrated advanced machine learning capabilities.",
      icon: <Zap className="w-6 h-6" />,
      category: "Project",
      color: "from-red-500 to-pink-500",
    },
    {
      year: "2023",
      title: "Leadership Excellence",
      description:
        "Recognized for outstanding leadership in organizing technical events and mentoring junior students in programming.",
      icon: <Users className="w-6 h-6" />,
      category: "Leadership",
      color: "from-indigo-500 to-purple-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="achievements" className="section-padding bg-dark-900">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            <span className="gradient-text">Achievements</span> & Awards
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Milestones and recognition that mark my journey in technology
          </p>
        </motion.div>

        {/* Timeline Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-primary-600"></div>

          <div className="space-y-12">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-col md:gap-8`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 -translate-x-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-dark-900 z-10"></div>

                {/* Content Card */}
                <div
                  className={`flex-1 ${
                    index % 2 === 0 ? "md:ml-8" : "md:mr-8"
                  } ml-16 md:ml-0`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-dark-800/50 border border-dark-700 rounded-xl p-6 hover:border-primary-500/50 transition-all duration-300 group"
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-12 h-12 rounded-lg bg-gradient-to-br ${achievement.color} p-3 text-white group-hover:scale-110 transition-transform duration-300`}
                        >
                          {achievement.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors duration-300">
                            {achievement.title}
                          </h3>
                          <span className="text-sm text-primary-400 font-medium">
                            {achievement.category}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold gradient-text">
                          {achievement.year}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 leading-relaxed">
                      {achievement.description}
                    </p>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                number: "1+",
                label: "Hackathons",
                icon: <Target className="w-8 h-8" />,
              },
              {
                number: "3+",
                label: "Awards Won",
                icon: <Trophy className="w-8 h-8" />,
              },
              {
                number: "12+",
                label: "Projects",
                icon: <Code2 className="w-8 h-8" />,
              },
              {
                number: "50+",
                label: "Students Mentored",
                icon: <Users className="w-8 h-8" />,
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary-500/20 to-primary-600/20 rounded-xl border border-primary-500/30 flex items-center justify-center text-primary-400 group-hover:scale-110 transition-all duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
