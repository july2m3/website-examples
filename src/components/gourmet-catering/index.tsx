/* eslint-disable import/extensions */
import React from 'react';

import './style.scss';
import Nav from './Nav';
import Header from './Header';
import About from './About';
import Menu from './Menu';
import Contact from './Contact';
import Footer from './Footer';

const GourmetCatering = () => {
  React.useEffect(() => {
    document.title = 'Gourmet Catering';
  }, []);

  return (
    <>
      <Nav />
      <Header />
      <About />
      <Menu />
      <Contact />
      <Footer />
    </>
  );
};

export default GourmetCatering;
