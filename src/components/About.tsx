import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Brain, Blocks, Code, Zap } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const achievements = [
    {
      icon: <GraduationCap className="h-8 w-8 text-blue-400" />,
      title: "Academic Excellence",
      description: "Pursuing Bachelor's in Artificial Intelligence at FAST NUCES Karachi, focusing on machine learning and deep learning technologies."
    },
    {
      icon: <Brain className="h-8 w-8 text-purple-400" />,
      title: "AI Research",
      description: "Actively researching in machine learning, neural networks, and computer vision with hands-on projects in TensorFlow and PyTorch."
    },
    {
      icon: <Blocks className="h-8 w-8 text-green-400" />,
      title: "Blockchain Development",
      description: "Building decentralized applications and smart contracts on Ethereum, exploring DeFi protocols and Web3 technologies."
    },
    {
      icon: <Code className="h-8 w-8 text-yellow-400" />,
      title: "Full-Stack Development",
      description: "Currently mastering modern web technologies including React, Node.js, and TypeScript to create responsive web applications."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
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
              About Me
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate technology enthusiast with a deep interest in artificial intelligence, 
            blockchain technology, and web development. Currently pursuing my Bachelor's degree in 
            Artificial Intelligence at FAST NUCES Karachi, I'm dedicated to creating innovative 
            solutions that bridge the gap between cutting-edge research and practical applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group"
            >
              <div className="flex items-start space-x-4">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                  className="p-3 bg-gray-700/50 rounded-lg group-hover:bg-gray-600/50 transition-colors"
                >
                  {achievement.icon}
                </motion.div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl p-8 border border-blue-500/20"
        >
          <div className="flex items-center justify-center mb-6">
            <Zap className="h-8 w-8 text-yellow-400 mr-3" />
            <h3 className="text-2xl font-bold text-white">Current Focus</h3>
          </div>
          <p className="text-gray-300 text-center max-w-2xl mx-auto leading-relaxed">
            Currently expanding my expertise in web development while continuing my research in AI and blockchain. 
            I'm particularly interested in the intersection of these technologies and how they can be combined to 
            create the next generation of intelligent, decentralized applications.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;