'use client';

export default function VisionHero() {
  return (
    <section id="home" className="min-h-screen flex items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20">
      <div className="max-w-[1400px] mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 sm:gap-6 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-[#e0e5ec] shadow-[4px_4px_12px_#b8bdc4,-4px_-4px_12px_#ffffff] animate-slideDown">
              <div className="flex items-center gap-2 sm:gap-3">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-xs sm:text-sm text-gray-500 font-medium">🚀 Digital Solutions Expert</span>
              </div>
              <div className="hidden sm:block h-4 w-px bg-gray-300"></div>
              <span className="hidden sm:inline text-sm font-bold text-gray-800">Available for Projects</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.2] tracking-tight animate-slideUp delay-100">
                <span className="block text-gray-800">Build Your Digital Future</span>
                <span className="block text-gray-800">with <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-600 bg-clip-text text-transparent">VisionsTech</span></span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed max-w-lg animate-slideUp delay-200">
                We're a team of developers, designers, and digital strategists who build custom software solutions. From web apps to SEO campaigns, we help businesses grow online with practical, results-driven work.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 animate-slideUp delay-300">
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group px-6 sm:px-8 py-3 sm:py-4 rounded-2xl bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold shadow-[0_8px_24px_rgba(251,191,36,0.4)] hover:shadow-[0_12px_32px_rgba(251,191,36,0.5)] hover:-translate-y-1 transition-all text-sm sm:text-base"
              >
                <span className="flex items-center justify-center gap-2">
                  Get Started
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 sm:px-8 py-3 sm:py-4 rounded-2xl bg-[#e0e5ec] text-gray-800 font-bold shadow-[6px_6px_16px_#b8bdc4,-6px_-6px_16px_#ffffff] hover:shadow-[8px_8px_20px_#b8bdc4,-8px_-8px_20px_#ffffff] hover:-translate-y-1 transition-all text-sm sm:text-base"
              >
                View Portfolio
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-2 sm:pt-4">
              {[
                { value: '50+', label: 'Projects Done' },
                { value: '30+', label: 'Happy Clients' },
                { value: '5+', label: 'Years Exp' }
              ].map((stat, i) => (
                <div key={i} className={`p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-[#e0e5ec] shadow-[6px_6px_16px_#b8bdc4,-6px_-6px_16px_#ffffff] animate-scaleIn delay-${(i + 4) * 100}`}>
                  <div className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-[10px] sm:text-xs font-bold text-gray-600 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Service Cards */}
          <div className="space-y-4 sm:space-y-6 mt-8 lg:mt-0">
            {/* Web Development Card */}
            <div className="p-5 sm:p-6 rounded-[1.5rem] sm:rounded-[2rem] bg-[#e0e5ec] shadow-[8px_8px_20px_#b8bdc4,-8px_-8px_20px_#ffffff] hover:shadow-[10px_10px_24px_#b8bdc4,-10px_-10px_24px_#ffffff] transition-all animate-slideRight delay-100">
              <div className="flex items-start gap-4">
                <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-[#e0e5ec] shadow-[4px_4px_12px_#b8bdc4,-4px_-4px_12px_#ffffff]">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <rect x="2" y="3" width="20" height="14" rx="2"/>
                    <line x1="8" y1="21" x2="16" y2="21"/>
                    <line x1="12" y1="17" x2="12" y2="21"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg font-black text-gray-800 mb-2">Web Development + Quality Assurance</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">We build fast, secure websites and web applications using React, Next.js, and Node.js. Mobile-friendly and optimized for performance.</p>
                </div>
              </div>
            </div>

            {/* SEO & Design Cards Row */}
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              {/* SEO Card */}
              <div className="p-5 sm:p-6 rounded-[1.5rem] sm:rounded-[2rem] bg-[#e0e5ec] shadow-[8px_8px_20px_#b8bdc4,-8px_-8px_20px_#ffffff] hover:shadow-[10px_10px_24px_#b8bdc4,-10px_-10px_24px_#ffffff] transition-all animate-slideRight delay-200">
                <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-[#e0e5ec] shadow-[4px_4px_12px_#b8bdc4,-4px_-4px_12px_#ffffff] inline-block mb-3 sm:mb-4">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <circle cx="11" cy="11" r="8"/>
                    <path d="m21 21-4.35-4.35"/>
                    <line x1="11" y1="8" x2="11" y2="14"/>
                    <line x1="8" y1="11" x2="14" y2="11"/>
                  </svg>
                </div>
                <h3 className="text-base sm:text-lg font-black text-gray-800 mb-2">SEO Optimization</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">Get found on Google. We handle keyword research, on-page optimization, and content strategy to increase your organic traffic.</p>
              </div>

              {/* Design Card */}
              <div className="p-5 sm:p-6 rounded-[1.5rem] sm:rounded-[2rem] bg-[#e0e5ec] shadow-[8px_8px_20px_#b8bdc4,-8px_-8px_20px_#ffffff] hover:shadow-[10px_10px_24px_#b8bdc4,-10px_-10px_24px_#ffffff] transition-all animate-slideRight delay-300">
                <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-[#e0e5ec] shadow-[4px_4px_12px_#b8bdc4,-4px_-4px_12px_#ffffff] inline-block mb-3 sm:mb-4">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path d="M12 19l7-7 3 3-7 7-3-3z"/>
                    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>
                    <path d="M2 2l7.586 7.586"/>
                    <circle cx="11" cy="11" r="2"/>
                  </svg>
                </div>
                <h3 className="text-base sm:text-lg font-black text-gray-800 mb-2">Graphic Design</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">Logos, branding, social media graphics, and marketing materials. Clean designs that represent your business professionally.</p>
              </div>
            </div>

            {/* Tech Stack & Status Row */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {/* Tech Stack */}
              <div className="p-4 sm:p-6 rounded-[1.5rem] sm:rounded-[2rem] bg-[#e0e5ec] shadow-[8px_8px_20px_#b8bdc4,-8px_-8px_20px_#ffffff] animate-slideRight delay-400">
                <div className="text-xs sm:text-sm font-bold text-gray-800 mb-3">Tech Stack</div>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Node.js', 'Figma'].map((tech, i) => (
                    <span key={i} className="px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-[10px] sm:text-xs font-bold shadow-[0_4px_12px_rgba(251,191,36,0.3)]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Availability Status */}
              <div className="p-4 sm:p-6 rounded-[1.5rem] sm:rounded-[2rem] bg-[#e0e5ec] shadow-[8px_8px_20px_#b8bdc4,-8px_-8px_20px_#ffffff] flex flex-col items-center justify-center animate-slideRight delay-500">
                <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-gradient-to-r from-green-400 to-green-500 shadow-[0_0_12px_rgba(34,197,94,0.6)] mb-2 sm:mb-3 animate-pulse"></div>
                <div className="text-xs sm:text-sm font-bold text-gray-800 text-center">Available</div>
                <div className="text-[10px] sm:text-xs text-gray-500 text-center">for projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
