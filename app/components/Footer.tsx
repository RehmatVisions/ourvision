'use client';

export default function Footer() {
  return (
    <footer className="bg-[#e0e5ec] px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="p-8 rounded-[2rem] bg-[#e0e5ec] shadow-[8px_8px_16px_#b8bdc4,-8px_-8px_16px_#ffffff]">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 shadow-[4px_4px_12px_rgba(251,191,36,0.4)] flex items-center justify-center">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                  VisionsTech
                </span>
              </div>
              <p className="text-gray-600 mb-4 max-w-sm">
                Building digital solutions that help businesses grow. Web development, SEO, design, and more.
              </p>
              <div className="flex gap-3">
                {['twitter', 'linkedin', 'github', 'dribbble'].map((social) => (
                  <button
                    key={social}
                    className="w-10 h-10 rounded-lg bg-[#e0e5ec] shadow-[3px_3px_6px_#b8bdc4,-3px_-3px_6px_#ffffff] hover:shadow-[4px_4px_8px_#b8bdc4,-4px_-4px_8px_#ffffff] flex items-center justify-center transition-all"
                  >
                    <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" />
                    </svg>
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {[
                  { name: 'Home', id: 'home' },
                  { name: 'Services', id: 'services' },
                  { name: 'Portfolio', id: 'work' },
                  { name: 'Team', id: 'team' },
                  { name: 'Contact', id: 'contact' }
                ].map((link) => (
                  <li key={link.name}>
                    <a 
                      href={`#${link.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="text-gray-600 hover:text-yellow-600 transition-colors cursor-pointer"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-4">Services</h3>
              <ul className="space-y-2">
                {['Web Development', 'Mobile Apps', 'UI/UX Design', 'SEO', 'Branding'].map((service) => (
                  <li key={service}>
                    <a 
                      href="#services"
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="text-gray-600 hover:text-yellow-600 transition-colors cursor-pointer"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-300/50 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">
              © 2024 VisionsTech. Built with passion in Pakistan.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-600 hover:text-yellow-600 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-600 hover:text-yellow-600 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-600 hover:text-yellow-600 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
