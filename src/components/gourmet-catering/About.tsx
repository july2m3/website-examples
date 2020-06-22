import React from 'react';

import aboutImage from './images/about.jpg';

function About() {
  return (
    <div className="about">
      <img className="about__image" src={aboutImage} alt="about" />
      <div className="about__text">
        <h1>About Catering</h1>
        <h3>Catering since 2021</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quod
          quidem, laborum reprehenderit dolore, dolor animi quam provident magni
          adipisci mollitia enim quaerat, totam sequi omnis dolorum asperiores
          facere recusandae corrupti tempora nemo? Facilis aliquid quas nemo
          vero provident suscipit.
        </p>
      </div>
    </div>
  );
}

export default About;
