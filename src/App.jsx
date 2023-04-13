import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MyNavbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Learning from './components/Learning';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css';


function App() {
  return (
    <>
    <MyNavbar />
    <Hero />
    <div className='container'>
      <AboutMe />
      <Learning/>
      <Projects />
      <Contact />
    </div>
    <Footer />
    </>
  );
}

export default App;
