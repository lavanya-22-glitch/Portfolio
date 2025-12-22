import React from 'react';
import { motion } from 'framer-motion';
import { User, Brain, Users, Puzzle } from 'lucide-react';

const About = () => {
  // Updated Data for Campus Roles
  const roles = [
    {
      title: "Generative AI & ML Lead",
      org: "Google Developer Groups (GDG) IIT Patna",
      desc: "Selected to lead GenAI workshops and mentor students on machine learning projects. I bridge the gap between complex AI theory and practical application for the campus community.",
      icon: <Brain className="w-6 h-6 text-sage" />
    },
    {
      title: "Class Representative",
      org: "AI & DS Batch, IIT Patna",
      desc: "Acting as the primary bridge between the faculty and the student body. I streamline academic communication, address batch concerns, and coordinate logistics.",
      icon: <Users className="w-6 h-6 text-lavender" />
    },
    {
      title: "Sub-Coordinator",
      org: "Hexachrome (Puzzle Club)",
      desc: "Organizing logic-based competitions and weekly puzzle challenges. It fuels my interest in algorithmic thinking and problem-solving beyond the curriculum.",
      icon: <Puzzle className="w-6 h-6 text-blue-400" />
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="min-h-screen py-10 md:py-16">
      
      {/* Header */}
      <div className="text-center mb-12 md:mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white"
        >
          About <span className="text-sage">Me</span>
        </motion.h2>
        <motion.div 
          initial={{ width: 0 }} 
          animate={{ width: "6rem" }} 
          transition={{ delay: 0.5, duration: 0.8 }}
          className="h-1 bg-gradient-to-r from-sage to-lavender mx-auto mt-2 rounded-full" 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* LEFT COLUMN: Concise Bio (Span 7 columns) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 space-y-6 text-slate-600 dark:text-slate-300 text-lg leading-relaxed text-justify"
        >
          <motion.p variants={itemVariants}>
            I am a 2nd-year B.Tech student in <strong>Artificial Intelligence and Data Science</strong> at IIT Patna, currently maintaining an <strong>SPI of 9.57</strong>. My journey is driven by a single question: <em>How can we build code that learns?</em>
          </motion.p>

          <motion.p variants={itemVariants}>
            My focus goes beyond standard coursework. I am actively researching <strong>Federated Learning</strong> for IoT devices (published at COMSNETS '26) and building <strong>Agentic AI systems</strong> that can reason and act autonomously.
          </motion.p>

          <motion.p variants={itemVariants}>
            When I am not training models or optimizing algorithms, I am building the full-stack interfaces that make them usable. I believe the best engineers are those who can navigate both the theoretical depths of ML and the practical challenges of Software Engineering.
          </motion.p>
          
          <motion.div variants={itemVariants} className="p-5 bg-white/50 dark:bg-slate-800/50 rounded-xl border-l-4 border-sage shadow-sm mt-4">
             <h4 className="font-semibold text-slate-800 dark:text-white flex items-center gap-2 mb-1">
               <User className="w-5 h-5 text-sage" /> Beyond the Screen
             </h4>
             <p className="text-base text-slate-600 dark:text-slate-400">
               Off-campus, you can find me playing basketball, swimming, or competing in public speaking events. I thrive in environments that challenge me to be observant, quick-thinking, and creative.
             </p>
          </motion.div>
        </motion.div>


        {/* RIGHT COLUMN: Leadership Roles (Span 5 columns) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-5 space-y-5"
        >
          <motion.h3 variants={itemVariants} className="text-2xl font-display font-semibold text-slate-800 dark:text-white mb-4">
            Leadership
          </motion.h3>

          {roles.map((role, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="group p-5 bg-white/60 dark:bg-slate-800/40 backdrop-blur-md rounded-2xl shadow-sm border border-white/20 dark:border-slate-700 hover:shadow-md transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white dark:bg-slate-900 rounded-full shadow-sm group-hover:scale-110 transition-transform duration-300">
                  {role.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100 group-hover:text-sage transition-colors">
                    {role.title}
                  </h4>
                  <p className="text-sm font-medium text-sage dark:text-sage-light mb-1">
                    {role.org}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-snug">
                    {role.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default About;