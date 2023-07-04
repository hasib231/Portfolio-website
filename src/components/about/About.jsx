import React from 'react';
import './About.css';
import ME from '../../assests/me.png';
import {BiMedal, BiUser, BiFolder} from 'react-icons/bi';

const About = () => {
  return (
    // about section
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="A headshot of Lucas" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BiMedal className="about__icon" />
              <h5>Experience</h5>
              <small>No experience yet</small>
            </article>
            <article className="about__card">
              <BiUser className="about__icon" />
              <h5>Education</h5>
              <small>
                Cse in <br /> Daffodil International University
              </small>
            </article>
            <article className="about__card">
              <BiFolder className="about__icon" />
              <h5>Hobbies</h5>
              <small>Traveling, Watching movies & Coding</small>
            </article>
          </div>
          <p>
            My name is Hasibul Hasan , I am web developer from Dhaka,
            Bangladesh. I enjoy working on web development projects that
            challenge me and allow me to showcase my creativity and
            problem-solving skills. I have used MERN stack to build web
            applications that are modern, elegant, and functional.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;