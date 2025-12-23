import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Brain, Database, Award, Terminal, Cpu } from 'lucide-react';

const Skills = () => {
  // 1. Core Technical Proficiency (Progress Bars)
  // Sourced from Languages & Frameworks in your CV
  const technicalSkills = [
    { name: "Python (AI/ML Stack)", level: 90 },
    { name: "C++ (DSA & Logic)", level: 95 },
    { name: "React.js & Tailwind", level: 85 },
    { name: "SQL & Databases", level: 70 },
    { name: "PyTorch & NumPy", level: 80 },
  ];

  // 2. Specialized AI/ML Domains (Badges)
  // Sourced from "AI/ML" section in your CV
  const specializations = [
    "Federated Learning", 
    "Reinforcement Learning", 
    "GenAI Prompt Engineering", 
    "Meta-Learning", 
    "Knowledge Distillation", 
    "Agentic AI Systems"
  ];

  // 3. Tools & Web Technologies
  const tools = [
    "Git / GitHub", "Pandas", "Scikit-learn", 
    "OpenCV", "VS Code", "Figma"
  ];

  // 4. Soft Skills (Leadership)
  const softSkills = [
    "Leadership (GDG Lead)", 
    "Public Speaking", 
    "Mentorship", 
    "Strategic Planning", 
    "Problem Solving"
  ];

  // 5. Certifications
  // Sourced directly from "Certifications" in CV
  const certifications = [
    { name: "Data Science & Full Stack", issuer: "GeeksforGeeks" },
    { name: "Machine Learning with Python", issuer: "Finlatics" },
    { name: "Python Front-End Dev", issuer: "YHills" },
  ];

  return (
    <section className="min-h-screen py-10 md:py-16">
      
      {/* Header */}
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white"
        >
          Technical <span className="text-sage">Arsenal</span>
        </motion.h2>
        <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          A blend of advanced AI research capabilities and full-stack engineering tools.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* LEFT COLUMN: Proficiency & Tools */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* Core Skills */}
          <div className="bg-white/60 dark:bg-slate-800/40 backdrop-blur-md rounded-2xl p-8 border border-white/20 dark:border-slate-700 shadow-sm">
            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-2">
              <Code2 className="text-sage" /> Core Competencies
            </h3>
            
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{skill.name}</span>
                    <span className="text-sm font-medium text-sage">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2.5 overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="bg-gradient-to-r from-sage to-lavender h-2.5 rounded-full"
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Web */}
          <div className="bg-white/60 dark:bg-slate-800/40 backdrop-blur-md rounded-2xl p-8 border border-white/20 dark:border-slate-700 shadow-sm">
             <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-2">
              <Terminal className="text-blue-500" /> Libraries & Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {tools.map((item, index) => (
                <span key={index} className="px-3 py-1 bg-blue-50 dark:bg-slate-700/50 text-blue-600 dark:text-blue-300 text-sm font-medium rounded-lg border border-blue-100 dark:border-slate-600">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: AI Specializations & Certs */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-8"
        >
          
          {/* AI Specializations (Highlighted) */}
          <div className="bg-white/60 dark:bg-slate-800/40 backdrop-blur-md rounded-2xl p-8 border border-white/20 dark:border-slate-700 shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Cpu className="w-24 h-24 text-sage" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-2 relative z-10">
              <Brain className="text-lavender" /> AI & Research Focus
            </h3>
            <div className="flex flex-wrap gap-3 relative z-10">
              {specializations.map((skill, index) => (
                <span key={index} className="px-4 py-2 bg-lavender/10 text-lavender-dark dark:text-lavender-light text-sm font-semibold rounded-full border border-lavender/20">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-white/60 dark:bg-slate-800/40 backdrop-blur-md rounded-2xl p-8 border border-white/20 dark:border-slate-700 shadow-sm">
            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-2">
              <Award className="text-yellow-500" /> Certifications
            </h3>
            <ul className="space-y-4">
              {certifications.map((cert, index) => (
                <li key={index} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-white/50 dark:bg-slate-900/50 rounded-lg border border-gray-100 dark:border-slate-700 hover:border-sage/50 transition-colors">
                  <span className="font-semibold text-slate-800 dark:text-slate-200">{cert.name}</span>
                  <span className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 sm:mt-0">{cert.issuer}</span>
                </li>
              ))}
            </ul>
          </div>

           {/* Soft Skills */}
           <div className="bg-white/60 dark:bg-slate-800/40 backdrop-blur-md rounded-2xl p-8 border border-white/20 dark:border-slate-700 shadow-sm">
            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-2">
              <Database className="text-orange-500" /> Leadership & Soft Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((item, index) => (
                <span key={index} className="px-3 py-1 bg-orange-50 dark:bg-slate-700/50 text-orange-600 dark:text-orange-300 text-sm font-medium rounded-lg border border-orange-100 dark:border-slate-600">
                  {item}
                </span>
              ))}
            </div>
          </div>

        </motion.div>
      </div>

    </section>
  );
};

export default Skills;