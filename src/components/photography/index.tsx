import React from 'react';

// import headerBG from './images/header-bg.jpg';
import './style.scss';

const Photography = () => {
  return (
    <>
      <header className="photography-header">
        <nav className="photography-header__navigation">
          <ul className="photography-header__list">
            <li className="photography-header__list-item">Home</li>
            <li className="photography-header__list-item">About</li>
            <li className="photography-header__list-item">Portfolio</li>
            <li className="photography-header__list-item">Contact</li>
          </ul>
          <p className="photography-header__logo">Lonesome Design</p>
        </nav>
      </header>
      <main className="about-me">
        <h1 className="about-me__title">About Me</h1>
        <h3 className="about-me__subheading">I love art</h3>
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
        <p className="about-me__more-info">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa magni
          accusantium libero consequuntur excepturi ipsum optio sequi.
          Architecto, asperiores? Velit facilis omnis esse dolores hic rem.
          Facilis aperiam voluptatum blanditiis.
        </p>
        <img src="#" alt="Pic of me" />
      </main>

      <article className="portfolio">
        <img src="" className="portfolio-image" alt="portfolio" />
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
    </>
  );
};

export default Photography;
