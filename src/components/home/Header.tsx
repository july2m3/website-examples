import React from 'react';

function Header(props: any) {
  const { title } = props;
  return (
    <header className="home__header">
      <h1>{title}</h1>
    </header>
  );
}

export default Header;
