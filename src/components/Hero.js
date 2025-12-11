import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const roles = ['Software Engineer', 'Full Stack Developer'];
  const [currentRole, setCurrentRole] = useState(roles[0]);
  const [roleText, setRoleText] = useState('');
  const [charIndex, setCharIndex] = useState(0);

  // Color palette for the role text
  const colors = [
    '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEEAD',
    '#D4A373', '#F4A261', '#E9C46A', '#2A9D8F', '#E76F51',
    '#FF9F1C', '#2EC4B6', '#E71D36', '#011627', '#41B3A3',
    '#E8A87C', '#C38D9E', '#85DCB', '#E27D60', '#41B3A3'
  ];

  useEffect(() => {
    // Typewriter effect for the role only
    const timer = setTimeout(() => {
      const i = loopNum % roles.length;
      const currentRole = roles[i];

      if (isDeleting) {
        // Delete one character at a time
        setRoleText(prev => prev.slice(0, -1));
        setCharIndex(prev => prev - 1);
        setTypingSpeed(50);
      } else {
        // Add one character at a time
        setRoleText(currentRole.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
        setTypingSpeed(100);
      }

      if (!isDeleting && charIndex === currentRole.length) {
        // Pause at the end of the word
        setTypingSpeed(2000);
        setIsDeleting(true);
      } else if (isDeleting && charIndex === 0) {
        // Move to the next role
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500);
        setCurrentRole(roles[(i + 1) % roles.length]);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, loopNum, typingSpeed]);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        scrollMarginTop: '96px'
      }}
    >
      {/* Dark overlay with 70% opacity */}
      <div className="absolute inset-0 bg-black/70 z-0"></div>

      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between relative z-10">
        {/* Left side - Text content */}
        <div className="text-center md:text-left max-w-2xl">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            Matiwos Yabibal
          </h1>

          <div className="min-h-32 mb-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-md">
              I am a
            </h2>
            <div className="h-24 md:h-32">
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold">
                {roleText.split('').map((char, index) => (
                  <span
                    key={index}
                    style={{
                      color: colors[index % colors.length],
                      textShadow: '0 0 10px rgba(0, 0, 0, 0.5)'
                    }}
                    className="drop-shadow-lg"
                  >
                    {char}
                  </span>
                ))}
                <span className="animate-pulse text-white">|</span>
              </h2>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a href="#projects" className="px-10 py-4 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-lg inline-block">
              View Projects
            </a>
            <button className="px-10 py-4 bg-transparent border-2 border-white/40 hover:border-white/70 text-white hover:bg-white/10 font-medium rounded-full transition-all duration-300 transform hover:scale-105 text-lg">
              Download CV
            </button>
          </div>
        </div>

        {/* Right side - Optional decorative element */}
        <div className="hidden lg:block w-1/3 relative">
          <div className="absolute -right-20 -top-20 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full mix-blend-overlay filter blur-3xl animate-blob"></div>
          <div className="absolute -right-10 -bottom-20 w-96 h-96 bg-gradient-to-r from-pink-500/20 to-rose-500/20 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute right-20 -bottom-20 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-8 h-14 border-4 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;