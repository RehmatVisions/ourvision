'use client';

export default function Pricing() {
  const packages = [
    {
      name: 'Starter',
      price: '$499',
      description: 'Perfect for small businesses and startups',
      features: [
        '5-page website',
        'Responsive design',
        'Basic SEO setup',
        'Contact form',
        '1 month support',
        'Social media links'
      ],
      gradient: 'from-blue-400 to-indigo-500',
      popular: false
    },
    {
      name: 'Professional',
      price: '$999',
      description: 'Most popular for growing businesses',
      features: [
        '10-page website',
        'Custom design',
        'Advanced SEO',
        'Blog setup',
        '3 months support',
        'Google Analytics',
        'Speed optimization',
        'Email integration'
      ],
      gradient: 'from-yellow-400 to-orange-500',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$2499+',
      description: 'For large projects and e-commerce',
      features: [
        'Unlimited pages',
        'E-commerce setup',
        'Payment gateway',
        'Custom features',
        '6 months support',
        'Priority support',
        'Database setup',
        'API integration'
      ],
      gradient: 'from-purple-400 to-pink-500',
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-[#e0e5ec] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-40 h-40 rounded-full bg-gradient-to-br from-purple-400/20 to-pink-500/20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full bg-gradient-to-br from-blue-400/20 to-indigo-500/20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 space-y-4 sm:space-y-6">
          <div className="inline-flex items-center gap-3 px-5 sm:px-7 py-3 sm:py-4 rounded-full bg-[#e0e5ec] shadow-[6px_6px_16px_#b8bdc4,-6px_-6px_16px_#ffffff]">
            <div className="flex gap-1.5">
              <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></div>
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 rounded-full bg-pink-400 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
            <span className="text-sm sm:text-base font-bold text-gray-700">💰 Pricing Plans</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-800 leading-tight">
            Simple, <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-600 bg-clip-text text-transparent">Transparent</span> Pricing
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Choose the package that fits your needs. All prices are starting from - custom quotes available.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-[2rem] bg-[#e0e5ec] shadow-[15px_15px_30px_#bebebe,-15px_-15px_30px_#ffffff] hover:shadow-[20px_20px_40px_#bebebe,-20px_-20px_40px_#ffffff] transition-all duration-500 hover:-translate-y-2 ${
                pkg.popular ? 'md:-translate-y-4 ring-4 ring-yellow-400/20' : ''
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 shadow-[0_6px_20px_rgba(251,191,36,0.4)]">
                  <span className="text-xs font-bold text-white">MOST POPULAR</span>
                </div>
              )}

              {/* Package Icon */}
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${pkg.gradient} shadow-[6px_6px_16px_rgba(0,0,0,0.15)] mb-6`}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>

              {/* Package Info */}
              <h3 className="text-2xl font-black text-gray-800 mb-2">{pkg.name}</h3>
              <p className="text-sm text-gray-600 mb-6">{pkg.description}</p>

              {/* Price */}
              <div className="mb-8">
                <span className={`text-4xl sm:text-5xl font-black bg-gradient-to-r ${pkg.gradient} bg-clip-text text-transparent`}>
                  {pkg.price}
                </span>
                <span className="text-gray-600 text-sm ml-2">starting from</span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className={`flex-shrink-0 w-5 h-5 rounded-lg bg-gradient-to-br ${pkg.gradient} flex items-center justify-center mt-0.5`}>
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className={`w-full px-6 py-4 rounded-xl ${
                  pkg.popular
                    ? `bg-gradient-to-r ${pkg.gradient} text-white shadow-[0_8px_24px_rgba(251,191,36,0.4)] hover:shadow-[0_12px_32px_rgba(251,191,36,0.5)]`
                    : 'bg-[#e0e5ec] text-gray-800 shadow-[6px_6px_12px_#c5c5c5,-6px_-6px_12px_#ffffff] hover:shadow-[8px_8px_16px_#c5c5c5,-8px_-8px_16px_#ffffff]'
                } font-bold transition-all hover:scale-105 flex items-center justify-center gap-2 group`}
              >
                <span>Get Started</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          ))}
        </div>

        {/* Custom Quote CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Need something custom?</p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 rounded-xl bg-[#e0e5ec] text-gray-800 font-bold shadow-[8px_8px_16px_#b8bdc4,-8px_-8px_16px_#ffffff] hover:shadow-[10px_10px_20px_#b8bdc4,-10px_-10px_20px_#ffffff] transition-all hover:scale-105"
          >
            Request Custom Quote
          </button>
        </div>
      </div>
    </section>
  );
}
