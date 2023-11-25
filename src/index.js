import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'

import Navbar from './components/navbar';
import HeroSection from './components/heroSection';
import PrevStory from './components/OurStory';
import Services from './components/Services';
import Offer from './components/Offers';
import Reservation from './components/Reservation';
import Recommendations from './components/Recommendations';
import PopularMenu from './components/PopularMenu';
import OurBlog from './components/OurBlog';
import Subscribe from './components/Subscribe';
import Footer from './components/footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <HeroSection />
    <PrevStory />
    <Services />
    <Offer />
    <Reservation />
    <Recommendations />
    <PopularMenu />
    <OurBlog />
    <Subscribe />
    <Footer />
  </React.StrictMode>
);