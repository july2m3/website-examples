import React from 'react';

import headerBG from './images/header-bg.jpg';

function Header() {
  return (
    <header className="header">
      <img className="header__image" src={headerBG} alt="Burget background" />
      <p className="header__text">Gourmet Catering</p>
    </header>
  );
}

export default Header;
