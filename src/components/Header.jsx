import React from 'react';
import '../styles/App.css';
import photo from '../assets/me.jpg';

const Header = ({ currentSection, setCurrentSection }) => {
  return (
    <header>
      <img id="head" src={photo} alt="Michael" />
      <h1>Michael Anthony Rodriguez</h1>
      <nav>
        <ul>
          {['About Me', 'Portfolio', 'Contact', 'Resume'].map((section) => (
            <li key={section}>
              <a
                href="#"
                className={currentSection === section ? 'active' : ''}
                onClick={() => setCurrentSection(section)}
              >
                {section}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
