import React from 'react';
import { FaEye, FaTooth, FaSmile, FaUserMd, FaTools, FaShoppingCart } from 'react-icons/fa';
import { FiCoffee, FiBox, FiTrendingUp } from 'react-icons/fi';

const clinicStats = [
  { value: '200+', label: 'Happy Patients' },
  { value: '50+', label: 'Treatments' },
  { value: '24/7', label: 'Support' }
];

const clinicServices = [
  { label: 'Smile Design', icon: FaSmile },
  { label: 'Oral Surgery', icon: FaUserMd },
  { label: 'Preventive Care', icon: FaTooth }
];

const featuredProjects = [
  {
    title: 'Golden Bridge Contracting',
    summary: 'Real-time monitoring for a multi-site infrastructure rollout.'
  },
  {
    title: 'Coastal Habitat',
    summary: 'Community-focused living spaces prioritizing natural light.'
  }
];

const latestNews = [
  {
    heading: 'Site Automation Wins',
    detail: 'Workflow automation cut delivery time by 34% this quarter.'
  },
  {
    heading: 'New Materials Lab',
    detail: 'Research hub dedicated to low-impact composites is live.'
  },
  {
    heading: 'Partner Spotlight',
    detail: 'Easton Architects enlisted us for a modular retrofit.'
  }
];

const shopCategories = [
  { label: 'Ceramics', icon: FaShoppingCart },
  { label: 'Tea Sets', icon: FiCoffee },
  { label: 'Gift Boxes', icon: FiBox },
  { label: 'Decor', icon: FiTrendingUp }
];

const galleryTiles = [
  { color: 'from-rose-200/80 to-rose-400/80', title: 'Hand-thrown cups' },
  { color: 'from-sky-200/80 to-sky-400/80', title: 'Outdoor showcase' },
  { color: 'from-amber-200/80 to-amber-400/80', title: 'Brew accessories' }
];

const serviceHighlights = [
  { title: 'Consultation', body: 'Multi-channel intake forms for faster onboarding.' },
  { title: 'Planning', body: 'Weekly dashboards and document vault.' },
  { title: 'Delivery', body: 'Visual progress boards for field crews.' }
];

