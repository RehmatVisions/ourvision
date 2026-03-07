'use client';

import { useState } from 'react';

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Ahmed Khan',
      position: 'CEO, TechStart Solutions',
      avatar: 'AK',
      text: 'VisionsTech built our company website in 3 weeks. Clean code, fast loading, and exactly what we asked for. Our contact form submissions went up 3x after launch.',
      gradient: 'from-blue-400 to-indigo-500',
      rating: 5
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      position: 'Marketing Director, GreenLeaf Co.',
      avatar: 'SJ',
      text: 'We hired them for SEO work. Took 4 months but we now rank page 1 for our main keywords. Traffic is up 200%. Worth every penny.',
      gradient: 'from-green-400 to-emerald-500',
      rating: 5
    },
    {
      id: 3,
      name: 'David Martinez',
      position: 'Founder, InnovateLab',
      avatar: 'DM',
      text: 'Needed a logo and brand identity for our startup. They delivered 3 concepts, we picked one, and got all the files we needed. Professional work.',
      gradient: 'from-purple-400 to-pink-500',
      rating: 5
    },
    {
      id: 4,
      name: 'Emily Chen',
      position: 'Product Manager, Digital Wave',
      avatar: 'EC',
      text: 'Our old website was slow and outdated. VisionsTech rebuilt it with Next.js. Now it loads in under 2 seconds and looks modern. Bounce rate dropped 40%.',
      gradient: 'from-pink-400 to-rose-500',
      rating: 5
    },
    {
      id: 5,
      name: 'Michael Brown',
      position: 'Director, CloudTech Inc.',
      avatar: 'MB',
      text: 'They built our SaaS dashboard from scratch. Good communication, met deadlines, and the code quality is solid. Still working with them for updates.',
      gradient: 'from-orange-400 to-red-500',
      rating: 5
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-[#e0e5ec] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-to-br from-yellow-400/20 to-orange-500/20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-gradient-to-br from-pink-400/20 to-purple-500/20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 space-y-4 sm:space-y-6">
          <div className="inline-flex items-center gap-3 px-5 sm:px-7 py-3 sm:py-4 rounded-full bg-[#e0e5ec] shadow-[6px_6px_16px_#b8bdc4,-6px_-6px_16px_#ffffff]">
            <div className="flex gap-1.5">
              <div className="w-2 h-2 rounded-full bg-yellow-400 animate-ping"></div>
              <div className="w-2 h-2 rounded-full bg-orange-400 animate-ping" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 rounded-full bg-red-400 animate-ping" style={{ animationDelay: '0.4s' }}></div>
            </div>
            <span className="text-sm sm:text-base font-bold text-gray-700">💬 Client Reviews</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-800 leading-tight">
            What Our <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-600 bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Here's what our clients say about working with us
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-12 z-10 p-3 sm:p-4 rounded-xl bg-[#e0e5ec] shadow-[6px_6px_12px_#b8bdc4,-6px_-6px_12px_#ffffff] hover:shadow-[8px_8px_16px_#b8bdc4,-8px_-8px_16px_#ffffff] transition-all hover:scale-110 group"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 group-hover:text-yellow-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6"/>
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-12 z-10 p-3 sm:p-4 rounded-xl bg-[#e0e5ec] shadow-[6px_6px_12px_#b8bdc4,-6px_-6px_12px_#ffffff] hover:shadow-[8px_8px_16px_#b8bdc4,-8px_-8px_16px_#ffffff] transition-all hover:scale-110 group"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 group-hover:text-yellow-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6"/>
            </svg>
          </button>

          {/* Testimonial Card */}
          <div className="relative p-8 sm:p-12 rounded-[2rem] bg-[#e0e5ec] shadow-[12px_12px_24px_#b8bdc4,-12px_-12px_24px_#ffffff] overflow-hidden">
            {/* Gradient Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${testimonials[currentSlide].gradient} opacity-5`}></div>

            {/* Quote Icon */}
            <div className={`relative z-10 inline-flex p-4 rounded-xl bg-gradient-to-r ${testimonials[currentSlide].gradient} shadow-[0_6px_20px_rgba(0,0,0,0.2)] mb-6`}>
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
              </svg>
            </div>

            {/* Rating */}
            <div className="relative z-10 flex gap-1 mb-6">
              {[...Array(testimonials[currentSlide].rating)].map((_, index) => (
                <svg key={index} className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 animate-pulse" fill="currentColor" viewBox="0 0 24 24" style={{ animationDelay: `${index * 0.1}s` }}>
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="relative z-10 text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-8 italic">
              "{testimonials[currentSlide].text}"
            </p>

            {/* Client Info */}
            <div className="relative z-10 flex items-center gap-4">
              <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br ${testimonials[currentSlide].gradient} shadow-[6px_6px_16px_rgba(0,0,0,0.2)] flex items-center justify-center flex-shrink-0 animate-pulse`}>
                <span className="text-xl sm:text-2xl font-black text-white">{testimonials[currentSlide].avatar}</span>
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-black text-gray-800">{testimonials[currentSlide].name}</h4>
                <p className="text-sm sm:text-base text-gray-600">{testimonials[currentSlide].position}</p>
              </div>
            </div>

            {/* Decorative Corner */}
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${testimonials[currentSlide].gradient} opacity-10 rounded-bl-full`}></div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 sm:h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? 'w-8 sm:w-10 bg-gradient-to-r from-yellow-400 to-orange-500 shadow-[0_4px_12px_rgba(251,191,36,0.4)]'
                    : 'w-2 sm:w-3 bg-gray-400 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Client Logos Section */}
        <div className="mt-16 p-8 rounded-[2rem] bg-[#e0e5ec] shadow-[8px_8px_20px_#b8bdc4,-8px_-8px_20px_#ffffff]">
          <p className="text-center text-sm font-bold text-gray-600 mb-6">Trusted by Leading Companies</p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {[
              { name: 'TechStart', color: 'from-blue-400 to-indigo-500' },
              { name: 'GreenLeaf', color: 'from-green-400 to-emerald-500' },
              { name: 'InnovateLab', color: 'from-purple-400 to-pink-500' },
              { name: 'Digital Wave', color: 'from-orange-400 to-red-500' },
              { name: 'CloudTech', color: 'from-yellow-400 to-orange-500' }
            ].map((company, i) => (
              <div key={i} className="group px-6 py-4 rounded-xl bg-[#e0e5ec] shadow-[4px_4px_10px_#b8bdc4,-4px_-4px_10px_#ffffff] hover:shadow-[6px_6px_14px_#b8bdc4,-6px_-6px_14px_#ffffff] transition-all hover:scale-105">
                <span className={`text-lg font-black bg-gradient-to-r ${company.color} bg-clip-text text-transparent`}>
                  {company.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
