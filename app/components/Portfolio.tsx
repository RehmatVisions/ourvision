'use client';

import { useState } from 'react';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Website Development', 'SEO Optimization', 'Graphics Design', 'Content Creation', 'Quality Assurance', 'Analytics & Reporting'];

  const projects = [
    { 
      title: 'TechCorp Website', 
      category: 'Website Development', 
      emoji: '💻', 
      color: 'from-blue-400 to-indigo-500',
      description: 'Full-stack corporate website with CMS',
      tech: ['React', 'Node.js', 'MongoDB']
    },
    { 
      title: 'Local Business SEO', 
      category: 'SEO Optimization', 
      emoji: '📈', 
      color: 'from-green-400 to-emerald-500',
      description: 'Ranked #1 for 15+ keywords in 3 months',
      tech: ['Google Analytics', 'SEMrush', 'Ahrefs']
    },
    { 
      title: 'Brand Identity Design', 
      category: 'Graphics Design', 
      emoji: '🎨', 
      color: 'from-pink-400 to-rose-500',
      description: 'Complete brand package with logo & guidelines',
      tech: ['Figma', 'Illustrator', 'Photoshop']
    },
    { 
      title: 'Blog Content Strategy', 
      category: 'Content Creation', 
      emoji: '✍️', 
      color: 'from-purple-400 to-violet-500',
      description: '50+ SEO-optimized articles, 200% traffic growth',
      tech: ['WordPress', 'Yoast', 'Grammarly']
    },
    { 
      title: 'E-Commerce QA Testing', 
      category: 'Quality Assurance', 
      emoji: '🔍', 
      color: 'from-orange-400 to-red-500',
      description: 'Comprehensive testing & bug reporting',
      tech: ['Selenium', 'Jest', 'Postman']
    },
    { 
      title: 'Analytics Dashboard', 
      category: 'Analytics & Reporting', 
      emoji: '📊', 
      color: 'from-yellow-400 to-orange-500',
      description: 'Real-time business intelligence platform',
      tech: ['Power BI', 'Google Analytics', 'Tableau']
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="work" className="min-h-screen flex items-center px-6 py-24">
      <div className="max-w-[1400px] mx-auto w-full">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#e0e5ec] shadow-[4px_4px_12px_#b8bdc4,-4px_-4px_12px_#ffffff] mb-6">
            <div className="flex gap-1.5">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              <div className="w-2 h-2 rounded-full bg-red-500"></div>
              <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
            </div>
            <span className="text-sm font-bold text-gray-700">Our Work</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-black mb-4">
            Featured <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our latest work and see how we bring ideas to life
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12 sm:mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`group relative px-5 sm:px-7 py-3 sm:py-4 rounded-2xl font-bold text-xs sm:text-sm transition-all duration-500 ${
                activeFilter === category
                  ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-[0_8px_24px_rgba(251,191,36,0.4)] scale-105'
                  : 'bg-[#e0e5ec] text-gray-700 shadow-[6px_6px_12px_#c5c5c5,-6px_-6px_12px_#ffffff] hover:shadow-[8px_8px_16px_#c5c5c5,-8px_-8px_16px_#ffffff] hover:scale-105'
              }`}
            >
              {/* Active indicator */}
              {activeFilter === category && (
                <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-green-400 shadow-[0_2px_8px_rgba(34,197,94,0.5)] animate-pulse"></div>
              )}
              <span className="relative z-10">{category}</span>
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group cursor-pointer"
            >
              <div className="relative p-6 sm:p-8 rounded-[2rem] bg-[#e0e5ec] shadow-[15px_15px_30px_#bebebe,-15px_-15px_30px_#ffffff] hover:shadow-[20px_20px_40px_#bebebe,-20px_-20px_40px_#ffffff] transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-[0.02]`}></div>
                
                {/* Top Section - Category Badge */}
                <div className="relative z-10 flex items-center justify-between mb-6">
                  <div className="px-4 py-2 rounded-xl bg-[#e0e5ec] shadow-[4px_4px_8px_#c5c5c5,-4px_-4px_8px_#ffffff]">
                    <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${project.color} shadow-[4px_4px_12px_rgba(0,0,0,0.1)] group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                    <span className="text-2xl">{project.emoji}</span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="relative z-10 space-y-4 mb-6">
                  <h3 className="text-xl sm:text-2xl font-black text-gray-800 leading-tight group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-yellow-500 group-hover:to-orange-500 group-hover:bg-clip-text transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="relative z-10 flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1.5 text-xs font-bold text-gray-700 bg-[#e0e5ec] rounded-lg shadow-[3px_3px_6px_#c5c5c5,-3px_-3px_6px_#ffffff] hover:shadow-[4px_4px_8px_#c5c5c5,-4px_-4px_8px_#ffffff] hover:scale-105 transition-all duration-200">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Bottom CTA */}
                <div className="relative z-10">
                  <button className={`w-full px-6 py-4 rounded-xl bg-gradient-to-r ${project.color} text-white font-bold text-sm shadow-[0_8px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.2)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 group/btn`}>
                    <span>View Project</span>
                    <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                      <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
