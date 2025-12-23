import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, FileText, Trophy, X, RotateCw, Maximize2 } from 'lucide-react';

// --- SUB-COMPONENT: PROJECT CARD ---
const ProjectCard = ({ project, onExpand }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  // Helper to stop flip when clicking links/images/buttons
  const stopProp = (e) => e.stopPropagation();

  return (
    <div 
      className="group h-[550px] w-full perspective-1000 cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, animationDirection: "normal" }}
        className="w-full h-full relative [transform-style:preserve-3d]"
      >
        {/* ================= FRONT FACE ================= */}
        <div className="absolute inset-0 w-full h-full bg-white dark:bg-slate-800 rounded-2xl shadow-md border border-slate-200 dark:border-slate-700 overflow-hidden [backface-visibility:hidden] flex flex-col hover:shadow-xl transition-shadow duration-300">
          
          {/* 1. IMAGE SECTION (Top 45%) */}
          <div className="relative h-[45%] overflow-hidden bg-slate-100 dark:bg-slate-700 group-hover:brightness-95 transition-all">
            
            {/* LAYOUT LOGIC */}
            {project.layout === 'grid' ? (
              <div className="w-full h-full grid grid-cols-2 grid-rows-2">
                {project.images.map((img, i) => (
                  <img key={i} src={img} alt="" onClick={(e) => { stopProp(e); onExpand(img); }} className="w-full h-full object-cover border-[0.5px] border-white/10" />
                ))}
              </div>
            ) : project.layout === 'split' ? (
              <div className="w-full h-full flex">
                <div className="w-1/2 h-full border-r border-white/20 relative">
                  <img src={project.images[0]} alt="" onClick={(e) => { stopProp(e); onExpand(project.images[0]); }} className="w-full h-full object-cover" />
                  <div className="absolute bottom-2 left-2 bg-black/60 text-white text-[10px] px-2 py-1 rounded backdrop-blur-md pointer-events-none">Paper</div>
                </div>
                <div className="w-1/2 h-full relative">
                  <img src={project.images[1]} alt="" onClick={(e) => { stopProp(e); onExpand(project.images[1]); }} className="w-full h-full object-cover" />
                  <div className="absolute bottom-2 right-2 bg-black/60 text-white text-[10px] px-2 py-1 rounded backdrop-blur-md pointer-events-none">System</div>
                </div>
              </div>
            ) : (
              <img src={project.images[0]} alt="" onClick={(e) => { stopProp(e); onExpand(project.images[0]); }} className="w-full h-full object-cover" />
            )}

            {/* Expand Icon */}
            <button
              onClick={(e) => { stopProp(e); onExpand(project.images[0]); }}
              className="absolute top-3 right-3 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full backdrop-blur-md transition opacity-0 group-hover:opacity-100"
              title="Expand Image"
            >
              <Maximize2 className="w-4 h-4" />
            </button>

            {/* Badges */}
            <div className="absolute top-3 left-3 flex gap-2 pointer-events-none">
              {project.isWinner && (
                <span className="px-2 py-1 text-[10px] font-bold bg-yellow-400 text-yellow-900 rounded shadow-sm flex items-center gap-1">
                  <Trophy className="w-3 h-3" /> Winner
                </span>
              )}
              <span className="px-2 py-1 text-[10px] font-semibold bg-white/90 dark:bg-slate-900/90 text-slate-700 dark:text-slate-200 rounded shadow-sm">
                {project.type}
              </span>
            </div>
          </div>

          {/* 2. CONTENT SECTION (Bottom 55%) */}
          <div className="flex flex-col h-[55%] p-5">
            
            {/* Title & Subtitle */}
            <div className="mb-3">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-tight mb-1">
                {project.title}
              </h3>
              <p className="text-sm font-medium text-sage italic">
                {project.subtitle}
              </p>
            </div>

            {/* Description (Clamped to 3 lines) */}
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3 mb-4">
              {project.desc}
            </p>

            {/* Spacer to push Footer to bottom */}
            <div className="flex-grow" />

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, i) => (
                <span key={i} className="px-2 py-1 text-[10px] font-medium bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded border border-slate-200 dark:border-slate-600">
                  {tag}
                </span>
              ))}
            </div>

            {/* Footer Links */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-700">
               {/* Paper Link */}
               {project.paperLink ? (
                  <a href={project.paperLink} onClick={stopProp} className="flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-200 hover:text-sage transition">
                    <FileText className="w-4 h-4" /> Paper
                  </a>
               ) : <div />}
               

               {/* Repo/Demo Link */}
               <div className="flex gap-4">
                 {project.demoLink && (
                    <a href={project.demoLink} target="_blank" rel="noreferrer" onClick={stopProp} className="flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-200 hover:text-sage transition">
                      <ExternalLink className="w-4 h-4" /> Live
                    </a>
                 )}
                 {project.repoLink && (
                   <a href={project.repoLink} target="_blank" rel="noreferrer" onClick={stopProp} className="flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-200 hover:text-sage transition">
                     <Github className="w-4 h-4" /> Code / Repo
                   </a>
                 )}
                 {project.videoLink && (
                 <a href={project.videoLink} target="_blank" rel="noreferrer" onClick={stopProp} className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-sage transition">
                   <ExternalLink className="w-4 h-4" /> Video
                 </a>
               )}
               </div>
            </div>

          </div>
        </div>

        {/* ================= BACK FACE (Full Description) ================= */}
        <div 
          className="absolute inset-0 w-full h-full bg-slate-50 dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-8 flex flex-col [backface-visibility:hidden] [transform:rotateY(180deg)]"
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-slate-700 dark:text-slate-200">Detailed Overview</h3>
            <button className="text-slate-400 hover:text-sage transition">
              <RotateCw className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-grow overflow-y-auto custom-scrollbar pr-2">
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm whitespace-pre-line">
              {/* Uses longDesc if available, otherwise falls back to desc */}
              {project.longDesc || project.desc}
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-700 text-center text-xs text-slate-400">
            Tap to flip back
          </div>
        </div>

      </motion.div>
    </div>
  );
};

