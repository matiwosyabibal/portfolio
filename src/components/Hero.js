import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);
  const [roleText, setRoleText] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const roles = ['Software Engineer', 'Full Stack Developer'];

  const colors = [
    '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEEAD',
    '#F4A261', '#E9C46A', '#2A9D8F', '#E76F51'
  ];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      const i = loopNum % roles.length;
      const currentRole = roles[i];

      if (isDeleting) {
        setRoleText(prev => prev.slice(0, -1));
        setCharIndex(prev => prev - 1);
        setTypingSpeed(50);
      } else {
        setRoleText(currentRole.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
        setTypingSpeed(100);
      }

      if (!isDeleting && charIndex === currentRole.length) {
        setTypingSpeed(1800);
        setIsDeleting(true);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, loopNum, typingSpeed]);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1555066931-4365d14bab8c')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: isMobile ? 'scroll' : 'fixed',
        scrollMarginTop: '96px'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 z-0"></div>

      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between relative z-10">
        
        {/* Text */}
        <div className="text-center md:text-left max-w-2xl">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6">
            Matiwos Yabibal
          </h1>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4">
            I am a
          </h2>

          {/* Typewriter */}
          <div className="min-h-[90px] sm:min-h-[120px] mb-8">
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold break-words">
              {roleText.split('').map((char, index) => (
                <span
                  key={index}
                  style={{
                    color: colors[index % colors.length],
                    textShadow: '0 0 10px rgba(0,0,0,0.5)'
                  }}
                >
                  {char}
                </span>
              ))}
              <span className="animate-pulse text-white">|</span>
            </h2>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('projects');
                if (element) {
                  const yOffset = -80; // Adjust for fixed header
                  const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                  window.scrollTo({ top: y, behavior: 'smooth' });
                }
              }}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-500 hover:scale-105 transition-all duration-300 text-white rounded-full text-lg font-medium hover:shadow-lg hover:shadow-purple-500/30"
            >
              View Projects
            </a>

            <button className="px-8 py-4 border-2 border-white/40 hover:border-white/70 text-white rounded-full text-lg">
              Download CV
            </button>
          </div>
        </div>

        {/* Decorative blobs (desktop only) */}
        <div className="hidden lg:block w-1/3 relative">
          <div className="absolute -right-20 -top-20 w-96 h-96 bg-purple-500/20 blur-3xl rounded-full"></div>
          <div className="absolute -right-10 -bottom-20 w-96 h-96 bg-blue-500/20 blur-3xl rounded-full"></div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-7 h-12 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-2 h-2 bg-white rounded-full animate-bounce mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
