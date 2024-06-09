import React from 'react';
import '../styles/App.css';
import pdf from '../assets/Resume.pdf';

const Resume = () => {
  return (
    <section>
      <h2>Resume</h2>
      <a id="press" href={pdf} download>Download PDF</a>
      <ul>
        <h3>Proficiencies</h3>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>APIs</li>
        <li>Server Backend</li>
        <li>MySQL</li>
        {/* Add more proficiencies */}
      </ul>
    </section>
  );
};

export default Resume;
