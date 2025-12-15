import React from 'react';

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-16 md:py-24 px-4 bg-gradient-to-b from-gray-900 to-black overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] md:w-[900px] h-[350px] md:h-[450px] bg-indigo-700/20 rounded-full blur-[120px] md:blur-[140px]" />
        <div className="absolute bottom-0 right-10 w-[350px] md:w-[500px] h-[220px] md:h-[300px] bg-blue-600/10 rounded-full blur-[80px] md:blur-[100px]" />
      </div>

      <div className="relative max-w-6xl mx-auto z-10">
        {/* Header */}
        <div className="text-center mb-14 md:mb-20">
          <p className="text-indigo-400 text-xs md:text-sm tracking-widest uppercase font-semibold mb-3">
            Contact
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-5">
            Let's Work Together
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Whether you have a project idea or want to collaborate, feel free to reach out anytime.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6 mb-14 md:mb-20">
          
          {/* Email */}
          <a
            href="mailto:matiwosyabiabal@gmail.com"
            className="group p-6 md:p-8 bg-gray-900/60 backdrop-blur-xl rounded-2xl border border-gray-800 hover:border-indigo-500/60 hover:scale-[1.02] transition-all duration-300 shadow-lg"
          >
            <div className="w-12 h-12 md:w-14 md:h-14 bg-indigo-500/10 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-indigo-500/20 transition">
              <svg className="w-6 h-6 md:w-7 md:h-7 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-white font-semibold text-lg mb-1">Email</h3>
            <p className="text-gray-400 text-sm md:text-base group-hover:text-indigo-300 transition">
              matiwosyabiabal@gmail.com
            </p>
          </a>

          {/* Phone */}
          <a
            href="tel:+251924832989"
            className="group p-6 md:p-8 bg-gray-900/60 backdrop-blur-xl rounded-2xl border border-gray-800 hover:border-indigo-500/60 hover:scale-[1.02] transition-all duration-300 shadow-lg"
          >
            <div className="w-12 h-12 md:w-14 md:h-14 bg-indigo-500/10 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-indigo-500/20 transition">
              <svg className="w-6 h-6 md:w-7 md:h-7 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-white font-semibold text-lg mb-1">Phone</h3>
            <p className="text-gray-400 text-sm md:text-base group-hover:text-indigo-300 transition">
              +251 924 832 989
            </p>
          </a>

          {/* Location */}
          <div className="group p-6 md:p-8 bg-gray-900/60 backdrop-blur-xl rounded-2xl border border-gray-800 hover:border-indigo-500/60 hover:scale-[1.02] transition-all duration-300 shadow-lg">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-indigo-500/10 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-indigo-500/20 transition">
              <svg className="w-6 h-6 md:w-7 md:h-7 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-white font-semibold text-lg mb-1">Location</h3>
            <p className="text-gray-400 text-sm md:text-base">
              Debre Markos, Ethiopia
            </p>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mb-12">
          {[
            { href: "https://github.com/matiwosyabibal", icon: "github" },
            { href: "https://linkedin.com/in/matiwos-yabibal", icon: "linkedin" },
            { href: "https://t.me/matiwosyabibal", icon: "telegram" }
          ].map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 md:w-12 md:h-12 bg-gray-900/60 backdrop-blur-xl border border-gray-800 hover:border-indigo-500/60 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:scale-110 transition-all duration-300"
            >
              <i className={`fa-brands fa-${item.icon} text-lg md:text-xl`} />
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="mailto:matiwosyabiabal@gmail.com"
            className="inline-flex items-center gap-3 px-7 md:px-8 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white text-base md:text-lg font-medium rounded-xl shadow-lg transition-all duration-300 hover:scale-105"
          >
            <span>Send Message</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
