import React, { useEffect } from 'react';
import './App.css';
import Typist from 'react-typist';
import projects from './data/projects.json';
import { images } from './data/images.js';

const scrollToRef = ref =>
  ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });

const App = () => {
  const projectsRef = React.createRef();
  useEffect(() => {}, []);
  const scrollToProjects = event => scrollToRef(projectsRef);
  return (
    <div className="App">
      <div className="container">
        <section className="welcome-message">
          <Typist cursor={{ show: false }}>
            <div className="hello">
              <span>Hello, </span>
              <Typist.Delay ms={1000} />
              <span>Iam a Full St</span>
              <Typist.Backspace count={9} delay={400} />
              <span>Jacob</span>
              <Typist.Delay ms={1500} />
            </div>
            <div>
              <p className="message-desc">
                I am a Full Stack Javascript Developer..
              </p>
            </div>
            <div id="scroll" onClick={scrollToProjects}>
              <div>
                <span></span>
                View
              </div>
            </div>
          </Typist>
        </section>
        <section ref={projectsRef} className="projects-container">
          <h2>Projects</h2>
          <div
            className="projects"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
          >
            {projects.map((project, index) => (
              <Card key={project.name} {...project} index={index} />
            ))}
          </div>
          <div className="more-tag">
            <div>and more..</div>
          </div>
        </section>
        <section className="contact">
          <h2>Contact</h2>
          <div className="info">
            <p>sandeepmukkadan@gmail.com</p>
            <p>+971553024874</p>
          </div>
        </section>
      </div>
    </div>
  );
};

const Card = ({ title, name, link, owner, image, live, gif, index, code }) => {
  // const onMouseOverImage = (e, gif) => (e.currentTarget.src = gifs[code]);
  // const onMouseOutImage = (e, img) => (e.currentTarget.src = images[code]);
  return (
    <div className="project-card">
      <img
        // onMouseOver={onMouseOverImage}
        // onMouseOut={onMouseOutImage}
        className="project-img"
        src={images[code]}
        alt={name}
      ></img>
      <div className="card-info">
        <p className="card-title">{title}</p>
        <p className="card-description">{name}</p>
        <p className="card-extra-info">{owner}</p>
        <div className="card-link">
          <a href={link || 'javascript:void(0)'} target="_blank">
            {link ? 'See' : ''}
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
