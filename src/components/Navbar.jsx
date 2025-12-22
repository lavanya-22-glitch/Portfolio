import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Sun, Moon, Github, Linkedin, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import useTheme from '../hooks/useTheme';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // Define navigation links here for cleaner code
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  // Animation variants for the mobile menu
  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  return (
    <nav className="fixed w-full z-50 top-0 start-0 border-b border-gray-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md transition-colors duration-300">
      <div className="px-6 max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        
        {/* Logo / Name */}
        <Link 
          to="/" 
          className="flex items-center space-x-3 rtl:space-x-reverse"
          onClick={() => setIsOpen(false)}
        >
          <span className="self-center text-2xl font-display font-bold whitespace-nowrap text-slate-800 dark:text-white bg-clip-text hover:text-sage transition-colors">
            Lavanya Bhadani
          </span>
        </Link>

        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse items-center gap-2">
          
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors focus:outline-none"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-slate-600" />
            )}
          </button>

          {/* Social Icons (Desktop Only) */}
          <div className="hidden md:flex gap-2 pl-4 border-l border-gray-300 dark:border-slate-700">
             <a href="https://github.com/lavanya-22-glitch" target="_blank" rel="noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-sage dark:hover:text-sage transition-colors">
               <Github className="w-5 h-5" />
             </a>
             <a href="https://www.linkedin.com/in/lavanya-bhadani-1834b1313/" target="_blank" rel="noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-sage dark:hover:text-sage transition-colors">
               <Linkedin className="w-5 h-5" />
             </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700"
            aria-controls="navbar-sticky"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `block py-2 px-3 rounded md:p-0 transition-all duration-300 relative group ${
                      isActive 
                        ? 'text-sage font-semibold' 
                        : 'text-slate-700 dark:text-slate-300 hover:text-sage dark:hover:text-sage'
                    }`
                  }
                >
                  {link.name}
                  {/* Underline Animation */}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sage transition-all duration-300 group-hover:w-full"></span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Menu (Animated) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-16 left-0 w-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-b border-gray-200 dark:border-slate-800 shadow-lg"
          >
            <ul className="flex flex-col p-4 font-medium">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `block py-3 px-4 rounded-lg transition-colors ${
                        isActive
                          ? 'bg-sage/10 text-sage'
                          : 'text-slate-700 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-800'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
              {/* Mobile Socials */}
              <div className="flex gap-4 mt-4 pt-4 border-t border-gray-200 dark:border-slate-800 justify-center">
                 <a href="https://github.com/lavanya-22-glitch" target="_blank" rel="noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-sage">
                   <Github className="w-6 h-6" />
                 </a>
                 <a href="https://www.linkedin.com/in/lavanya-bhadani-1834b1313/" target="_blank" rel="noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-sage">
                   <Linkedin className="w-6 h-6" />
                 </a>
                 <a href="mailto:lavi.bhadani@gmail.com" className="text-slate-600 dark:text-slate-400 hover:text-sage">
                   <Mail className="w-6 h-6" />
                 </a>
              </div>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;