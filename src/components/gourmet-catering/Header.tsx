import React from 'react';

import headerBG from './header-bg.jpg';

function Header() {
  return (
    <header className="gourmet-catering__header">
      <img src={headerBG} alt="Burget background" />
      <p>Gourmet Catering</p>
    </header>
  );
}

export default Header;