// --- MAIN COMPONENT ---
const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const projects = [
    // --- RESEARCH PROJECTS ---
    {
      title: "Autonomous Agentic Offloading",
      subtitle: "Edge-Cloud Optimization System",
      // Front:
      desc: "An implementable agent-based system that decides between edge vs. cloud execution. Designed the data pipeline and a ReAct-based decision interface for contextual state reasoning.",
      // Back:
      longDesc: "This project addresses the dynamic nature of Edge-Cloud computing by deploying an Autonomous Agent to handle task offloading. Unlike static algorithms, the agent uses ReAct (Reasoning + Acting) prompting to evaluate real-time network conditions, latency constraints, and energy costs before making a decision.\n\nTechnically, I engineered the complete data pipeline using Python to simulate network environments and built a responsive React frontend. This interface visualizes the agent's 'thought process' step-by-step, providing interpretability for why a specific offloading decision was made.",
      tags: ["Agentic AI", "ReAct", "Systems", "Python"],
      images: [
        "/images/taskoffloading.png", 
        "https://placehold.co/400x300/475569/ffffff?text=System+Architecture"
      ],
      // repoLink: "#", 
      paperLink: "https://drive.google.com/file/d/16X9uJ7jrqyC8D3OHGqFM7y4fia7SY9ns/view?usp=drive_link", 
      demoLink: null,
      type: "Ongoing Research",
      layout: "full" 
    },


        // --- DEV PROJECTS ---
    {
      title: "Ultimate Tic-Tac-Toe Platform",
      subtitle: "Live Competitive Game Bot",
      // Front:
      desc: "Built a live gaming platform supporting 50+ players. Engineered an AI bot using Minimax algorithm with Alpha-Beta pruning to play optimally within time budgets.",
      // Back:
      longDesc: "Built and deployed a live Ultimate Tic-Tac-Toe platform supporting human-vs-bot, human-vs-human, and user-uploaded bot competitions; used by 50+ players.\n\nImplemented a high-performance strategy bot by reducing search space from ~10^76 states (naive) to ~10^6 states per move using Minimax, Alpha–Beta pruning, transposition tables, time-bounded search, and graph-based optimizations for efficient state-space exploration.\n\nWon first place in intra-college coding competition by NJACK ML by defeating 48 bots and scoring a 5.6/6.",
      tags: ["Algorithms", "Minimax", "Game Theory", "React"],
      images: [
        "/images/ttt (4).png",
        "/images/ttt (1).png",
        "/images/ttt (2).png",
        "/images/ttt (3).png"
      ],
      videoLink: "https://drive.google.com/file/d/1Apnya0tqz89O1m3rvoAHpzkBaPeRaY-B/view?usp=sharing",
      repoLink: "https://github.com/lavanya-22-glitch/ultimate-ttt-app",
      demoLink: "https://ultimate-ttt-app-front.onrender.com/", 
      type: "1st Place Winner",
      isWinner: true,
      layout: "grid"
    },
    {
      title: "Order in Chaos",
      subtitle: "Visual Frame Reconstruction",
      // Front:
      desc: "Reconstructed scrambled video frames using Kruskal’s MST and Union-Find algorithms. Optimized the O(N² log N) pipeline via parallel processing.",
      // Back:
      longDesc: "Solved a complex computer vision puzzle: reconstructing a video stream from scrambled fragments without timestamps. I modeled the problem as a graph where video frames were nodes and edge weights represented visual similarity based on pixel gradients.\n\nUsing Kruskal’s Minimum Spanning Tree (MST) and Union-Find algorithms, I reconstructed the correct sequence by finding the 'path of least resistance' between frames. To handle high-resolution inputs, I optimized the O(N² log N) pipeline using parallel processing techniques.\n\nReceived Honorary Mention place in intra-college coding competition by NJACK ML by scoring a 403/420.",
      tags: ["OpenCV", "Python", "Kruskal's Algo"],
      images: [
        "/images/chaos (1).png",
        "/images/chaos (3).png",
        "/images/chaos (4).png",
        "/images/chaos (2).png"
      ],
      repoLink: "https://github.com/lavanya-22-glitch/GraphVisionOrder",
      demoLink: null,
      type: "Special Mention",
      isWinner: true,
      layout: "grid"
    },

    {
      title: "Fast Domain Adaptation for IoT",
      subtitle: "COMSNETS 2026 Accepted Paper",
      // Front:
      desc: "Selected for presenting a Meta-Learning + Federated Knowledge Distillation framework to compress neural networks for IoT.",
      // Back:
      longDesc: "This research tackles the challenge of training deep learning models on resource-constrained IoT devices while preserving user privacy. A hybrid framework combining Federated Learning (FL) with Knowledge Distillation (KD).\n\nBy integrating Meta-Learning, the system allows the global model to adapt rapidly to new device domains with minimal local data. The result was a significant reduction in communication overhead and training time compared to traditional federated setups, making complex AI feasible on edge hardware.\n\nDelivered the technical presentation on optimizing neural networks via Federated Knowledge Distillation for resource-constrained devices.",
      tags: ["Federated Learning", "Meta-Learning", "IoT"],
      images: [
        "/images/federated.png",
        "/images/comsnets.png"
      ],
      repoLink: null,
      paperLink: "https://drive.google.com/file/d/1MeBfapDZF8KByvp49ykNyx3yPEnGwhgP/view?usp=drive_link",
      demoLink: null,
      type: "Conference Paper",
      layout: "split"
    },

    // --- CREATIVE ---
    {
      title: "Light Side",
      subtitle: "CSS-Only Design Challenge",
      // Front:
      desc: "A pure CSS visual design project for 'Style Wars'. The challenge: Style a raw HTML file using ONLY CSS—no JavaScript, no HTML edits. Just pure visual creativity.",
      // Back:
      longDesc: "A pure creative coding challenge: build a fully interactive, visually immersive interface using ONLY CSS. No JavaScript logic and no HTML modifications were allowed.\n\nI utilized advanced CSS features including the 'Checkbox Hack' for state management, complex combinators for interactivity, and extensive pseudo-elements (::before/::after) to create depth and animation. This project demonstrates a deep mastery of the browser rendering engine and constraint-based design.\n\nReceived Honorary Mention place in intra-college coding competition by NJACK Dev among 60 contestants",
      tags: ["Pure CSS", "Design System", "Creative Coding"],
      images: ["/images/light.png"],
      repoLink: "https://github.com/lavanya-22-glitch/Light-Side-Lavanya",
      demoLink: "https://lavanya-22-glitch.github.io/Light-Side-Lavanya/",
      type: "Honorary Mention", 
      isWinner: true, 
      layout: "full"
    },
    {
      title: "Talika",
      subtitle: "Productivity made peaceful.",
      // Front:
      desc: "A clean, distraction-free task manager designed for students. Built to help organize daily chaos with a minimalist interface and soothing aesthetics.",
      // Back:
      longDesc: "Talika is built on the philosophy of 'Productivity made peaceful.' Unlike cluttered project management tools, this application strips away complexity to focus on user flow.\n\nTechnically, it utilizes a component-based architecture with vanilla JavaScript to ensure zero-bloat performance. It features a custom drag-and-drop interface, persistent local storage for state management, and a fluid, responsive design that adapts seamlessly across mobile and desktop devices.",
      tags: ["Productivity", "JavaScript", "UI/UX"],
      images: [
        "/images/talika (1).png",
        "/images/talika (3).png",
        "/images/talika (4).png",
        "/images/talika (2).png"
      ],
      repoLink: "https://github.com/lavanya-22-glitch/Task-Manager-Web",
      demoLink: "https://task-manage-web-lavanyabhadani.netlify.app/",
      type: "Web App",
      layout: "grid"
    }
  ];

  return (
    // Clean section (Padding is handled by App.jsx now)
    <section className="min-h-screen py-10 md:py-16">
      
      {/* --- LIGHTBOX MODAL --- */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 cursor-pointer"
          >
            <button className="absolute top-5 right-5 text-white bg-white/10 p-2 rounded-full hover:bg-white/20 transition">
              <X size={24} />
            </button>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={selectedImage}
              alt="Full Preview"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

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

      <motion.div 
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
        }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
          >
            <ProjectCard project={project} onExpand={setSelectedImage} />
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
};

export default Projects;