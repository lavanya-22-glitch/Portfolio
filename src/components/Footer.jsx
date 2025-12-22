import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full py-8 mt-16 border-t border-gray-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 backdrop-blur-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-6">

        {/* Social Links Row */}
        <div className="flex gap-8">
          <a 
            href="https://github.com/lavanya-22-glitch" 
            target="_blank" 
            rel="noreferrer" 
            className="text-slate-500 hover:text-sage dark:text-slate-400 dark:hover:text-sage transition-all transform hover:scale-110 hover:-translate-y-1"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a 
            href="https://www.linkedin.com/in/lavanya-bhadani-1834b1313/" 
            target="_blank" 
            rel="noreferrer" 
            className="text-slate-500 hover:text-sage dark:text-slate-400 dark:hover:text-sage transition-all transform hover:scale-110 hover:-translate-y-1"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a 
            href="mailto:lavi.bhadani@gmail.com" 
            className="text-slate-500 hover:text-sage dark:text-slate-400 dark:hover:text-sage transition-all transform hover:scale-110 hover:-translate-y-1"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>

        {/* Quick Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
          <Link to="/" className="hover:text-sage transition-colors">Home</Link>
          <Link to="/about" className="hover:text-sage transition-colors">About</Link>
          <Link to="/projects" className="hover:text-sage transition-colors">Projects</Link>
          <Link to="/blog" className="hover:text-sage transition-colors">Blog</Link>
          <Link to="/contact" className="hover:text-sage transition-colors">Contact</Link>
        </nav>

        {/* Divider Line */}
        <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-sage/50 to-transparent rounded-full opacity-50"></div>

        {/* Copyright & Credits */}
        <div className="text-center space-y-2">
          <p className="text-sm text-slate-500 dark:text-slate-400 flex items-center justify-center gap-1.5">
            Designed & Built with <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" /> by Lavanya Bhadani
          </p>
          <p className="text-xs text-slate-400 dark:text-slate-600">
            © {new Date().getFullYear()} All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;