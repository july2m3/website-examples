import React from 'react';

import menuImage from './images/menu.jpg';

function Menu() {
  return (
    <div className="info">
      <div className="info__text">
        <h1>Our Menu</h1>
        <h3>The best of vegan catering</h3>
        <ul className="info__list">
          <li className="info__list-item">
            <span className="info__menu-item">Bread Basket</span>
            <span className="info__menu-description">
              Assortment of fresh bread
            </span>
          </li>
          <li className="info__list-item">
            <span className="info__menu-item">Almond Granola with Fruits</span>
            <span className="info__menu-description">
              Natural cereal of honey toasted oats, raisins, almonds and dates
            </span>
          </li>
          <li className="info__list-item">
            <span className="info__menu-item">Blueberry Pancakes</span>
            <span className="info__menu-description">
              With syrup, butter and lots of berries
            </span>
          </li>
          <li className="info__list-item">
            <span className="info__menu-item">Fruit Basket</span>
            <span className="info__menu-description">
              Assortment of in seasoned fruit
            </span>
          </li>
        </ul>
      </div>
      <img className="info__image" src={menuImage} alt="about" />
    </div>
  );
}

export default Menu;
