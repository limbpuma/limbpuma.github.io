import React from 'react';
import MyNavbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className='container'>
      <MyNavbar />
      <Hero />
      <AboutMe />
      <h1>Hola</h1>

    </div>
  );
}

export default App;
