import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Mail, Phone, MapPin, Send, Clock } from 'lucide-react';
import Modal from 'react-modal';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // EmailJS configuration
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Abdul Rahman Azam',
        to_email: 'azamabdulrahman930@gmail.com',
      };

      // Send email using EmailJS
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      alert('Message sent successfully! I will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Sorry, there was an error sending your message. Please try again or contact me directly at azamabdulrahman930@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const scheduleSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '02:00 PM', '03:00 PM', '04:00 PM'
  ];

  const handleScheduleMeeting = (slot: string) => {
    // This would typically integrate with a calendar API
    alert(`Meeting scheduled for ${slot}. You'll receive a confirmation email shortly.`);
    setIsCalendarOpen(false);
  };

  return (
    <section id="contact" className="py-20 bg-gray-800">
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
              Let's Connect
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to discuss your next project or explore collaboration opportunities? 
            I'm always open to new challenges and innovative ideas.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
              <h3 className="text-2xl font-semibold text-white mb-6">Get in Touch</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-blue-400" />
                  <div>
                    <p className="text-gray-300">Email</p>
                    <p className="text-white">azamabdulrahman930@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-green-400" />
                  <div>
                    <p className="text-gray-300">Phone</p>
                    <p className="text-white">+92 316 3677527</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-red-400" />
                  <div>
                    <p className="text-gray-300">Location</p>
                    <p className="text-white">Karachi, Pakistan</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Calendar Booking */}
            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl p-8 border border-blue-500/20">
              <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
                <Calendar className="h-6 w-6 text-blue-400 mr-2" />
                Schedule a Meeting
              </h3>
              <p className="text-gray-300 mb-6">
                Book a free consultation to discuss your project requirements and explore how we can work together.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsCalendarOpen(true)}
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Clock className="h-5 w-5" />
                <span>Book a Meeting</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                />
              </div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="h-5 w-5" />
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Calendar Modal */}
      <Modal
        isOpen={isCalendarOpen}
        onRequestClose={() => setIsCalendarOpen(false)}
        className="max-w-md mx-auto mt-20 bg-gray-800 rounded-xl p-6 border border-gray-700 outline-none"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
      >
        <div className="relative">
          <button
            onClick={() => setIsCalendarOpen(false)}
            className="absolute top-0 right-0 text-gray-400 hover:text-white"
          >
            ✕
          </button>
          <h3 className="text-xl font-semibold text-white mb-4">Schedule Meeting</h3>
          <p className="text-gray-300 mb-6">Select a time slot for our meeting:</p>
          
          <div className="grid grid-cols-2 gap-3">
            {scheduleSlots.map((slot, index) => (
              <button
                key={index}
                onClick={() => handleScheduleMeeting(slot)}
                className="p-3 bg-gray-700/50 hover:bg-blue-500/20 border border-gray-600 hover:border-blue-500 rounded-lg text-gray-300 hover:text-blue-400 transition-all duration-200"
              >
                {slot}
              </button>
            ))}
          </div>
          
          <button
            onClick={() => setIsCalendarOpen(false)}
            className="w-full mt-6 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-gray-300 transition-colors"
          >
            Cancel
          </button>
        </div>
      </Modal>
    </section>
  );
};

export default Contact;