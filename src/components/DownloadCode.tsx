import React from 'react';
import { Download, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

const DownloadResume = () => {
  const handleResumeDownload = () => {
    try {
      // Create a link element to download the resume
      const link = document.createElement('a');
      link.href = '/ABDUL RAHMAN AZAM RESUME.pdf'; // Path to resume in public folder
      link.download = 'Abdul_Rahman_Azam_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Resume download failed:', error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-4 right-4 z-50"
    >
      <motion.button
        onClick={handleResumeDownload}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center space-x-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <FileText className="h-5 w-5" />
        <span>Resume</span>
        <Download className="h-4 w-4" />
      </motion.button>
    </motion.div>
  );
};

export default DownloadResume;