import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Eye } from 'lucide-react';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "AI-Powered Trading Bot",
      description: "Machine learning-based cryptocurrency trading bot that analyzes market trends and executes trades automatically using technical indicators and sentiment analysis.",
      image: "https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Python", "TensorFlow", "API Integration", "Technical Analysis"],
      liveUrl: "https://example.com/trading-bot",
      githubUrl: "https://github.com/example/trading-bot",
      category: "AI"
    },
    {
      title: "DeFi Yield Farming Platform",
      description: "Decentralized finance platform built on Ethereum that allows users to stake tokens and earn rewards through liquidity provision and yield farming strategies.",
      image: "https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Solidity", "React", "Web3.js", "Smart Contracts"],
      liveUrl: "https://example.com/defi-platform",
      githubUrl: "https://github.com/example/defi-platform",
      category: "Blockchain"
    },
    {
      title: "Neural Network Visualizer",
      description: "Interactive web application that visualizes neural network architectures and training processes, helping students understand deep learning concepts through animation.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React", "D3.js", "TensorFlow.js", "TypeScript"],
      liveUrl: "https://example.com/nn-visualizer",
      githubUrl: "https://github.com/example/nn-visualizer",
      category: "AI"
    },
    {
      title: "Blockchain Voting System",
      description: "Secure and transparent voting system built on blockchain technology that ensures vote integrity and provides real-time results with complete audit trails.",
      image: "https://images.pexels.com/photos/6057623/pexels-photo-6057623.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Solidity", "Next.js", "Metamask", "IPFS"],
      liveUrl: "https://example.com/voting-system",
      githubUrl: "https://github.com/example/voting-system",
      category: "Blockchain"
    },
    {
      title: "E-commerce Analytics Dashboard",
      description: "Full-stack web application providing comprehensive analytics for e-commerce businesses with real-time data visualization and predictive insights.",
      image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React", "Node.js", "MongoDB", "Chart.js"],
      liveUrl: "https://example.com/analytics-dashboard",
      githubUrl: "https://github.com/example/analytics-dashboard",
      category: "Web"
    },
    {
      title: "AI Content Generator",
      description: "GPT-powered content generation tool that creates high-quality articles, blog posts, and marketing copy with customizable tone and style preferences.",
      image: "https://images.pexels.com/photos/5474028/pexels-photo-5474028.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Python", "OpenAI API", "FastAPI", "React"],
      liveUrl: "https://example.com/content-generator",
      githubUrl: "https://github.com/example/content-generator",
      category: "AI"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
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
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore my latest projects showcasing AI, blockchain, and web development expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                    project.category === 'AI' ? 'bg-blue-500/20 text-blue-400' :
                    project.category === 'Blockchain' ? 'bg-purple-500/20 text-purple-400' :
                    'bg-green-500/20 text-green-400'
                  }`}>
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-colors"
                  >
                    <Eye size={16} />
                    <span>Live Demo</span>
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 px-4 py-2 bg-gray-700/50 text-gray-300 rounded-lg hover:bg-gray-600/50 transition-colors"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;