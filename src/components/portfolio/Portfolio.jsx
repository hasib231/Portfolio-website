import React from 'react';
import './Portfolio.css';
import sportsClub from '../../assests/sports-club-9418c.web.app_.png';
import moviesToy from '../../assests/movies-toy.web.app_ (1).png';
import chefHunter from '../../assests/chef-recipe-hunter-4d487.web.app_.png';
import { FaGithub, FaRegPaperPlane } from "react-icons/fa";
// import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    image: sportsClub,
    title: "Sports Club",
    live_link: "https://sports-club-9418c.web.app/",
    client_site: "https://github.com/hasib231/summer-camp-school-client-side",
    server_site: "https://github.com/hasib231/summer-camp-school-server-side",
    description:
      "Sports Club is a full-stack website for providing various sports courses.This website has a different dashboard for different roles like admin, instructor and student. Instructors can add new courses. Admin verifies courses and approves or denied.After publishing new courses students can enroll in courses.",
  },
  {
    id: 2,
    image: moviesToy,
    title: "Movies toy",
    live_link: "https://movies-toy.web.app/",
    client_site: "https://github.com/hasib231/Toy-Marketplace-Client-Side",
    server_site: "https://github.com/hasib231/toy-marketplace-server-side",
    description:
      "Movies Toy is a full-stack website for selling and buying movie-related toys. Here users can find various movie-related toys by categories wise. Sellers can add new products. They can also edit and delete their products. Sellers see their previously added products list-wise.",
  },
  {
    id: 3,
    image: chefHunter,
    title: "Movies toy",
    live_link: "https://chef-recipe-hunter-4d487.web.app/",
    client_site: "https://github.com/hasib231/chef-recipe-hunting-client-side",
    server_site: "https://github.com/hasib231/chef-recipe-hunting-server-side",
    description:
      "Chef Hunter Website is a platform designed to provide food enthusiasts with access to a vast collection of delicious and unique recipes, as well as the ability to discover and connect with talented chefs. Users can search for chefs by location, specialty, and cuisine. Users can view chef profiles, their work experience, and the dishes they specialize in. This website has a vast collection of recipes from various cuisines and categories.",
  },
];

const Portfolio = () => {
  return (
    <section id='portfolio'>
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

        <div className="container portfolio__container">
           {projects.map((project) => {
            return (
              <article key={project.id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img
                    className="image"
                    src={project.image}
                    alt={project.title}
                  />
                </div>
                <h3>{project.title}</h3>
                <FaRegPaperPlane className="icon"></FaRegPaperPlane>
                <a href={project.live_link} target="_blank">
                  Live Link
                </a>
                <FaGithub className="icon"></FaGithub>
                <a href={project.client_site} target="_blank">
                  Client side
                </a>
                <FaGithub className="icon"></FaGithub>
                <a href={project.server_site} target="_blank">
                  Server side
                </a>
                <br></br>
                <small className="portfolio__desc">{project.description}</small>
              </article>
            );
            }) 
            }
        </div>
    </section>
  );
}

export default Portfolio;