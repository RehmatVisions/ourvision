'use client';

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-24 bg-[#e0e5ec]">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 rounded-full bg-[#e0e5ec] shadow-[4px_4px_8px_#b8bdc4,-4px_-4px_8px_#ffffff] mb-6">
            <span className="text-sm font-semibold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Work <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">Together</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="relative p-8 sm:p-10 rounded-[2.5rem] bg-[#e0e5ec] shadow-[15px_15px_30px_#bebebe,-15px_-15px_30px_#ffffff] overflow-hidden">
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-yellow-400/10 to-orange-500/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-black text-gray-800 mb-2">Send us a message</h3>
              <p className="text-sm text-gray-600 mb-8">Fill out the form below and we'll get back to you within 24 hours</p>
              
              <form className="space-y-6">
                {/* Name Input */}
                <div className="group">
                  <label className="block text-sm font-bold text-gray-700 mb-3">Your Name</label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-gradient-to-r from-yellow-400 to-orange-500">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      name="user_name"
                      placeholder="John Doe"
                      className="w-full pl-16 pr-6 py-4 rounded-2xl bg-[#e0e5ec] shadow-[inset_6px_6px_12px_#c5c5c5,inset_-6px_-6px_12px_#ffffff] text-gray-700 placeholder-gray-400 focus:outline-none focus:shadow-[inset_8px_8px_16px_#c5c5c5,inset_-8px_-8px_16px_#ffffff] transition-all"
                    />
                  </div>
                </div>

                {/* Email Input */}
                <div className="group">
                  <label className="block text-sm font-bold text-gray-700 mb-3">Email Address</label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-gradient-to-r from-orange-400 to-yellow-500">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <input
                      type="email"
                      name="user_email"
                      placeholder="john@example.com"
                      className="w-full pl-16 pr-6 py-4 rounded-2xl bg-[#e0e5ec] shadow-[inset_6px_6px_12px_#c5c5c5,inset_-6px_-6px_12px_#ffffff] text-gray-700 placeholder-gray-400 focus:outline-none focus:shadow-[inset_8px_8px_16px_#c5c5c5,inset_-8px_-8px_16px_#ffffff] transition-all"
                    />
                  </div>
                </div>

                {/* Service Select */}
                <div className="group">
                  <label className="block text-sm font-bold text-gray-700 mb-3">Service Needed</label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-gradient-to-r from-amber-400 to-orange-400">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <select 
                      name="service"
                      className="w-full pl-16 pr-6 py-4 rounded-2xl bg-[#e0e5ec] shadow-[inset_6px_6px_12px_#c5c5c5,inset_-6px_-6px_12px_#ffffff] text-gray-700 focus:outline-none focus:shadow-[inset_8px_8px_16px_#c5c5c5,inset_-8px_-8px_16px_#ffffff] transition-all appearance-none cursor-pointer"
                    >
                      <option>Web Development</option>
                      <option>Mobile App</option>
                      <option>UI/UX Design</option>
                      <option>SEO & Marketing</option>
                      <option>Graphic Design</option>
                      <option>Other</option>
                    </select>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Message Textarea */}
                <div className="group">
                  <label className="block text-sm font-bold text-gray-700 mb-3">Your Message</label>
                  <div className="relative">
                    <div className="absolute left-4 top-4 p-2 rounded-lg bg-gradient-to-r from-yellow-500 to-amber-400">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                    </div>
                    <textarea
                      name="message"
                      rows={5}
                      placeholder="Tell us about your project..."
                      className="w-full pl-16 pr-6 py-4 rounded-2xl bg-[#e0e5ec] shadow-[inset_6px_6px_12px_#c5c5c5,inset_-6px_-6px_12px_#ffffff] text-gray-700 placeholder-gray-400 focus:outline-none focus:shadow-[inset_8px_8px_16px_#c5c5c5,inset_-8px_-8px_16px_#ffffff] transition-all resize-none"
                    ></textarea>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    alert('Thank you for your message! We will get back to you soon.');
                  }}
                  className="w-full px-8 py-5 rounded-2xl bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold text-base shadow-[0_10px_30px_rgba(251,191,36,0.4)] hover:shadow-[0_15px_40px_rgba(251,191,36,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3 group"
                >
                  <span>Send Message</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="p-8 rounded-[2rem] bg-[#e0e5ec] shadow-[8px_8px_16px_#b8bdc4,-8px_-8px_16px_#ffffff] hover:shadow-[10px_10px_20px_#b8bdc4,-10px_-10px_20px_#ffffff] transition-all">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center flex-shrink-0 shadow-[4px_4px_12px_rgba(251,191,36,0.4)]">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Email Us</h3>
                  <a href="mailto:visionstech.r@gmail.com" className="text-gray-600 hover:text-yellow-600 transition-colors block">
                    visionstech.r@gmail.com
                  </a>
                  <p className="text-gray-500 text-sm mt-1">We reply within 24 hours</p>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-[2rem] bg-[#e0e5ec] shadow-[8px_8px_16px_#b8bdc4,-8px_-8px_16px_#ffffff] hover:shadow-[10px_10px_20px_#b8bdc4,-10px_-10px_20px_#ffffff] transition-all">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-400 to-yellow-500 flex items-center justify-center flex-shrink-0 shadow-[4px_4px_12px_rgba(251,146,60,0.4)]">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Call Us</h3>
                  <a href="tel:+923244646260" className="text-gray-600 hover:text-yellow-600 transition-colors block">
                    +92 324 4646260
                  </a>
                  <p className="text-gray-500 text-sm mt-1">Mon-Sat 9am-8pm PKT</p>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-[2rem] bg-[#e0e5ec] shadow-[8px_8px_16px_#b8bdc4,-8px_-8px_16px_#ffffff] hover:shadow-[10px_10px_20px_#b8bdc4,-10px_-10px_20px_#ffffff] transition-all">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-400 to-orange-400 flex items-center justify-center flex-shrink-0 shadow-[4px_4px_12px_rgba(251,191,36,0.4)]">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Work Remotely</h3>
                  <p className="text-gray-600">Based in Pakistan</p>
                  <p className="text-gray-500 text-sm mt-1">Serving clients worldwide 🌍</p>
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div className="p-6 rounded-[2rem] bg-[#e0e5ec] shadow-[8px_8px_16px_#b8bdc4,-8px_-8px_16px_#ffffff]">
              <h4 className="text-sm font-bold text-gray-700 mb-4">Working Hours (PKT)</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="text-gray-800 font-bold">9:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday</span>
                  <span className="text-gray-800 font-bold">10:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday</span>
                  <span className="text-gray-800 font-bold">Closed</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {[
                { name: 'WhatsApp', url: 'https://wa.me/923244646260', icon: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z' },
                { name: 'LinkedIn', url: '#', icon: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9 6 9 6 21 2 21z M4 4 M4 4' },
                { name: 'GitHub', url: '#', icon: 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22' },
                { name: 'Instagram', url: '#', icon: 'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z M17.5 6.5h.01 M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5z' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-xl bg-[#e0e5ec] shadow-[4px_4px_8px_#b8bdc4,-4px_-4px_8px_#ffffff] hover:shadow-[6px_6px_12px_#b8bdc4,-6px_-6px_12px_#ffffff] flex items-center justify-center transition-all hover:scale-110 group"
                >
                  <svg className="w-6 h-6 text-gray-700 group-hover:text-yellow-600 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon}/>
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
