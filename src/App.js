import React from 'react';
import './App.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Introduction from './Introduction';
import Experience from './Experience';
import Skills from './Skills';
import Projects from './Projects';
import Header from './Header';
import Links from './Links';

function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // responsive: responsiveSettings,
  };
  return (<div className="App">
    <Header />
    <Links />
    <div className="slider">
      <Slider {...settings}>
        <Introduction />
        <Skills />
        <Experience />
        <Projects />
      </Slider>
    </div>
  </div>
  );
}

export default App;
