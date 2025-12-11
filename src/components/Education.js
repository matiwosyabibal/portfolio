import React, { useEffect, useRef } from 'react';

export default function Education() {
  const rootRef = useRef(null);

  useEffect(() => {
    // Intersection Observer to reveal the card with smooth animation
    const node = rootRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('education-in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="education" className="relative py-28 px-4 bg-gradient-to-b from-slate-950 via-gray-900 to-zinc-900 overflow-hidden">
      {/* Enhanced background accents with modern colors */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top-left gradient orb - Teal/Blue */}
        <div className="absolute -left-24 -top-24 w-[520px] h-[520px] rounded-full bg-gradient-to-br from-teal-600/15 via-cyan-500/10 to-transparent blur-3xl transform rotate-12"></div>

        {/* Middle-right gradient orb - Purple/Pink */}
        <div className="absolute right-1/4 top-1/4 w-[320px] h-[320px] rounded-full bg-gradient-to-tr from-purple-600/10 via-pink-500/8 to-transparent blur-2xl"></div>

        {/* Bottom gradient orb - Amber/Orange */}
        <div className="absolute right-8 bottom-[-80px] w-[420px] h-[420px] rounded-full bg-gradient-to-tr from-amber-600/8 via-orange-500/6 to-transparent blur-2xl"></div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-cyan-600/10 to-teal-600/10 rounded-full border border-cyan-500/20">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <p className="text-cyan-300 text-sm font-semibold tracking-widest uppercase">Academic Excellence</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-slate-100 via-gray-200 to-slate-300 bg-clip-text text-transparent tracking-tight leading-tight mb-4">
            Education Journey
          </h2>
          <p className="text-gray-300/80 mt-4 max-w-2xl mx-auto text-lg">
            Merging theoretical knowledge with practical application — building scalable solutions with modern technology stacks
          </p>
        </div>

        {/* Modern Card Design */}
        <div
          ref={rootRef}
          className="group education-card relative mx-auto rounded-3xl p-6 md:p-8 lg:p-12 bg-gradient-to-br from-gray-900/70 via-gray-800/50 to-gray-900/60 border border-gray-700/50 backdrop-blur-xl shadow-2xl shadow-black/30 transition-all duration-700 ease-out transform-gpu hover:scale-[1.01] hover:border-cyan-500/30 hover:shadow-cyan-500/10"
        >
          {/* Animated gradient border */}
          <div className="absolute -inset-px rounded-3xl pointer-events-none opacity-0 transition-opacity duration-500 education-in-view:opacity-100" aria-hidden>
            <div className="w-full h-full rounded-3xl bg-gradient-to-r from-cyan-600/20 via-teal-500/15 to-purple-600/10 blur-xl mix-blend-screen animate-gradient-shift"></div>
          </div>

          {/* Corner accents */}
          <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-cyan-500/20 rounded-tr-3xl"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-purple-500/20 rounded-bl-3xl"></div>

          <div className="flex flex-col lg:flex-row gap-8 items-start relative z-10">
            {/* Left Icon & timeline */}
            <div className="flex-shrink-0 flex flex-col items-center lg:items-start w-full lg:w-56">
              <div className="relative w-28 h-28 rounded-2xl bg-gradient-to-br from-cyan-600/15 to-teal-600/10 border border-cyan-500/30 flex items-center justify-center group/icon hover:border-cyan-400/50 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-teal-500/5 rounded-2xl blur-md group-hover/icon:blur-lg transition-all duration-500"></div>
                <svg className="w-12 h-12 text-cyan-400 group-hover/icon:text-teal-300 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
                {/* Animated rings */}
                <div className="absolute inset-0 border-2 border-cyan-400/20 rounded-2xl animate-ping-slow"></div>
              </div>

              <div className="mt-6 text-center lg:text-left">
                <div className="inline-flex items-center gap-3 px-4 py-2.5 bg-gradient-to-r from-teal-600/12 to-emerald-600/10 border border-teal-500/25 rounded-full group/status">
                  <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse group-hover/status:scale-150 transition-transform duration-300"></span>
                  <span className="text-teal-300 text-sm font-semibold group-hover/status:text-teal-200 transition-colors duration-300">Expected 2026</span>
                </div>

                {/* Timeline connector */}
                <div className="hidden lg:block mt-8 relative">
                  <div className="w-px h-28 bg-gradient-to-b from-cyan-500/30 via-teal-500/20 to-transparent mx-auto rounded"></div>
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-cyan-500/40 animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-2">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-100 mb-2 group-hover:text-white transition-colors duration-300">
                    Bachelor of Software Engineering
                  </h3>
                  <p className="text-teal-300 text-lg font-medium flex items-center gap-2 group/location hover:text-cyan-300 transition-colors duration-300">
                    <svg className="w-5 h-5 group-hover/location:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Debre Markos University
                  </p>
                </div>

                {/* Enhanced Action buttons */}
                <div className="flex items-center gap-3">
                  <a
                    href="#projects"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-500 hover:to-teal-500 text-white font-semibold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all duration-300 transform hover:-translate-y-0.5"
                  >
                    <span>View Projects</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>

                  <button
                    onClick={() => window.open('mailto:matiwosyabiabal@gmail.com')}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-600 text-gray-300 hover:border-cyan-500 hover:text-white hover:bg-cyan-500/5 transition-all duration-300"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Contact
                  </button>
                </div>
              </div>

              <p className="text-gray-300/90 text-base md:text-lg leading-relaxed mt-6 mb-8 pl-4 border-l-2 border-cyan-500/30">
                Currently pursuing a degree in Software Engineering with hands-on experience building
                <span className="text-teal-300 font-medium"> web applications</span>,
                <span className="text-cyan-300 font-medium"> mobile solutions</span>, and
                <span className="text-purple-300 font-medium"> full-stack systems</span>.
                Focused on clean architecture, responsive UI/UX, and scalable solutions using modern tech stacks.
              </p>

              {/* Enhanced Divider */}
              <div className="relative mb-8">
                <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full blur-sm"></div>
              </div>

              {/* Focus areas grid */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 animate-pulse"></div>
                    <h4 className="text-gray-200 text-sm font-semibold uppercase tracking-wider">Specialized Focus Areas</h4>
                  </div>
                  <span className="text-xs text-gray-500">Hover to explore</span>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    {
                      label: 'Web Development',
                      icon: () => (
                        <svg className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                      ),
                      color: 'from-cyan-600/15 to-cyan-500/10',
                      hoverColor: 'group-hover:from-cyan-600/25 group-hover:to-cyan-500/20'
                    },
                    {
                      label: 'Mobile Apps',
                      icon: () => (
                        <svg className="w-6 h-6 text-teal-400 group-hover:text-teal-300 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                      ),
                      color: 'from-teal-600/15 to-teal-500/10',
                      hoverColor: 'group-hover:from-teal-600/25 group-hover:to-teal-500/20'
                    },
                    {
                      label: 'Full-Stack',
                      icon: () => (
                        <svg className="w-6 h-6 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      ),
                      color: 'from-purple-600/15 to-purple-500/10',
                      hoverColor: 'group-hover:from-purple-600/25 group-hover:to-purple-500/20'
                    },
                    {
                      label: 'Database Design',
                      icon: () => (
                        <svg className="w-6 h-6 text-amber-400 group-hover:text-amber-300 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                        </svg>
                      ),
                      color: 'from-amber-600/15 to-amber-500/10',
                      hoverColor: 'group-hover:from-amber-600/25 group-hover:to-amber-500/20'
                    }
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="group p-5 bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-xl border border-gray-700/50 hover:border-cyan-500/40 transition-all duration-300 text-center hover:translate-y-[-4px] hover:shadow-xl hover:shadow-cyan-500/10"
                    >
                      <div className={`w-14 h-14 mx-auto mb-4 rounded-lg flex items-center justify-center bg-gradient-to-br ${item.color} ${item.hoverColor} border border-gray-600/30 group-hover:border-cyan-500/30 transition-all duration-300`}>
                        {item.icon()}
                      </div>
                      <span className="text-gray-200 text-sm font-medium group-hover:text-white transition-colors duration-300">
                        {item.label}
                      </span>
                      {/* Progress indicator */}
                      <div className="mt-3 h-1 w-full bg-gray-700/50 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full transition-all duration-700"
                          style={{ width: `${75 + idx * 8}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Current Courses */}
              <div className="mt-10 pt-8 border-t border-gray-700/50">
                <h5 className="text-gray-300 font-medium mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  Current Focus Areas
                </h5>
                <div className="flex flex-wrap gap-2">
                  {['React & Next.js', 'Node.js Backend', 'Database Systems', 'Cloud Computing', 'UI/UX Design', 'DevOps Basics'].map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 text-sm bg-gradient-to-r from-gray-800/50 to-gray-700/50 text-gray-300 rounded-full border border-gray-600/50 hover:border-cyan-500/50 hover:text-white transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Footnote */}
        <p className="mt-10 text-center text-gray-400/70 text-sm font-medium">
          <span className="text-cyan-400/80">•</span> Continuously evolving with modern technologies and industry best practices
          <span className="mx-2 text-gray-500">|</span>
          <span className="text-teal-400/80">•</span> GPA: 3.8/4.0 & Academic Excellence Awards
        </p>
      </div>

      {/* Enhanced animations and global styles */}
      <style jsx global>{`
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes ping-slow {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0; transform: scale(1.2); }
        }

        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
        }

        .animate-ping-slow {
          animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        .education-card { 
          opacity: 0; 
          transform: translateY(18px) scale(.995); 
        }
        
        .education-in-view.education-card, 
        .education-card.education-in-view { 
          opacity: 1; 
          transform: none; 
          transition: opacity .7s ease, transform .7s cubic-bezier(.2,.9,.3,1); 
        }

        /* Custom selection color */
        ::selection {
          background: rgba(6, 182, 212, 0.3);
          color: white;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: rgba(30, 41, 59, 0.5);
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #06b6d4, #14b8a6);
          border-radius: 5px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #0891b2, #0d9488);
        }
      `}</style>
    </section>
  );
}