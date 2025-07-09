import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: "AI & Machine Learning",
      skills: [
        { name: "Python", level: 85 },
        { name: "TensorFlow", level: 75 },
        { name: "PyTorch", level: 70 },
        { name: "Scikit-learn", level: 80 },
        { name: "OpenCV", level: 65 },
      ],
      color: "from-blue-400 to-cyan-400"
    },
    {
      title: "Blockchain & Web3",
      skills: [
        { name: "Solidity", level: 70 },
        { name: "Ethereum", level: 75 },
        { name: "Web3.js", level: 65 },
        { name: "Smart Contracts", level: 72 },
        { name: "DeFi", level: 60 },
      ],
      color: "from-purple-400 to-pink-400"
    },
    {
      title: "Web Development",
      skills: [
        { name: "React", level: 80 },
        { name: "TypeScript", level: 75 },
        { name: "Node.js", level: 70 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Next.js", level: 65 },
      ],
      color: "from-green-400 to-emerald-400"
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", level: 85 },
        { name: "Docker", level: 60 },
        { name: "Linux", level: 75 },
        { name: "VS Code", level: 90 },
        { name: "Figma", level: 70 },
      ],
      color: "from-yellow-400 to-orange-400"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise across different domains
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50"
            >
              <h3 className={`text-xl font-semibold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="relative">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                        className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;