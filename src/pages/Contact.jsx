import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Github, Linkedin, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'inquiry',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:lavi.bhadani@gmail.com?subject=${formData.subject}: ${formData.name}&body=${formData.message} (From: ${formData.email})`;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="min-h-screen py-12 md:py-24 px-6 md:px-12">
      
      {/* Header */}
      <div className="text-center mb-20">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white"
        >
          Ping <span className="text-sage">Me!</span>
        </motion.h2>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          Have a project in mind or just want to say hi? I'd love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
        
        {/* LEFT COLUMN: Contact Info */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-10"
        >
          <div className="prose dark:prose-invert">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
              Let's create something amazing.
            </h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8 text-lg">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. If you have a question or just want to connect, feel free to reach out!
            </p>
          </div>

          <div className="space-y-6">
            <a href="mailto:lavi.bhadani@gmail.com" className="flex items-center gap-5 p-6 bg-white/60 dark:bg-slate-800/40 border border-white/20 dark:border-slate-700 rounded-2xl hover:border-sage/50 transition-colors group shadow-sm">
              <div className="p-4 bg-sage/10 text-sage rounded-full group-hover:bg-sage group-hover:text-white transition-colors">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 dark:text-white text-lg">Email Me</h4>
                <p className="text-slate-500 dark:text-slate-400">lavi.bhadani@gmail.com</p>
              </div>
            </a>

            <div className="flex items-center gap-5 p-6 bg-white/60 dark:bg-slate-800/40 border border-white/20 dark:border-slate-700 rounded-2xl shadow-sm">
              <div className="p-4 bg-lavender/10 text-lavender-dark dark:text-lavender-light rounded-full">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 dark:text-white text-lg">Location</h4>
                <p className="text-slate-500 dark:text-slate-400">Indian Institute of Technology (IIT) Patna Campus, Bihar, India</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4 pt-2">
            <a href="https://github.com/lavanya-22-glitch" target="_blank" rel="noreferrer" className="p-4 bg-slate-200 dark:bg-slate-800 rounded-full hover:bg-sage hover:text-white dark:hover:bg-sage transition-all transform hover:scale-110">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/lavanya-bhadani-1834b1313/" target="_blank" rel="noreferrer" className="p-4 bg-slate-200 dark:bg-slate-800 rounded-full hover:bg-sage hover:text-white dark:hover:bg-sage transition-all transform hover:scale-110">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </motion.div>


        {/* RIGHT COLUMN: Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/70 dark:bg-slate-800/50 backdrop-blur-xl p-8 md:p-10 rounded-3xl border border-white/20 dark:border-slate-700 shadow-xl"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Your Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 bg-white/50 dark:bg-slate-900/50 border border-gray-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-sage/50 transition-all placeholder-gray-400"
                placeholder="Lavanya Bhadani"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Your Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 bg-white/50 dark:bg-slate-900/50 border border-gray-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-sage/50 transition-all placeholder-gray-400"
                placeholder="lavanya@example.com"
              />
            </div>

            {/* SUBJECT FIELD - Fixed Icon Alignment */}
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Subject</label>
              <div className="relative">
                <select 
                  id="subject" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-white/50 dark:bg-slate-900/50 border border-gray-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-sage/50 transition-all appearance-none cursor-pointer"
                >
                  <option value="inquiry">General Inquiry</option>
                  <option value="project">Project Proposal</option>
                  <option value="feedback">Feedback</option>
                </select>
                {/* FIXED: Replaced 'top-4.5' with 'top-1/2 transform -translate-y-1/2'
                   This centers the icon perfectly regardless of input height.
                */}
                <MessageSquare className="absolute right-5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows="5" 
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 bg-white/50 dark:bg-slate-900/50 border border-gray-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-sage/50 transition-all placeholder-gray-400 resize-none"
                placeholder="Tell me about your ideas..."
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full py-4 bg-gradient-to-r from-sage to-sage-dark text-white font-bold rounded-xl shadow-lg hover:shadow-sage/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 text-lg"
            >
              <Send className="w-5 h-5" /> Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;