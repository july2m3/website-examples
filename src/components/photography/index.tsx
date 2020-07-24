/* eslint-disable quotes */
import React from "react";

// import headerBG from './images/header-bg.jpg';
import "./style.scss";

import aboutMeImage from "./images/about.jpg";
import portfolioImage from "./images/portfolio.jpg";

const Photography = () => {
  return (
    <div id="home">
      <header className="photography-header">
        <nav className="photography-header__navigation">
          <ul className="photography-header__list">
            <li className="photography-header__list-item">Home</li>
            <li className="photography-header__list-item">
              <i className="fa fa-user icon" aria-hidden="true" />
              About
            </li>
            <li className="photography-header__list-item">
              <i className="fas fa-grip-horizontal icon" />
              Portfolio
            </li>
            <li className="photography-header__list-item">
              <i className="far fa-envelope icon" />
              Contact
            </li>
          </ul>
          <p className="photography-header__logo">Lonesome Design</p>
        </nav>
      </header>
      <main className="about-me">
        <h1 className="about-me__title">About Me</h1>
        <p className="about-me__subheading">I love art</p>
        <p className="about-me__info">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
          magni consequuntur impedit inventore iste fugit possimus hic ut
          voluptatibus quod, labore repellat? Animi necessitatibus cupiditate
          fuga nobis, possimus ea unde modi molestiae architecto numquam non
          ipsum. Ad minus natus suscipit adipisci aut itaque qui cupiditate
          tenetur nam dolorum possimus, laborum quo voluptas in incidunt
          expedita sapiente ratione officiis eum et veritatis est. Distinctio
          sit nihil vitae ex vel magnam quis sunt, aliquid, iure ab sequi id
          voluptates, corrupti maiores quibusdam.
        </p>
        <div className="about-me__more-info">
          <div className="image">
            <img src={aboutMeImage} alt="Pic of me" />
            <p>Me dfkda</p>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              magni accusantium libero consequuntur excepturi ipsum optio sequi.
              Architecto, asperiores? Velit facilis omnis esse dolores hic rem.
              Architecto, asperiores? Velit facilis omnis esse dolores hic rem.
              Facilis aperiam voluptatum blanditiis. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Culpa magni accusantium libero
              consequuntur excepturi ipsum optio sequi. Architecto, asperiores?
              Facilis aperiam voluptatum blanditiis. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Culpa magni accusantium libero
              consequuntur excepturi ipsum optio sequi. Architecto, asperiores?
              Velit facilis omnis esse dolores hic rem. Facilis aperiam
              voluptatum blanditiis.
            </p>
          </div>
        </div>
      </main>

      <article className="portfolio">
        <div className="portfolio__stats">
          <ul>
            <li>
              120+
              <span>Projects</span>
            </li>
            <li>
              400+
              <span>Pictures</span>
            </li>
            <li>
              70+
              <span>Clients</span>
            </li>
          </ul>
        </div>
        <div className="image">
          <h1>Portfolio</h1>
        </div>
        <div className="portfolio__showcase">
          <h1>My Work</h1>
          <p>Here are some of my latest art pieces</p>
          <button className="portfolio__button" type="button">
            See more
          </button>
        </div>
      </article>

      <div className="contact">
        <img src="" alt="Contact" className="contact__image" />
        <h1>I work here:</h1>
        <p>I would love some feedback</p>
        <form>
          <input type="text" />
        </form>
      </div>
      <footer className="photography-footer">
        <button type="button">
          <i className="fas fa-arrow-up icon" />
          To the top
        </button>
        <p>icons here: </p>
        <p>copyright me</p>
      </footer>
    </div>
  );
};

export default Photography;
