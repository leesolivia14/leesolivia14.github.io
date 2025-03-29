import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialLinks = () => {
  return (
    <div className="social-links">
      <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
        <FaGithub size={30} />
      </a>
      <a href="https://www.linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={30} />
      </a>
      <a href="https://www.worldcubeassociation.org/persons/2015LEEO01" target="_blank" rel="noopener noreferrer">
        <img 
          src="/assets/icons/rubik's-cube.png" 
          alt="Cubing" 
          style={{ width: '30px', height: '30px' }} 
        />
      </a>
    </div>
  );
};

export default SocialLinks;
