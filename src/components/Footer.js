import React from 'react';

function Footer() {
  return (
    <footer className="py-8 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-white mb-4">
          © 2024 Matiwos Yabibal. All rights reserved.
        </p>
        <div className="social-links">
          <a href="https://github.com" className="social-link">GitHub</a>
          <a href="https://linkedin.com" className="social-link">LinkedIn</a>
          <a href="mailto:matiwos.yabibal@example.com" className="social-link">Email</a>
          <a href="https://twitter.com" className="social-link">Twitter</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