const Project = () => (
  <div className="min-h-screen bg-slate-950 py-12 px-4 sm:px-8">
    <div className="max-w-6xl mx-auto space-y-10">
      <header className="text-center text-white space-y-4">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Case library</p>
        <h1 className="text-4xl font-semibold">Recent Experience Deck</h1>
        <p className="text-lg text-slate-300">
          Three specialized experiences—from healthcare to infrastructure to product retail—crafted with their own
          distinctive systems.
        </p>
      </header>

      <section className="grid gap-8 lg:grid-cols-3">
        {/* Dental Panel */}
        <article className="relative overflow-hidden rounded-[32px] bg-gradient-to-b from-cyan-400 via-sky-500 to-blue-700 text-white shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18),_transparent_50%)]" aria-hidden />
          <div className="relative px-10 py-12 flex flex-col items-center text-center gap-8">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.5em] text-white/70">Edna Dental Clinic</p>
              <h2 className="text-3xl font-semibold leading-tight">A refreshed website for services, gallery and care contact</h2>
              <p className="text-lg text-white/85 max-w-sm">
                Crafted to highlight treatments, patient journeys and a confident brand story across every touch point.
              </p>
            </div>

            <dl className="grid grid-cols-3 gap-3 w-full">
              {clinicStats.map((stat) => (
                <div key={stat.label} className="rounded-2xl bg-white/15 px-3 py-4">
                  <dt className="text-xs uppercase tracking-[0.4em] text-white/70">{stat.label}</dt>
                  <dd className="text-2xl font-bold">{stat.value}</dd>
                </div>
              ))}
            </dl>

            <div className="flex flex-wrap justify-center gap-3">
              {clinicServices.map(({ label, icon: Icon }) => (
                <span key={label} className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm">
                  <Icon />
                  {label}
                </span>
              ))}
            </div>

            <button className="mt-4 h-16 w-16 rounded-full bg-white/20 border border-white/40 flex items-center justify-center text-2xl hover:bg-white/30 transition" aria-label="Open case study">
              <FaEye />
            </button>
          </div>
        </article>

        {/* Construction Panel */}
        <article className="rounded-[32px] bg-white shadow-xl overflow-hidden flex flex-col">
          <div className="h-40 bg-gradient-to-r from-amber-200 via-yellow-50 to-stone-200" />
          <div className="p-8 space-y-6 flex-1 flex flex-col">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-amber-600">Our Projects</p>
              <h2 className="text-2xl font-semibold text-slate-900">Construction & Infrastructure</h2>
              <p className="text-slate-600 mt-2">
                A gallery-like layout for works in progress, reporting hubs and press-ready newsrooms.
              </p>
            </div>

            <div className="grid gap-4">
              {featuredProjects.map((proj) => (
                <div key={proj.title} className="rounded-2xl border border-amber-100 p-4 flex items-start gap-3">
                  <FaTools className="text-amber-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-900">{proj.title}</h3>
                    <p className="text-sm text-slate-600">{proj.summary}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-slate-100 pt-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Latest News</h3>
              <div className="space-y-4">
                {latestNews.map((news) => (
                  <div key={news.heading} className="flex gap-3">
                    <div className="w-20 h-14 rounded-lg bg-amber-50" />
                    <div>
                      <p className="text-sm font-semibold text-slate-900">{news.heading}</p>
                      <p className="text-sm text-slate-600">{news.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-auto border-t border-slate-100 pt-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Our Services</h3>
              <div className="grid gap-3">
                {serviceHighlights.map((service) => (
                  <div key={service.title} className="flex items-start gap-3 rounded-2xl bg-slate-50 p-3">
                    <span className="h-8 w-8 rounded-xl bg-amber-200/80 flex items-center justify-center text-sm font-semibold text-amber-700">
                      •
                    </span>
                    <div>
                      <p className="font-semibold text-slate-900 text-sm">{service.title}</p>
                      <p className="text-sm text-slate-600">{service.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </article>

        {/* Retail Panel */}
        <article className="rounded-[32px] bg-gradient-to-b from-white via-sky-50 to-white shadow-2xl flex flex-col">
          <div className="relative overflow-hidden rounded-[32px] rounded-b-none bg-gradient-to-r from-sky-300 via-cyan-300 to-blue-400 p-8 text-white">
            <p className="text-xs uppercase tracking-[0.4em] text-white/80">Curated goods</p>
            <h2 className="text-3xl font-semibold mb-2">Choose categories</h2>
            <p className="text-white/80 max-w-sm">
              Leave some space around your specialty ceramics line while keeping editorial photography front and center.
            </p>
            <button className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/90 px-5 py-2 text-sm font-semibold text-slate-900">
              <FaShoppingCart /> Buy now
            </button>
            <div className="absolute -right-10 top-4 h-40 w-40 rounded-full border border-white/30" aria-hidden />
          </div>

          <div className="p-8 space-y-6 flex-1 flex flex-col">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-slate-500">Categories</p>
              <div className="mt-3 grid grid-cols-2 gap-4">
                {shopCategories.map(({ label, icon: Icon }) => (
                  <div key={label} className="rounded-2xl border border-slate-100 p-4 flex items-center gap-3 bg-white/70">
                    <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-white">
                      <Icon />
                    </span>
                    <span className="text-sm font-semibold text-slate-800">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Showcase</p>
              <div className="grid gap-4">
                {galleryTiles.map((tile) => (
                  <div
                    key={tile.title}
                    className={`rounded-[30px] bg-gradient-to-br ${tile.color} px-5 py-6 text-slate-900 shadow-inner`}
                  >
                    <p className="text-xs uppercase tracking-[0.4em] text-slate-700/70">Feature</p>
                    <p className="text-xl font-semibold">{tile.title}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-auto">
              <div className="h-32 rounded-[28px] bg-cover bg-center" style={{ backgroundImage: 'linear-gradient(120deg, rgba(15,23,42,0.8), rgba(14,165,233,0.4))' }} />
            </div>
          </div>
        </article>
      </section>
    </div>
  </div>
);

export default Project;
