import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../Components/Nav.jsx';
import Footer from '../Components/Footer.jsx';

const Layout = () => {
  return (
    <>
      <Nav />
      <main className="App">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
