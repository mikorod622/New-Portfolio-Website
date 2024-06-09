import React from 'react';
import '../styles/App.css';
import photo from '../assets/me.jpg';

const AboutMe = () => {
  return (
    <section>
      <h2>About Me</h2>
      <img id="myPhoto" src={photo} alt="Michael" />
      <p id="textbox">I am currently enrolled as a college student at the New Jersey Institute of Technology. Alongside my academic pursuits, I actively engage in a diverse range of hobbies that encompass game modification, electronics tinkering, craft projects, digital art, and music. In terms of professional experience, I have previously worked as a busboy and currently hold a position as a physical therapist assistant.</p>
    </section>
  );
};

export default AboutMe;
