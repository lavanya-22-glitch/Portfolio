import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // <--- ADD THIS
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';

const Home = () => {
  return (
    <section className="min-h-[85vh] flex items-center justify-center relative overflow-hidden">
      
      {/* Background Decor (Optional: Glowing Blobs) */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-sage/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob dark:bg-sage/10"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-lavender/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 dark:bg-lavender/10"></div>

      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Column: Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 md:order-1 text-center md:text-left space-y-6"
        >
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-medium text-slate-600 dark:text-slate-400">
              Hello there! I am
            </h2>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 dark:text-white leading-tight">
              Lavanya <span className="text-transparent bg-clip-text bg-gradient-to-r from-sage to-lavender">Bhadani</span>
            </h1>
            <h3 className="text-lg md:text-2xl text-sage font-medium tracking-wide">
              AI Researcher & Software Engineer
            </h3>
          </div>

          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
            I am a B.Tech undergraduate at <strong>IIT Patna</strong>, bridging the gap between deep learning research and production software. From publishing on <strong>Federated Learning</strong> to building <strong>Agentic AI</strong> systems, I am passionate about engineering solutions that are both intelligent and scalable.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
            
            {/* Download CV Button */}
            {/* Make sure to put your resume file in public/resume.pdf */}
            <a 
              href="/resume.pdf" 
              download="Lavanya_Bhadani_Resume.pdf"
              className="px-6 py-3 rounded-full bg-sage hover:bg-sage-dark text-white font-medium transition-all shadow-lg hover:shadow-sage/40 flex items-center gap-2 group transform hover:-translate-y-1"
            >
              Download CV 
              <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </a>

            {/* Let's Talk Button (Now Links to Contact Page) */}
            <Link 
              to="/contact"
              className="px-6 py-3 rounded-full border-2 border-slate-300 dark:border-slate-700 hover:border-lavender text-slate-700 dark:text-slate-300 hover:text-lavender dark:hover:text-lavender font-medium transition-all flex items-center gap-2 group bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm hover:-translate-y-1"
            >
              Let's Talk
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Social Links Row */}
          <div className="flex gap-6 justify-center md:justify-start pt-6 opacity-80">
            <a href="mailto:lavi.bhadani@gmail.com" className="hover:text-sage transition-colors transform hover:scale-110">
              <Mail className="w-6 h-6" />
            </a>
            <a href="https://github.com/lavanya-22-glitch" target="_blank" rel="noreferrer" className="hover:text-sage transition-colors transform hover:scale-110">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/lavanya-bhadani-1834b1313/" target="_blank" rel="noreferrer" className="hover:text-sage transition-colors transform hover:scale-110">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </motion.div>

        {/* Right Column: Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 md:order-2 flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            {/* The decorative circle behind image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-sage/20 to-lavender/20 rounded-full animate-pulse blur-2xl"></div>
            
            {/* The Image Container */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/30 dark:border-slate-700/50 shadow-2xl backdrop-blur-sm">
              {/* MAKE SURE THIS PATH IS CORRECT IN YOUR PUBLIC FOLDER */}
              <img 
                src="/images/self.jpeg" 
                alt="Lavanya Bhadani" 
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Home;