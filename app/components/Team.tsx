'use client';

import Image from 'next/image';

export default function Team() {
  const teamMembers = [
    {
      id: 1,
      name: 'Rehmat Ali',
      role: 'Chief Executive Officer & Full-Stack Developer',
      bio: 'Started coding at 16, now building web apps for clients worldwide. Specialized in React and Node.js. Love solving complex problems with simple solutions.',
      skills: ['React', 'Node.js', 'Express', 'MongoDB'],
      image: '/rehmatali.png',
      featured: true,
      available: true,
      gradient: 'from-yellow-400 to-orange-500',
      portfolio: 'https://rehmat-ali.vercel.app'
    },
    {
      id: 2,
      name: 'Ahmad',
      role: 'Co-Founder & QA Engineer',
      bio: 'Making sure everything works perfectly before launch. 3 years testing web apps and finding bugs before users do.',
      skills: ['Selenium', 'Jest', 'Cypress', 'Postman'],
      image: '/ahmad.png',
      gradient: 'from-blue-400 to-indigo-500',
      portfolio: '#'
    },
    {
      id: 3,
      name: 'Tahira Sani',
      role: 'SEO Specialist & Designer',
      bio: 'Helping businesses rank on Google and look good doing it. SEO strategy, content creation, and graphic design all in one.',
      skills: ['SEO', 'Graphics', 'Content', 'Analytics'],
      image: '/tahira.png',
      gradient: 'from-green-400 to-emerald-500',
      portfolio: 'https://tahirasani.vercel.app'
    },
    {
      id: 4,
      name: 'Zain Ahmed',
      role: 'Content Writer & Marketing',
      bio: 'Creating content that converts. Blog posts, website copy, and marketing materials that actually get results.',
      skills: ['Copywriting', 'SEO Content', 'Marketing', 'Social Media'],
      avatar: 'ZA',
      gradient: 'from-pink-400 to-rose-500',
      portfolio: '#'
    }
  ];

  const stats = [
    { icon: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M9 7 M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75', number: '15+', label: 'Team Members', gradient: 'from-blue-400 to-blue-600' },
    { icon: 'M22 11.08V12a10 10 0 1 1-5.93-9.14 M22 4 12 14.01 9 11.01', number: '50+', label: 'Projects Completed', gradient: 'from-green-400 to-green-600' },
    { icon: 'M12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2', number: '98%', label: 'Client Satisfaction', gradient: 'from-yellow-400 to-orange-600' },
    { icon: 'M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6', number: '5+', label: 'Years Experience', gradient: 'from-purple-400 to-purple-600' }
  ];

  return (
    <section id="team" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-[#e0e5ec] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 rounded-full bg-gradient-to-br from-green-400/20 to-emerald-500/20 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 rounded-full bg-gradient-to-br from-blue-400/20 to-indigo-500/20 blur-3xl"></div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 space-y-4 sm:space-y-6">
          <div className="inline-flex items-center gap-3 px-5 sm:px-7 py-3 sm:py-4 rounded-full bg-[#e0e5ec] shadow-[6px_6px_16px_#b8bdc4,-6px_-6px_16px_#ffffff]">
            <div className="flex gap-1.5">
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
            <span className="text-sm sm:text-base font-bold text-gray-700">👥 Meet Our Team</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-800 leading-tight">
            Our Expert <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-600 bg-clip-text text-transparent">Team</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Meet the talented individuals behind Visionstech who bring your digital dreams to life
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 max-w-7xl mx-auto">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group relative rounded-[2rem] bg-[#e0e5ec] shadow-[15px_15px_30px_#bebebe,-15px_-15px_30px_#ffffff] hover:shadow-[20px_20px_40px_#bebebe,-20px_-20px_40px_#ffffff] transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* Gradient Header Background */}
              <div className={`relative h-32 bg-gradient-to-br ${member.gradient} overflow-hidden`}>
                {/* Decorative Circles */}
                <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-white/10 blur-xl"></div>
                <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-white/10 blur-xl"></div>
                
                {/* Available Badge */}
                {member.available && (
                  <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
                    <span className="text-xs font-bold text-white">Available</span>
                  </div>
                )}
              </div>

              {/* Avatar - Overlapping Header */}
              <div className="relative -mt-16 px-6 mb-4">
                {member.image ? (
                  <div className="relative w-28 h-28 mx-auto rounded-2xl overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.2)] ring-4 ring-[#e0e5ec] group-hover:ring-6 group-hover:shadow-[0_12px_32px_rgba(0,0,0,0.25)] transition-all duration-500">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={112}
                      height={112}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                ) : (
                  <div className={`w-28 h-28 mx-auto rounded-2xl bg-gradient-to-br ${member.gradient} shadow-[0_8px_24px_rgba(0,0,0,0.2)] ring-4 ring-[#e0e5ec] flex items-center justify-center group-hover:scale-105 transition-all duration-500`}>
                    <span className="text-4xl font-black text-white">{member.avatar}</span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="px-6 pb-6 text-center space-y-4">
                {/* Name & Role */}
                <div>
                  <h3 className="text-lg sm:text-xl font-black text-gray-800 mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-yellow-500 group-hover:to-orange-500 group-hover:bg-clip-text transition-all duration-300">
                    {member.name}
                  </h3>
                  <p className={`text-sm font-bold bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent`}>
                    {member.role}
                  </p>
                </div>

                {/* Bio */}
                <p className="text-xs text-gray-600 leading-relaxed line-clamp-3">
                  {member.bio}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 justify-center pt-2">
                  {member.skills.map((skill, idx) => (
                    <span key={idx} className="px-3 py-1 text-xs font-bold text-gray-700 bg-[#e0e5ec] rounded-lg shadow-[3px_3px_6px_#c5c5c5,-3px_-3px_6px_#ffffff] hover:shadow-[4px_4px_8px_#c5c5c5,-4px_-4px_8px_#ffffff] transition-all hover:scale-105">
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

                {/* Portfolio Button */}
                <a
                  href={member.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full px-6 py-3 rounded-xl bg-gradient-to-r ${member.gradient} text-white font-bold text-sm shadow-[0_6px_16px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.2)] hover:scale-105 transition-all duration-300 text-center group/btn`}
                >
                  <span className="flex items-center justify-center gap-2">
                    View Portfolio
                    <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </a>

                {/* Social Links */}
                <div className="flex justify-center gap-2 pt-2">
                  {['LinkedIn', 'GitHub', 'Twitter'].map((platform, idx) => (
                    <button 
                      key={idx} 
                      className={`p-2.5 rounded-xl bg-gradient-to-br ${member.gradient} shadow-[4px_4px_10px_rgba(0,0,0,0.1)] hover:shadow-[6px_6px_14px_rgba(0,0,0,0.15)] hover:scale-110 transition-all duration-300 group/social`}
                    >
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        {idx === 0 && <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9 6 9 6 21 2 21z M4 4 M4 4"/>}
                        {idx === 1 && <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>}
                        {idx === 2 && <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>}
                      </svg>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="group relative p-6 sm:p-8 rounded-[2rem] bg-[#e0e5ec] shadow-[8px_8px_20px_#b8bdc4,-8px_-8px_20px_#ffffff] hover:shadow-[12px_12px_28px_#b8bdc4,-12px_-12px_28px_#ffffff] transition-all hover:-translate-y-2 text-center overflow-hidden min-h-[180px] flex flex-col items-center justify-center">
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <div className={`relative z-10 inline-flex p-4 rounded-xl bg-gradient-to-br ${stat.gradient} shadow-[4px_4px_12px_rgba(0,0,0,0.1)] mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path d={stat.icon}/>
                </svg>
              </div>
              <div className={`relative z-10 text-3xl sm:text-4xl font-black bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                {stat.number}
              </div>
              <div className="relative z-10 text-xs sm:text-sm font-bold text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
