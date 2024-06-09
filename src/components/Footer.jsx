import React from 'react';
import '../styles/App.css';
import photo from '../assets/git.png';
import photo2 from '../assets/linkedin.png';

const Footer = () => {
  return (
    <footer>
        <img id="git" src={photo} alt="github logo" />
        <a href="https://github.com/mikorod622" target="_blank" rel="noopener noreferrer">GitHub</a>
        <img id="git" src={photo2} alt="Linkedin logo" />
        <a href="https://www.linkedin.com/in/michael-a-rod/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    </footer>
  );
};

export default Footer;
