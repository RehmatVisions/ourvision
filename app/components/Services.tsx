'use client';

export default function Services() {
  const services = [
    {
      title: 'Web Development',
      icon: 'M16 18 22 12 16 6 M8 6 2 12 8 18',
      description: 'We build custom websites and web applications from scratch. Whether you need an e-commerce store, business website, or SaaS platform, we handle the full development process.',
      features: ['React & Next.js', 'Node.js Backend', 'Database Setup', 'API Integration'],
      gradient: 'from-yellow-400 to-orange-500',
      glowColor: 'rgba(251, 191, 36, 0.3)'
    },
    {
      title: 'SEO Services',
      icon: 'M22 12h-4l-3 9L9 3l-3 9H2',
      description: 'Improve your Google rankings and get more organic traffic. We do keyword research, optimize your site structure, create SEO content, and build quality backlinks.',
      features: ['Keyword Research', 'On-Page SEO', 'Content Writing', 'Link Building'],
      gradient: 'from-orange-400 to-yellow-500',
      glowColor: 'rgba(251, 146, 60, 0.3)'
    },
    {
      title: 'Graphic Design',
      icon: 'M3 3 21 3 21 21 3 21z M8.5 8.5 M21 15l-5-5L5 21',
      description: 'Professional design work for your brand. We create logos, business cards, social media graphics, brochures, and complete brand identity packages.',
      features: ['Logo Design', 'Brand Identity', 'Social Graphics', 'Print Design'],
      gradient: 'from-amber-400 to-orange-400',
      glowColor: 'rgba(245, 158, 11, 0.3)'
    },
    {
      title: 'Mobile Apps',
      icon: 'M17 2 7 2 7 22 17 22z M11 5 13 5',
      description: 'Native iOS and Android apps, or cross-platform solutions with React Native. We handle everything from design to deployment on app stores.',
      features: ['iOS & Android', 'React Native', 'App Store Deploy', 'Push Notifications'],
      gradient: 'from-yellow-500 to-amber-400',
      glowColor: 'rgba(234, 179, 8, 0.3)'
    }
  ];

  const additionalServices = [
    { 
      icon: 'M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z', 
      title: 'E-Commerce', 
      desc: 'Online stores with Shopify or WooCommerce',
      gradient: 'from-blue-400 to-blue-600'
    },
    { 
      icon: 'M2 7 20 7 20 21 2 21z M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16', 
      title: 'UI/UX Design', 
      desc: 'User research and interface design',
      gradient: 'from-purple-400 to-purple-600'
    },
    { 
      icon: 'M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6', 
      title: 'Maintenance', 
      desc: 'Monthly updates and bug fixes',
      gradient: 'from-green-400 to-green-600'
    },
    { 
      icon: 'M12 1 12 23 M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6', 
      title: 'Consulting', 
      desc: 'Tech stack advice and planning',
      gradient: 'from-pink-400 to-pink-600'
    }
  ];

  return (
    <section id="services" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-[#e0e5ec] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-40 h-40 rounded-full bg-gradient-to-br from-yellow-400/20 to-orange-500/20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full bg-gradient-to-br from-orange-400/20 to-yellow-500/20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 space-y-4 sm:space-y-6">
          <div className="inline-flex items-center gap-3 px-5 sm:px-7 py-3 sm:py-4 rounded-full bg-[#e0e5ec] shadow-[6px_6px_16px_#b8bdc4,-6px_-6px_16px_#ffffff] hover:shadow-[8px_8px_20px_#b8bdc4,-8px_-8px_20px_#ffffff] transition-all duration-300">
            <div className="flex gap-1.5">
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
              <div className="w-2 h-2 rounded-full bg-red-400 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
            <span className="text-sm sm:text-base font-bold text-gray-700">💼 What We Offer</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-800 leading-tight">
            Professional <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Real solutions for real businesses. Here's what we do best.
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-12 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 sm:p-10 rounded-[2.5rem] bg-[#e0e5ec] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] hover:shadow-[25px_25px_70px_#bebebe,-25px_-25px_70px_#ffffff] transition-all duration-700 hover:-translate-y-2 overflow-hidden"
            >
              {/* Subtle Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700`}></div>

              {/* Floating Icon */}
              <div className="relative z-10 mb-8">
                <div className={`inline-flex p-6 rounded-[1.5rem] bg-gradient-to-br ${service.gradient} shadow-[8px_8px_20px_rgba(0,0,0,0.1),-4px_-4px_16px_rgba(255,255,255,0.1)] group-hover:shadow-[12px_12px_30px_rgba(0,0,0,0.15),-6px_-6px_20px_rgba(255,255,255,0.15)] group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                  <svg className="w-10 h-10 sm:w-12 sm:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path d={service.icon}/>
                  </svg>
                </div>
                {service.badge && (
                  <div className="absolute -top-2 -right-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 shadow-[0_6px_20px_rgba(34,197,94,0.3)] animate-pulse">
                    <span className="text-xs font-bold text-white tracking-wide">{service.badge}</span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="relative z-10 space-y-5">
                <h3 className="text-2xl sm:text-3xl font-black text-gray-800 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-yellow-500 group-hover:to-orange-500 group-hover:bg-clip-text transition-all duration-500 leading-tight">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                {/* Features - Widget Style */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="relative p-4 rounded-2xl bg-[#e0e5ec] shadow-[6px_6px_12px_#c5c5c5,-6px_-6px_12px_#ffffff] hover:shadow-[8px_8px_16px_#c5c5c5,-8px_-8px_16px_#ffffff] transition-all duration-300 group/feature">
                      <div className="flex items-center gap-2.5">
                        <div className={`flex-shrink-0 w-6 h-6 rounded-lg bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-[2px_2px_6px_rgba(0,0,0,0.1)] group-hover/feature:scale-110 group-hover/feature:rotate-12 transition-all duration-300`}>
                          <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                            <polyline points="20 6 9 17 4 12"/>
                          </svg>
                        </div>
                        <span className="text-xs sm:text-sm font-bold text-gray-700">{feature}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Button - Widget Style */}
                <button className={`w-full mt-8 px-8 py-5 rounded-2xl bg-gradient-to-r ${service.gradient} text-white font-bold text-base shadow-[0_10px_30px_rgba(251,191,36,0.3)] hover:shadow-[0_15px_40px_rgba(251,191,36,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3 group/btn`}>
                  <span>Get Started</span>
                  <svg className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services - Widget Style */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 max-w-6xl mx-auto">
          {additionalServices.map((service, index) => (
            <div
              key={index}
              className="group relative p-6 sm:p-8 rounded-[2rem] bg-[#e0e5ec] shadow-[12px_12px_24px_#c5c5c5,-12px_-12px_24px_#ffffff] hover:shadow-[16px_16px_32px_#c5c5c5,-16px_-16px_32px_#ffffff] transition-all duration-500 hover:-translate-y-3 text-center overflow-hidden"
            >
              {/* Subtle Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-[0.05] transition-opacity duration-500`}></div>
              
              <div className={`relative z-10 inline-flex p-5 rounded-[1.25rem] bg-gradient-to-br ${service.gradient} shadow-[6px_6px_16px_rgba(0,0,0,0.1),-3px_-3px_12px_rgba(255,255,255,0.1)] mb-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path d={service.icon}/>
                </svg>
              </div>
              <h4 className="relative z-10 text-base sm:text-lg font-black text-gray-800 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-yellow-500 group-hover:to-orange-500 group-hover:bg-clip-text transition-all duration-500">
                {service.title}
              </h4>
              <p className="relative z-10 text-xs sm:text-sm text-gray-600 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="relative p-8 sm:p-12 rounded-[2rem] bg-[#e0e5ec] shadow-[12px_12px_28px_#b8bdc4,-12px_-12px_28px_#ffffff] max-w-4xl mx-auto overflow-hidden">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-orange-500/10 to-yellow-600/10"></div>
          
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left">
              <h3 className="text-2xl sm:text-3xl font-black text-gray-800 mb-2">
                Ready to Start Your <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Project?</span>
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                Let's talk about your project. Free consultation, no commitment.
              </p>
            </div>
            <button 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex-shrink-0 px-8 py-4 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold shadow-[0_8px_24px_rgba(251,191,36,0.4)] hover:shadow-[0_12px_32px_rgba(251,191,36,0.5)] hover:scale-105 transition-all duration-300 flex items-center gap-2 group"
            >
              <span>Contact Us Now</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
