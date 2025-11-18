import React from 'react';

function Education() {
  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-white mb-8 text-center">Education</h2>
        <div className="education-card rounded-2xl p-8">
          <div className="flex items-start gap-6">
            <div className="bg-purple-500 p-3 rounded-lg">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-white mb-2">Bachelor of Software Engineering</h3>
              <p className="text-purple-300 mb-2">University Name • Expected 2024</p>
              <p className="text-white/80 mb-4">
                Currently in my 5th year, focusing on advanced software architecture, 
                machine learning, and distributed systems. Maintaining a strong academic 
                record while working on innovative projects and contributing to open-source initiatives.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="skill-tag">Software Architecture</span>
                <span className="skill-tag">Machine Learning</span>
                <span className="skill-tag">Distributed Systems</span>
                <span className="skill-tag">Cloud Computing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
