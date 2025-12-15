import React from 'react';

function About() {
  return (
    <section id="about" className="py-16 md:py-20 px-4">
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 md:mb-8 text-center">
          About Me
        </h2>

        {/* Card */}
        <div className="about-card rounded-2xl p-6 md:p-8">
          
          {/* Description */}
          <p className="text-white/90 leading-relaxed text-base md:text-lg mb-8">
            I am a dedicated 5th-year Software Engineering student with a strong foundation in
            full-stack development, algorithms, and software architecture. My journey in technology
            has been driven by curiosity and a passion for solving complex problems through elegant
            code solutions. I specialize in modern web technologies and am constantly exploring
            emerging trends in AI, cloud computing, and mobile development.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6 text-center">
            
            <div className="stat-box p-5 rounded-xl">
              <div className="text-2xl md:text-3xl font-bold text-purple-400 mb-1">
                5+
              </div>
              <div className="text-white/80 font-medium text-sm md:text-base">
                Years of Study
              </div>
            </div>

            <div className="stat-box p-5 rounded-xl">
              <div className="text-2xl md:text-3xl font-bold text-purple-400 mb-1">
                20+
              </div>
              <div className="text-white/80 font-medium text-sm md:text-base">
                Projects Completed
              </div>
            </div>

            <div className="stat-box p-5 rounded-xl">
              <div className="text-2xl md:text-3xl font-bold text-purple-400 mb-1">
                10+
              </div>
              <div className="text-white/80 font-medium text-sm md:text-base">
                Technologies Mastered
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
