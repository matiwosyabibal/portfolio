import React from 'react';

function Skills() {
  const skillsRow1 = [
    {
      name: 'React.js',
      logo: '⚛️',
      color: 'from-cyan-500 to-blue-600',
      cardBg: 'bg-gradient-to-br from-cyan-900/70 via-slate-900/60 to-blue-900/70'
    },
    {
      name: 'JavaScript',
      logo: '🟨',
      color: 'from-yellow-400 to-amber-500',
      cardBg: 'bg-gradient-to-br from-amber-900/70 via-slate-900/60 to-yellow-900/70'
    },
    {
      name: 'Node.js',
      logo: '🟢',
      color: 'from-green-500 to-emerald-500',
      cardBg: 'bg-gradient-to-br from-emerald-900/70 via-slate-900/60 to-green-900/70'
    },
    {
      name: 'Python',
      logo: '🐍',
      color: 'from-blue-500 to-indigo-500',
      cardBg: 'bg-gradient-to-br from-indigo-900/70 via-slate-900/60 to-blue-900/70'
    },
    {
      name: 'Laravel',
      logo: '🔴',
      color: 'from-red-500 to-pink-500',
      cardBg: 'bg-gradient-to-br from-rose-900/70 via-fuchsia-900/60 to-slate-900/60'
    },
    {
      name: 'MySQL',
      logo: '🐬',
      color: 'from-blue-400 to-cyan-400',
      cardBg: 'bg-gradient-to-br from-sky-900/70 via-slate-900/60 to-cyan-900/70'
    },
    {
      name: 'Tailwind CSS',
      logo: '🌀',
      color: 'from-teal-400 to-cyan-400',
      cardBg: 'bg-gradient-to-br from-teal-900/70 via-slate-900/60 to-cyan-900/70'
    },
    {
      name: 'Firebase',
      logo: '🔥',
      color: 'from-orange-400 to-yellow-400',
      cardBg: 'bg-gradient-to-br from-orange-900/70 via-slate-900/60 to-amber-900/70'
    }
  ];

  const skillsRow2 = [
    {
      name: 'TypeScript',
      logo: '📘',
      color: 'from-blue-500 to-blue-700',
      cardBg: 'bg-gradient-to-br from-blue-900/70 via-slate-900/60 to-sky-900/70'
    },
    {
      name: 'Next.js',
      logo: '▲',
      color: 'from-gray-700 to-gray-900',
      cardBg: 'bg-gradient-to-br from-zinc-900/70 via-slate-900/60 to-black/80'
    },
    {
      name: 'MongoDB',
      logo: '🍃',
      color: 'from-green-500 to-green-700',
      cardBg: 'bg-gradient-to-br from-emerald-900/70 via-slate-900/60 to-green-900/70'
    },
    {
      name: 'Express.js',
      logo: '🚂',
      color: 'from-gray-500 to-gray-700',
      cardBg: 'bg-gradient-to-br from-slate-800/70 via-slate-900/60 to-zinc-900/70'
    },
    {
      name: 'PostgreSQL',
      logo: '🐘',
      color: 'from-blue-500 to-blue-700',
      cardBg: 'bg-gradient-to-br from-sky-900/70 via-slate-900/60 to-blue-900/70'
    },
    {
      name: 'Git',
      logo: '📝',
      color: 'from-orange-500 to-red-500',
      cardBg: 'bg-gradient-to-br from-orange-900/70 via-slate-900/60 to-rose-900/70'
    },
    {
      name: 'REST API',
      logo: '🔗',
      color: 'from-green-400 to-teal-400',
      cardBg: 'bg-gradient-to-br from-teal-900/70 via-slate-900/60 to-emerald-900/70'
    },
    {
      name: 'HTML5',
      logo: '🌐',
      color: 'from-orange-500 to-red-400',
      cardBg: 'bg-gradient-to-br from-orange-900/70 via-slate-900/60 to-red-900/70'
    }
  ];

  const MarqueeRow = ({ skills, reverse = false, speed = '40s' }) => (
    <div className="marquee-container mb-6 relative">
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-r from-slate-900/10 via-slate-800/5 to-slate-900/10" />
      <div
        className={`marquee-track flex space-x-6 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'} relative`}
        style={{ animationDuration: speed }}
      >
        {[...skills, ...skills].map((skill, index) => (
          <div
            key={`${skill.name}-${index}`}
            className={`skill-item flex-shrink-0 w-48 rounded-xl p-6 flex flex-col items-center justify-center border border-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl group ${skill.cardBg}`}
          >
            <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br ${skill.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
              <span className="text-2xl filter brightness-100 contrast-100">{skill.logo}</span>
            </div>
            <h3 className="text-lg font-semibold text-white text-center group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
              {skill.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );

  const StatsCard = ({ number, text, color }) => (
    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:border-white/20">
      <div className={`text-3xl font-bold ${color} mb-2`}>{number}</div>
      <div className="text-gray-300 font-medium">{text}</div>
    </div>
  );

  return (
    <section id="skills" className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 text-white flex items-center justify-center p-6">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm px-6 py-3 rounded-full border border-white/10 mb-6">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <span className="text-cyan-300 text-sm font-semibold tracking-wider">TECHNICAL EXPERTISE</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">Technologies</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Mastery of essential technologies for building modern, scalable web applications
          </p>
        </div>

        {/* Skills Marquee Rows */}
        <MarqueeRow skills={skillsRow1} speed="45s" />
        <MarqueeRow skills={skillsRow2} speed="50s" reverse={true} />

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <StatsCard number="16+" text="Technologies" color="text-blue-400" />
          <StatsCard number="5+" text="Years Experience" color="text-teal-400" />
          <StatsCard number="50+" text="Projects" color="text-amber-400" />
          <StatsCard number="100%" text="Quality Focus" color="text-purple-400" />
        </div>
      </div>

      <style jsx>{`
        .marquee-container {
          overflow: hidden;
          position: relative;
          mask: linear-gradient(
            90deg,
            transparent,
            white 10%,
            white 90%,
            transparent
          );
          -webkit-mask: linear-gradient(
            90deg,
            transparent,
            white 10%,
            white 90%,
            transparent
          );
        }

        .marquee-track {
          display: flex;
          width: max-content;
        }

        .animate-marquee {
          animation: marquee linear infinite;
        }

        .animate-marquee-reverse {
          animation: marquee-reverse linear infinite;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes marquee-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .skill-item {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          transition: all 0.3s ease;
          min-width: 180px;
        }

        .skill-item:hover {
          transform: translateY(-5px) scale(1.05);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          border-color: rgba(255, 255, 255, 0.2);
          background: rgba(255, 255, 255, 0.05);
        }
      `}</style>
    </section>
  );
}

export default Skills;