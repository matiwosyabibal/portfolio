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
    ]
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
    ]
  },
  {
    id: 3,
    title: 'Urban Clinics Marketplace',
    category: 'On-demand Care',
    description:
      'Service marketplace that matches patients with home-care teams, diagnostics, and delivery riders across Addis Ababa.',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80',
    stack: ['Partner onboarding', 'Geo-matching', 'Courier tracking', 'Wallet payouts'],
    result: '+18 service lines launched',
    meta: [
      { label: 'Focus', value: 'Marketplace ops' },
      { label: 'Scope', value: 'Product · Growth enablement' }
    ]
  }
];

function Projects() {
  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <p className="project-eyebrow tracking-[0.4em] text-xs text-white/60">Projects & Case Studies</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Product experiences crafted with care
          </h2>
          <p className="text-white/70 max-w-3xl mx-auto mt-2 text-lg leading-relaxed">
            A curated selection of shipped platforms spanning health tech, commerce, and data-rich enterprise tooling.
            Each experience blends performant engineering with brand-aligned visuals and intuitive flows.
          </p>
        </div>

        <div className="project-gallery">
          {PROJECTS.map((project) => (
            <article
              key={project.id}
              className="project-tile group bg-white/5 border border-white/10 rounded-[32px] shadow-[0_25px_60px_rgba(5,10,35,0.65)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:border-white/30"
            >
              <div className="project-cover relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="project-category">{project.category}</span>
                <span className="project-result">{project.result}</span>
              </div>

              <div className="project-info space-y-5 text-white/80">
                <div className="flex items-center justify-between text-white/60 text-xs tracking-[0.3em] uppercase">
                  <span>Case #{project.id.toString().padStart(2, '0')}</span>
                  <span className="flex items-center gap-1">
                    <span className="inline-block h-1 w-1 rounded-full bg-emerald-400"></span>
                    Active
                  </span>
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                  <p className="leading-relaxed text-base">{project.description}</p>
                </div>
                <div className="project-meta-grid">
                  {project.meta.map((item) => (
                    <div key={`${project.id}-${item.label}`} className="project-meta">
                      <p className="meta-label">{item.label}</p>
                      <p className="meta-value">{item.value}</p>
                    </div>
                  ))}
                </div>
                <span className="project-divider" aria-hidden="true"></span>
                <div className="project-tags">
                  {project.stack.map((item) => (
                    <span
                      key={`${project.id}-${item}`}
                      className="project-chip text-[0.7rem] tracking-wide uppercase border border-white/10 bg-white/5 text-white/80"
                    >
                      {item}
                    </span>
                  ))}
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
