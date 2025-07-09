import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Code className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Abdul Rahman Azam
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              AI enthusiast and blockchain developer passionate about creating innovative solutions 
              that shape the future of technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <nav className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-gray-400 hover:text-blue-400 transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
            <div className="flex space-x-4">
              <motion.a
                href="https://github.com/abdulrahmanazam"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
              >
                <Github className="h-5 w-5 text-gray-400 hover:text-white" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/abdulrahmanazam"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
              >
                <Linkedin className="h-5 w-5 text-gray-400 hover:text-blue-400" />
              </motion.a>
              <motion.a
                href="mailto:azamabdulrahman930@gmail.com"
                whileHover={{ scale: 1.1 }}
                className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
              >
                <Mail className="h-5 w-5 text-gray-400 hover:text-green-400" />
              </motion.a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center space-x-2">
            <span>© 2025 Abdul Rahman Azam. Built with</span>
            <Heart className="h-4 w-4 text-red-400" />
            <span>and cutting-edge technology</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;