'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How long does it take to build a website?',
      answer: 'A basic website takes 2-3 weeks. More complex projects with custom features can take 4-8 weeks. We\'ll give you a clear timeline after discussing your requirements.'
    },
    {
      question: 'Do you provide website maintenance?',
      answer: 'Yes! All packages include support period. After that, we offer monthly maintenance plans starting from $99/month for updates, backups, and security.'
    },
    {
      question: 'Will my website be mobile-friendly?',
      answer: 'Absolutely! Every website we build is fully responsive and works perfectly on phones, tablets, and desktops. We test on multiple devices before launch.'
    },
    {
      question: 'Can you help with SEO?',
      answer: 'Yes, we include basic SEO setup in all packages. For advanced SEO campaigns with content creation and link building, we offer dedicated SEO packages starting from $299/month.'
    },
    {
      question: 'What if I need changes after the website is live?',
      answer: 'Minor changes are included in your support period. For major updates or new features, we provide affordable hourly rates or can create a custom quote.'
    },
    {
      question: 'Do I own the website after it\'s built?',
      answer: 'Yes! You own everything - the code, design, content, and domain. We provide all files and access after final payment.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept bank transfers, PayPal, and cryptocurrency. Payment is typically 50% upfront and 50% on completion.'
    },
    {
      question: 'Can you redesign my existing website?',
      answer: 'Definitely! We can redesign your current site or build a completely new one. We\'ll analyze your existing site and suggest improvements.'
    }
  ];

  return (
    <section id="faq" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-[#e0e5ec] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-gradient-to-br from-green-400/20 to-emerald-500/20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-gradient-to-br from-yellow-400/20 to-orange-500/20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 space-y-4 sm:space-y-6">
          <div className="inline-flex items-center gap-3 px-5 sm:px-7 py-3 sm:py-4 rounded-full bg-[#e0e5ec] shadow-[6px_6px_16px_#b8bdc4,-6px_-6px_16px_#ffffff]">
            <div className="flex gap-1.5">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
              <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
            <span className="text-sm sm:text-base font-bold text-gray-700">❓ FAQ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-800 leading-tight">
            Frequently Asked <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-600 bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Got questions? We've got answers. Can't find what you're looking for? Contact us!
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="p-6 rounded-[1.5rem] bg-[#e0e5ec] shadow-[8px_8px_16px_#b8bdc4,-8px_-8px_16px_#ffffff] hover:shadow-[10px_10px_20px_#b8bdc4,-10px_-10px_20px_#ffffff] transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between gap-4 text-left group"
              >
                <span className="text-base sm:text-lg font-bold text-gray-800 group-hover:text-yellow-600 transition-colors">
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}>
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-96 mt-4' : 'max-h-0'
              }`}>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-12 text-center p-8 rounded-[2rem] bg-[#e0e5ec] shadow-[8px_8px_16px_#b8bdc4,-8px_-8px_16px_#ffffff] max-w-2xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-black text-gray-800 mb-3">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6">
            We're here to help! Send us a message and we'll get back to you within 24 hours.
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold shadow-[0_8px_24px_rgba(251,191,36,0.4)] hover:shadow-[0_12px_32px_rgba(251,191,36,0.5)] hover:scale-105 transition-all flex items-center justify-center gap-2 mx-auto group"
          >
            <span>Contact Us</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
