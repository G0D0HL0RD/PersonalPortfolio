import React from 'react';

import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Service from './components/services/Service';
import Qualification from './components/qualification/Qualification';
import Hobbies from './components/hobbies/Hobbies';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollUp/ScrollUp';

function App() {
  return (
    <div className="">
      <Header/>
      <main className='main'>
      <Home />
      <About />
      <Skills />
      <Service />
      <Qualification />
      <Hobbies />
      <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </div>
  );
}

export default App;
