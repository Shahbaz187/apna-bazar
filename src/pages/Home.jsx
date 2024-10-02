import React from 'react'
import MyNavbar from '../components/frontend/Navbar';
import HeroSection from '../components/frontend/HeroSection';
import Products from '../components/frontend/Products';
import Footer from '../components/frontend/Footer';

const Home = () => {
  return (
    <>
      <MyNavbar />
      <HeroSection />
      <Products />
      <Footer />
    </>
  );
}

export default Home