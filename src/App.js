import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Treatment from './components/Treatment';
import ProcessFlow from './components/ProcessFlow';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <AboutUs />
      <Treatment />
      <ProcessFlow />
      <Footer />
    </div>
  );
}

export default App;
