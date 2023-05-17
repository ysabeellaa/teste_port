import React from 'react';
import './Main.css';
import Navbar from '../components/Navbar/Navbar';
import Landing from '../components/Landing/Landing';
import About from '../components/About/About';
import Skills from '../components/Skills/Skills';
import Projects from '../components/Projects/Projects';
import Education from '../components/Education/Education';
import Experience from '../components/Experience/Experience';
import Contacts from '../components/Contacts/Contacts';
import Footer from '../components/Footer/Footer';

export default function Main() {
  return (
    <div>
      <Navbar />
      <Landing />
      <Skills />
      <About />
      <Education />
      <Projects />
      <Experience />
      <Contacts />
      <Footer />
    </div>

  );
}
