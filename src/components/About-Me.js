import React from 'react';
import coderAtDesk from "../assets/img/coder-at-desk.jpeg";
import { motion } from "motion/react"


export const AboutMe = () => {
  return (
    <section
      animate={{ opacity: 1 }}
      className="aboutme"
      id="aboutme"
      style={{
        minHeight: '100vh',
        backgroundImage: `url(${coderAtDesk})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <motion.div
      drag
      dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}

      className="aboutme-content"
        style={{
          background: 'rgba(255, 255, 255, 0.15)',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
          backdropFilter: 'blur(10px)',
          borderRadius: '16px',
          border: '1px solid rgba(255, 255, 255, 0.18)',
          padding: '2rem',
          maxWidth: '700px',
          width: '90%',
          color: '#111',
          textAlign: 'center',
          margin: '20px',
        }}
      >
        <h2>About Me</h2>
        <p>
          Hello! I'm Harsh Kamble, a passionate developer with experience in building web applications and Apps using modern technologies like Flutter, React, JavaScript, Node.js, and more.
          <br></br>I love creating intuitive and dynamic user experiences, and I'm always eager to learn new skills and technologies.<br/>
          Worked on various projects, Developed e-commerce sites and personal portfolios. Along with that, I have also worked on mobile applications using Flutter.
          <br></br>Currently, I am working as a freelancer, where I develop Websites and Apps for clients, ensuring they meet their needs and expectations.
          <br></br>In my free time, I enjoy exploring new technologies, Listening to music, and Workout.
          <br></br>Feel free to connect with me to discuss potential collaborations or just to chat about tech!
          
        </p>
        <h3>Work Experience</h3>
        <ul>
          <li>
            <strong>App & Web Developer</strong> as a freelancer (Present)
            <br />
            Developed responsive user interfaces and collaborated with designers to deliver seamless user experiences.<br />
            
          </li>
          
        </ul>
        <h3>Skills</h3>
        <p>
          JavaScript, React, HTML, CSS, Node.js, Git
        </p>
      </motion.div>
      
    </section>
  );
};

