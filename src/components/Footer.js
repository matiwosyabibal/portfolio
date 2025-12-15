import React from 'react';

function Footer() {
  return (
    <footer className="py-6 sm:py-8 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-white text-sm sm:text-base mb-3 sm:mb-4">
          © 2024 Matiwos Yabibal. All rights reserved.
        </p>
        <div className="social-links flex flex-wrap justify-center gap-3 sm:gap-4">
          <a 
            href="https://github.com" 
            className="social-link text-xs sm:text-sm text-gray-300 hover:text-white transition-colors duration-200"
          >
            GitHub
          </a>
          <a 
            href="https://linkedin.com" 
            className="social-link text-xs sm:text-sm text-gray-300 hover:text-white transition-colors duration-200"
          >
            LinkedIn
          </a>
          <a 
            href="mailto:matiwos.yabibal@example.com" 
            className="social-link text-xs sm:text-sm text-gray-300 hover:text-white transition-colors duration-200"
          >
            Email
          </a>
          <a 
            href="https://twitter.com" 
            className="social-link text-xs sm:text-sm text-gray-300 hover:text-white transition-colors duration-200"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;