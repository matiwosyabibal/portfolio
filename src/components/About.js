import React from 'react';

function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-white mb-8 text-center">About Me</h2>
        <div className="about-card rounded-2xl p-8">
          <p className="text-white/90 leading-relaxed text-lg mb-8">
            I am a dedicated 5th-year Software Engineering student with a strong foundation in
            full-stack development, algorithms, and software architecture. My journey in technology
            has been driven by curiosity and a passion for solving complex problems through elegant
            code solutions. I specialize in modern web technologies and am constantly exploring
            emerging trends in AI, cloud computing, and mobile development.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="stat-box">
              <div className="text-3xl font-bold text-purple-400 mb-2">5+</div>
              <div className="text-white/80 font-medium">Years of Study</div>
            </div>
            <div className="stat-box">
              <div className="text-3xl font-bold text-purple-400 mb-2">20+</div>
              <div className="text-white/80 font-medium">Projects Completed</div>
            </div>
            <div className="stat-box">
              <div className="text-3xl font-bold text-purple-400 mb-2">10+</div>
              <div className="text-white/80 font-medium">Technologies Mastered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
