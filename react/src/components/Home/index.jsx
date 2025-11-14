import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Advantages from './Advantages';
import HowItWorks from './HowItWorks';
import Demo from './Demo';
import Pricing from './Pricing';
import CTA from './CTA';
import Footer from './Footer';
import './home.css';

export default function Home() {
  return (
    <main className="ea-page" data-easytag="id1-src/components/Home/index.jsx">
      <Header />
      <Hero />
      <Advantages />
      <HowItWorks />
      <Demo />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
