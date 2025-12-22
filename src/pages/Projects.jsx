import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, FileText, Trophy, Layers, Code } from 'lucide-react';

const Projects = () => {
  const projects = [
    // --- RESEARCH PROJECTS (2 Images) ---
    {
      title: "Autonomous Agentic Offloading",
      subtitle: "Edge-Cloud Optimization System",
      desc: "An implementable agent-based system that decides between edge vs. cloud execution. Designed the data pipeline and a React-based decision interface for contextual state reasoning.",
      tags: ["Agentic AI", "ReAct", "Systems", "Python"],
      // PLACEHOLDERS: Replace with your actual file paths later
      images: [
        "https://placehold.co/400x300/e2e8f0/475569?text=Paper+Snapshot", 
        "https://placehold.co/400x300/475569/ffffff?text=System+Architecture"
      ],
      repoLink: "#", // Placeholder for GitHub
      paperLink: "#", // Placeholder for Paper PDF/Link
      demoLink: null,
      type: "Ongoing Research",
      layout: "split" // Custom flag for 2 images
    },
    {
      title: "Fast Domain Adaptation for IoT",
      subtitle: "COMSNETS 2026 Accepted Paper",
      desc: "Implemented a Meta-Learning + Federated Knowledge Distillation framework to compress neural networks for IoT. Reduced training time while maintaining generalization.",
      tags: ["Federated Learning", "Meta-Learning", "IoT"],
      images: [
        "https://placehold.co/400x300/e2e8f0/475569?text=Paper+Header", 
        "https://placehold.co/400x300/475569/ffffff?text=Model+Code"
      ],
      repoLink: "#",
      paperLink: "#",
      demoLink: null,
      type: "Conference Paper",
      layout: "split"
    },

    // --- DEV PROJECTS (1 Image) ---
    {
      title: "Ultimate Tic-Tac-Toe Platform",
      subtitle: "Live Competitive Game Bot",
      desc: "Built a live gaming platform supporting 100+ players. Engineered an AI bot using Minimax algorithm with Alpha-Beta pruning to play optimally within time budgets.",
      tags: ["Algorithms", "Minimax", "Game Theory", "React"],
      images: [
        "https://placehold.co/800x400/sage/white?text=Game+Interface+Screenshot"
      ],
      repoLink: "#",
      demoLink: "#", // Placeholder for Live Link
      type: "1st Place Winner",
      isWinner: true,
      layout: "full"
    },
    {
      title: "Order in Chaos",
      subtitle: "Visual Frame Reconstruction",
      desc: "Reconstructed scrambled video frames using Kruskal’s MST and Union-Find algorithms. Optimized the O(N² log N) pipeline via parallel processing.",
      tags: ["OpenCV", "Python", "Kruskal's Algo"],
      images: [
        "https://placehold.co/800x400/lavender/white?text=Reconstruction+Visual"
      ],
      repoLink: "#",
      demoLink: null,
      type: "Special Mention",
      isWinner: true,
      layout: "full"
    },
    // --- CREATIVE & UTILITY (Full View) ---
    {
      title: "Light Side",
      subtitle: "CSS-Only Design Challenge",
      desc: "A pure CSS visual design project for 'Style Wars'. The challenge: Style a raw HTML file using ONLY CSS—no JavaScript, no HTML edits. Just pure visual creativity.",
      tags: ["Pure CSS", "Design System", "Creative Coding"],
      images: [
        "https://placehold.co/800x400/e2e8f0/475569?text=CSS+Art+Preview"
      ],
      repoLink: "#",
      demoLink: "#",
      type: "Honorary Mention", // Sourced from your CV
      isWinner: true, // Adds the trophy/badge effect
      layout: "full"
    },
    {
      title: "Talika",
      subtitle: "Productivity made peaceful.",
      desc: "A clean, distraction-free task manager designed for students. Built to help organize daily chaos with a minimalist interface and soothing aesthetics.",
      tags: ["Productivity", "JavaScript", "UI/UX"],
      images: [
        "https://placehold.co/800x400/sage/white?text=Talika+Dashboard"
      ],
      repoLink: "#",
      demoLink: "https://task-manage-web-lavanyabhadani.netlify.app/",
      type: "Web App",
      layout: "full"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="min-h-screen py-10 md:py-16">
      
      {/* Header */}
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white"
        >
          Research & <span className="text-sage">Builds</span>
        </motion.h2>
        <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          From publishing papers on IoT optimization to engineering winning game bots.
        </p>
      </div>

      {/* Projects Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            variants={cardVariants}
            className="group relative bg-white/60 dark:bg-slate-800/40 backdrop-blur-md border border-white/20 dark:border-slate-700 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
          >
            {/* Image Section Logic */}
            <div className="relative h-64 overflow-hidden bg-slate-200 dark:bg-slate-700 flex">
              
              {/* Conditional Rendering for Images */}
              {project.layout === 'split' ? (
                // Split View for Research (Paper + Code)
                <>
                  <div className="w-1/2 h-full border-r border-white/20 relative">
                    <img src={project.images[0]} alt="Paper" className="w-full h-full object-cover" />
                    <div className="absolute bottom-2 left-2 bg-black/50 text-white text-[10px] px-2 py-1 rounded backdrop-blur-sm">Paper</div>
                  </div>
                  <div className="w-1/2 h-full relative">
                    <img src={project.images[1]} alt="Code/System" className="w-full h-full object-cover" />
                    <div className="absolute bottom-2 right-2 bg-black/50 text-white text-[10px] px-2 py-1 rounded backdrop-blur-sm">System</div>
                  </div>
                </>
              ) : (
                // Full View for Apps
                <img src={project.images[0]} alt="App Screenshot" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
              )}

              {/* Badges Overlay */}
              <div className="absolute top-4 right-4 z-20 flex gap-2">
                {project.isWinner && (
                  <span className="px-3 py-1 text-xs font-bold bg-yellow-400/90 text-yellow-900 rounded-full shadow-sm backdrop-blur-sm flex items-center gap-1">
                    <Trophy className="w-3 h-3" /> Winner
                  </span>
                )}
                <span className="px-3 py-1 text-xs font-semibold bg-white/90 dark:bg-slate-900/90 text-sage rounded-full shadow-sm backdrop-blur-sm border border-sage/20">
                  {project.type}
                </span>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6 md:p-8 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-1 group-hover:text-sage transition-colors">
                {project.title}
              </h3>
              <p className="text-sm font-medium text-lavender mb-4 italic">
                {project.subtitle}
              </p>
              
              <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed line-clamp-3">
                {project.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                {project.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 text-xs font-medium bg-sage/10 text-sage dark:text-sage-light rounded-md border border-sage/20">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Links */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-100 dark:border-slate-700/50">
                {project.paperLink && (
                  <a href={project.paperLink} className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-sage dark:hover:text-sage transition-colors">
                    <FileText className="w-4 h-4" /> Paper
                  </a>
                )}
                
                {project.demoLink && (
                  <a href={project.demoLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-sage dark:hover:text-sage transition-colors">
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </a>
                )}

                {/* GitHub Link (Always present but checks for placeholder) */}
                 <a href={project.repoLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-sage dark:hover:text-sage transition-colors ml-auto">
                   <Github className="w-4 h-4" /> 
                   {project.layout === 'split' ? 'Code / Repo' : 'Source Code'}
                 </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
};

export default Projects;