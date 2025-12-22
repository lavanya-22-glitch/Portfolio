import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, RotateCcw, X } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "Demystifying Agentic AI: Beyond Chatbots",
      excerpt: "Everyone is talking about LLMs, but the real future is Agentic workflows. Here is how I approached building an autonomous offloading system.",
      fullContent: "The shift from 'Chatbots' to 'Agents' is about autonomy. In my recent research on Edge-Cloud systems, I built an agent that doesn't just answer questions—it makes decisions. Using a Python-based reasoning engine, the system analyzes network latency and server load in real-time to decide whether to offload a task to the Cloud or process it locally on the Edge. The biggest challenge was state consistency, which I solved by implementing a specialized React interface that visualizes the agent's 'thought process' live.",
      date: "Dec 10, 2025",
      readTime: "2 min read",
      category: "Research",
      image: "/images/agentic.avif"
    },
    {
      id: 2,
      title: "Leading GDG IIT Patna: Lessons in Community",
      excerpt: "Stepping up as the GenAI Lead wasn't just about teaching code. It was about fostering a culture of curiosity.",
      fullContent: "When I took on the role of GenAI Lead at GDG IIT Patna, my goal was to move beyond 'Hello World'. We organized workshops where students didn't just clone repos, but actually fine-tuned small models. The most rewarding part was mentoring juniors who were intimidated by ML. Breaking down complex Transformer architectures into simple diagrams helped bridge the gap. Leadership, I learned, is less about knowing everything and more about creating a space where others feel safe to learn.",
      date: "Oct 28, 2025",
      readTime: "3 min read",
      category: "Leadership",
      image: "/images/gdg.png"
    },
    {
      id: 3,
      title: "From Logic to Layouts: My CSS 'Style Wars' Journey",
      excerpt: "I usually live in Python terminals, but participating in a CSS-only design challenge taught me a lot about browser rendering.",
      fullContent: "The challenge was simple but brutal: Create art using a single HTML file with NO JavaScript and NO changes to the HTML structure. You only get CSS. I realized that CSS is actually a powerful declarative language. I used advanced selectors, pseudo-elements (::before, ::after), and complex gradients to 'paint' with code. It gave me a massive appreciation for the browser rendering engine and improved my frontend skills significantly.",
      date: "Sep 15, 2025",
      readTime: "4 min read",
      category: "Design",
      image: "/images/css.jfif"
    }
  ];

  return (
    <section className="min-h-screen py-10 md:py-16">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white"
        >
          Words & <span className="text-lavender">Thoughts</span>
        </motion.h2>
        <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
          Insights on Artificial Intelligence, life at IIT Patna, and the tech I'm currently exploring.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
};

// --- FLIPPING CARD COMPONENT ---
const BlogCard = ({ post }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="h-[420px] w-full perspective-1000"> 
      <motion.div
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, animationDirection: "normal" }}
        className="w-full h-full relative preserve-3d"
        style={{ transformStyle: 'preserve-3d' }} // Crucial for 3D effect
      >
        
        {/* === FRONT SIDE === */}
        <div 
          className="absolute inset-0 backface-hidden bg-white/60 dark:bg-slate-800/40 backdrop-blur-md border border-white/20 dark:border-slate-700 rounded-2xl overflow-hidden shadow-sm flex flex-col"
          style={{ backfaceVisibility: 'hidden' }}
        >
          {/* Image */}
          <div className="relative h-48 overflow-hidden shrink-0">
             <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-white/90 dark:bg-slate-900/90 text-slate-800 dark:text-slate-200 rounded-full shadow-sm">
                  {post.category}
                </span>
              </div>
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          </div>

          {/* Content */}
          <div className="p-6 flex flex-col h-full">
            <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 mb-3">
              <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
              <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
            </div>
            
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3 line-clamp-2">
              {post.title}
            </h3>
            
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4 line-clamp-3">
              {post.excerpt}
            </p>

            <button 
              onClick={() => setIsFlipped(true)}
              className="mt-auto flex items-center gap-2 text-sm font-semibold text-sage hover:text-sage-dark dark:text-sage-light transition-colors group"
            >
              Read Article 
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>


        {/* === BACK SIDE (Content Revealed) === */}
        <div 
          className="absolute inset-0 backface-hidden bg-slate-100 dark:bg-slate-800 border border-sage/30 rounded-2xl p-6 shadow-xl flex flex-col overflow-y-auto"
          style={{ 
            backfaceVisibility: 'hidden', 
            transform: 'rotateY(180deg)' // Text needs to be pre-rotated so it's readable when card flips
          }}
        >
          <div className="flex justify-between items-start mb-4">
            <span className="text-xs font-bold text-sage uppercase tracking-wider">{post.category}</span>
            <button 
              onClick={() => setIsFlipped(false)}
              className="p-1 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-slate-500" />
            </button>
          </div>

          <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4">
            {post.title}
          </h3>

          <div className="prose prose-sm dark:prose-invert text-slate-600 dark:text-slate-300 leading-relaxed overflow-y-auto pr-2 custom-scrollbar">
            {post.fullContent}
          </div>

          <button 
            onClick={() => setIsFlipped(false)}
            className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700 flex items-center justify-center gap-2 text-sm font-semibold text-slate-500 hover:text-sage transition-colors w-full"
          >
            <RotateCcw className="w-4 h-4" /> Flip Back
          </button>
        </div>

      </motion.div>
    </div>
  );
};

export default Blog;