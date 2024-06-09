import React from 'react';
import '../styles/App.css';
import modern from '../assets/modern.png';
import power from '../assets/power.png';
import noted from '../assets/noted.png';
import password from '../assets/password.png';
import gamble from '../assets/gamble.png';
import portfolio from '../assets/portfolio.png';

const Portfolio = () => {
  const projects = [
    { title: 'Mock Up Website for Modern Times', image: modern, liveLink: 'https://mikorod622.github.io/Modern-Times-Website/', repoLink: 'https://github.com/mikorod622/Modern-Times-Website' },
    { title: 'Php Website for PowerBanks', image: power, liveLink: 'https://php-powerbank-logger-e5ae09fb3a1c.herokuapp.com/powerbankhome.php', repoLink: 'https://github.com/mikorod622/IT202-mr94-Project' },
    { title: 'An express application used for taking notes', image: noted, liveLink: 'https://noted-module-11-challenge-cb0581e2d580.herokuapp.com/', repoLink: 'https://github.com/mikorod622/Noted' },
    { title: 'A joke blog-style website', image: gamble, liveLink: 'https://gambling-winnings-91f5aa974138.herokuapp.com/', repoLink: '#' },
    { title: 'My original portfolio website', image: portfolio, liveLink: 'https://mikorod622.github.io/My_Portfolio_Homework_Challenge_Website/', repoLink: 'https://github.com/mikorod622/My_Portfolio_Homework_Challenge_Website' },
    { title: 'A website that generates strong passwords', image: password, liveLink: 'https://mikorod622.github.io/Password_Generator_Challenge/', repoLink: 'https://github.com/mikorod622/Password_Generator_Challenge' },
    // Add more projects here
  ];

  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div>
        {projects.map((project, index) => (
          <div id="project" key={index}>
            <img id="project-img" src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <a id="press" href={project.liveLink}>Live Application</a>
            <a id="press" href={project.repoLink}>GitHub Repository</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
