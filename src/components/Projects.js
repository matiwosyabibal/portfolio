import React from 'react';

const PROJECTS = [
  {
    id: 1,
    title: 'COC Management System',
    category: 'Certification Workflow',
    description:
      'Digitized COC operations with trainee enrollment, assessment tracking, and automated certificate issuance for regional bureaus.',
    image: '/image/coc1.png',
    stack: ['Enrollment desk', 'Assessment engine', 'Biometric check-ins', 'Certificate vault'],
    result: '8 regional offices onboarded',
    meta: [
      { label: 'Focus', value: 'Government certification' },
      { label: 'Scope', value: 'Web · Workflow automation' }
    ],
    links: {
      demo: '#',
      repo: '#'
    }
  },
  {
    id: 2,
    title: 'Halemariam Mamo School SIMS',
    category: 'Education Platform',
    description:
      'School information management suite covering attendance, grading, finance, and parent communication for Halemariam Mamo School.',
    image: '/image/mamo.png',
    stack: ['Attendance kiosk', 'Grade analytics', 'Fee automation', 'Parent chat'],
    result: '2K+ student records centralized',
    meta: [
      { label: 'Focus', value: 'Student lifecycle' },
      { label: 'Scope', value: 'Web · Reporting suite' }
    ],
    links: {
      demo: '#',
      repo: '#'
    }
  },
  {
    id: 3,
    title: 'Sunday Market ecomerce',
    category: 'E-commerce',
    description:
      'Sunday Market ecomerce it used to sell and buy electronecs products up to delivery.',
    image: '/image/market.png',
    stack: ['Product listing', 'Cart management', 'Secure checkout', 'Delivery tracking'],
    result: 'Growing user base',
    meta: [
      { label: 'Focus', value: 'Electronics retail' },
      { label: 'Scope', value: 'Web · Full-stack commerce' }
    ],
    links: {
      demo: '#',
      repo: '#'
    }
  }
];

function Projects() {
  return (
    <section id="projects" className="py-24 px-4 relative bg-gradient-to-b from-[#0f172a] via-[#1e1b4b] to-[#0f172a] overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-96 h-96 bg-purple-600/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[10%] right-[5%] w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-xs font-medium text-white/80 tracking-widest uppercase">Portfolio & Case Studies</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-blue-200 leading-tight pb-2">
            Featured Projects
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            A curated selection of shipped platforms spanning health tech, commerce, and data-rich enterprise tooling.
            Built with modern stacks and focused on user experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <article
              key={project.id}
              className="group relative flex flex-col h-full bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10 opacity-60"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                />

                {/* Floating Badges */}
                <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-xs font-medium text-white bg-black/50 backdrop-blur-md rounded-full border border-white/10">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow p-6 space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-1 text-xs font-medium text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                      Active
                    </div>
                  </div>
                  <p className="text-slate-400 leading-relaxed text-sm line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={`${project.id}-${item}`}
                      className="px-2.5 py-1 text-xs font-medium text-slate-300 bg-white/5 border border-white/5 rounded-lg group-hover:bg-white/10 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 py-4 border-t border-white/5">
                  {project.meta.map((item) => (
                    <div key={`${project.id}-${item.label}`}>
                      <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">{item.label}</p>
                      <p className="text-sm font-medium text-slate-200">{item.value}</p>
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="mt-auto pt-4 flex gap-3">
                  <a
                    href={project.links.demo}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-purple-600 hover:bg-purple-500 rounded-xl transition-all duration-300 shadow-lg shadow-purple-900/20 hover:shadow-purple-600/30 group/btn"
                  >
                    <span>Live Demo</span>
                    <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                  <a
                    href={project.links.repo}
                    className="flex items-center justify-center px-4 py-2.5 text-sm font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl transition-all duration-300"
                    aria-label="View Source Code"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
