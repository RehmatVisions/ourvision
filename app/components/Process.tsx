'use client';

export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Requirements & Analysis',
      description: 'We gather detailed requirements, analyze your business needs, and create technical specifications. This is our planning phase of SDLC.',
      icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01',
      gradient: 'from-blue-400 to-indigo-500',
      sdlc: 'Planning & Analysis'
    },
    {
      number: '02',
      title: 'Design & Architecture',
      description: 'UI/UX design, database schema, and system architecture. We create wireframes, mockups, and technical blueprints.',
      icon: 'M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z',
      gradient: 'from-green-400 to-emerald-500',
      sdlc: 'Design Phase'
    },
    {
      number: '03',
      title: 'Development & Implementation',
      description: 'Agile development with Git version control. We code in sprints, commit regularly, and keep you updated with progress.',
      icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
      gradient: 'from-purple-400 to-pink-500',
      sdlc: 'Implementation'
    },
    {
      number: '04',
      title: 'Testing & Quality Assurance',
      description: 'Unit testing, integration testing, and UAT (User Acceptance Testing). Ahmad ensures bug-free deployment with automated tests.',
      icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
      gradient: 'from-yellow-400 to-orange-500',
      sdlc: 'Testing Phase'
    },
    {
      number: '05',
      title: 'Deployment & Maintenance',
      description: 'CI/CD pipeline deployment to production. Continuous monitoring, updates, and support based on your package.',
      icon: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01',
      gradient: 'from-orange-400 to-red-500',
      sdlc: 'Deployment & Maintenance'
    }
  ];

  return (
    <section id="process" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-[#e0e5ec] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-40 h-40 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-500/20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full bg-gradient-to-br from-orange-400/20 to-pink-500/20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 space-y-4 sm:space-y-6">
          <div className="inline-flex items-center gap-3 px-5 sm:px-7 py-3 sm:py-4 rounded-full bg-[#e0e5ec] shadow-[6px_6px_16px_#b8bdc4,-6px_-6px_16px_#ffffff]">
            <div className="flex gap-1.5">
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
              <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
            <span className="text-sm sm:text-base font-bold text-gray-700">⚙️ Our Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-800 leading-tight">
            Our <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-600 bg-clip-text text-transparent">Working</span> Process
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We follow industry-standard Software Development Life Cycle for quality results.
          </p>
        </div>

        {/* Process Steps */}
        <div className="max-w-5xl mx-auto space-y-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-8 sm:left-12 top-24 w-0.5 h-12 bg-gradient-to-b from-gray-300 to-transparent"></div>
              )}

              <div className="relative p-6 sm:p-8 rounded-[2rem] bg-[#e0e5ec] shadow-[12px_12px_24px_#b8bdc4,-12px_-12px_24px_#ffffff] hover:shadow-[16px_16px_32px_#b8bdc4,-16px_-16px_32px_#ffffff] transition-all duration-500 hover:-translate-y-1">
                <div className="flex flex-col sm:flex-row gap-6 items-start">
                  {/* Step Number & Icon */}
                  <div className="flex-shrink-0">
                    <div className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br ${step.gradient} shadow-[8px_8px_20px_rgba(0,0,0,0.15)] flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                      <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d={step.icon} />
                      </svg>
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-lg bg-[#e0e5ec] shadow-[4px_4px_8px_#b8bdc4,-4px_-4px_8px_#ffffff] flex items-center justify-center">
                        <span className="text-xs font-black text-gray-700">{step.number}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl sm:text-2xl font-black text-gray-800 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-yellow-500 group-hover:to-orange-500 group-hover:bg-clip-text transition-all duration-300">
                        {step.title}
                      </h3>
                      <span className={`px-3 py-1 rounded-lg bg-gradient-to-r ${step.gradient} text-white text-xs font-bold shadow-[0_2px_8px_rgba(0,0,0,0.15)]`}>
                        {step.sdlc}
                      </span>
                    </div>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="hidden lg:block flex-shrink-0">
                    <div className="w-10 h-10 rounded-xl bg-[#e0e5ec] shadow-[4px_4px_8px_#b8bdc4,-4px_-4px_8px_#ffffff] flex items-center justify-center group-hover:translate-x-2 transition-transform duration-300">
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">We use Agile methodology with 2-week sprints</p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold shadow-[0_8px_24px_rgba(251,191,36,0.4)] hover:shadow-[0_12px_32px_rgba(251,191,36,0.5)] hover:scale-105 transition-all flex items-center justify-center gap-2 mx-auto group"
          >
            <span>Let's Get Started</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>

        {/* Tech Skills */}
        <div className="mt-16 p-8 rounded-[2rem] bg-[#e0e5ec] shadow-[8px_8px_20px_#b8bdc4,-8px_-8px_20px_#ffffff]">
          <h3 className="text-xl sm:text-2xl font-black text-gray-800 text-center mb-8">
            Technologies We Use
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { name: 'React', color: 'from-blue-400 to-cyan-500' },
              { name: 'Node.js', color: 'from-green-400 to-emerald-500' },
              { name: 'Next.js', color: 'from-gray-700 to-gray-900' },
              { name: 'MongoDB', color: 'from-green-500 to-green-700' },
              { name: 'Git', color: 'from-orange-500 to-red-500' },
              { name: 'Figma', color: 'from-purple-400 to-pink-500' },
              { name: 'Tailwind', color: 'from-cyan-400 to-blue-500' },
              { name: 'Express', color: 'from-gray-600 to-gray-800' },
              { name: 'Jest', color: 'from-red-500 to-pink-500' },
              { name: 'Docker', color: 'from-blue-500 to-blue-700' },
              { name: 'AWS', color: 'from-orange-400 to-yellow-500' },
              { name: 'Vercel', color: 'from-gray-800 to-black' }
            ].map((tech, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-[#e0e5ec] shadow-[4px_4px_10px_#b8bdc4,-4px_-4px_10px_#ffffff] hover:shadow-[6px_6px_14px_#b8bdc4,-6px_-6px_14px_#ffffff] transition-all hover:scale-105 text-center group"
              >
                <span className={`text-sm font-bold bg-gradient-to-r ${tech.color} bg-clip-text text-transparent`}>
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
