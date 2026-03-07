'use client';

import { useState } from 'react';

export default function VisionNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-3 sm:top-6 left-0 right-0 z-50 px-3 sm:px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-center justify-between px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-2xl sm:rounded-[2rem] bg-[#e0e5ec] shadow-[8px_8px_24px_#b8bdc4,-8px_-8px_24px_#ffffff]">
          
          {/* Logo */}
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="flex gap-1 sm:gap-2">
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-blue-500 shadow-[2px_2px_6px_rgba(59,130,246,0.5)]"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500 shadow-[2px_2px_6px_rgba(239,68,68,0.5)]"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-400 shadow-[2px_2px_6px_rgba(250,204,21,0.5)]"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500 shadow-[2px_2px_6px_rgba(34,197,94,0.5)]"></div>
            </div>
            <div className="h-6 sm:h-8 w-px bg-gray-300"></div>
            <div>
              <div className="text-base sm:text-xl font-black tracking-tight text-gray-800">VisionsTech</div>
              <div className="text-[8px] sm:text-[10px] text-gray-500 font-medium">Digital Solutions</div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-2">
            {[
              { name: 'Home', id: 'home' },
              { name: 'Services', id: 'services' },
              { name: 'Process', id: 'process' },
              { name: 'Work', id: 'work' },
              { name: 'Pricing', id: 'pricing' },
              { name: 'Team', id: 'team' },
              { name: 'FAQ', id: 'faq' }
            ].map((item) => (
              <a
                key={item.name}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-4 py-2.5 text-sm font-bold text-gray-700 hover:text-yellow-600 transition-colors relative group"
              >
                {item.name}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-yellow-400 rounded-full group-hover:w-8 transition-all duration-300"></div>
              </a>
            ))}
          </div>

          {/* Contact Button */}
          <button 
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="hidden lg:flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold text-sm shadow-[0_6px_20px_rgba(251,191,36,0.4)] hover:shadow-[0_8px_28px_rgba(251,191,36,0.5)] hover:scale-105 transition-all"
          >
            <span>Contact</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#e0e5ec] shadow-[4px_4px_10px_#b8bdc4,-4px_-4px_10px_#ffffff] active:shadow-[2px_2px_6px_#b8bdc4,-2px_-2px_6px_#ffffff] flex items-center justify-center transition-all"
          >
            <div className="space-y-1 sm:space-y-1.5">
              <div className={`w-4 sm:w-5 h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5 sm:translate-y-2' : ''}`}></div>
              <div className={`w-4 sm:w-5 h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-4 sm:w-5 h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5 sm:-translate-y-2' : ''}`}></div>
            </div>
          </button>
        </div>

        {/* Mobile Dropdown */}
        <div className={`lg:hidden mt-3 sm:mt-4 overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="p-4 sm:p-6 rounded-2xl sm:rounded-[2rem] bg-[#e0e5ec] shadow-[8px_8px_24px_#b8bdc4,-8px_-8px_24px_#ffffff]">
            <div className="space-y-2 sm:space-y-3">
              {[
                { name: 'Home', id: 'home' },
                { name: 'Services', id: 'services' },
                { name: 'Process', id: 'process' },
                { name: 'Work', id: 'work' },
                { name: 'Pricing', id: 'pricing' },
                { name: 'Team', id: 'team' },
                { name: 'FAQ', id: 'faq' },
                { name: 'Contact', id: 'contact' }
              ].map((item) => (
                <a
                  key={item.name}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(false);
                    document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-[#e0e5ec] shadow-[4px_4px_10px_#b8bdc4,-4px_-4px_10px_#ffffff] active:shadow-[2px_2px_6px_#b8bdc4,-2px_-2px_6px_#ffffff] text-gray-700 font-bold text-sm hover:text-yellow-600 transition-all"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
