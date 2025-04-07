import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import ImageGallery from './components/ImageGallery';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <AboutUs />
      <ImageGallery />
    </div>
  );
}

export default App;
