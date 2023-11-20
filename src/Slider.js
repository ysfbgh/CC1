// Slider.js
import React, { useState } from 'react';
import './Slider.css'; // Corrected import for the CSS file
import BtnSlider from './BtnSlider';
import dataSlider from './dataSlider';

export default function Slider() {
  const [index, setIndex] = useState(1);

  const nextSlide = () => {
    if (index !== dataSlider.length) {
      setIndex(index + 1);
    } else if (index === dataSlider.length) {
      setIndex(1);
    }
  };

  const prevSlide = () => {
    if (index >= 1) {
      setIndex(index - 1);
    }
    if (index === 1) {
      setIndex(5);
    }
  };

  return (
    <div className="container-slider">
      {dataSlider.map((obj) => (
        <div key={obj.id} className="slide">
          <h2>Opium Birds 2027 ...</h2>
          <h1>{index}</h1>
          <img src={process.env.PUBLIC_URL + `/Imgs/img${index}.jpg`} alt="img" />
        </div>
      ))}
      <BtnSlider moveSlide={nextSlide} direction="next" />
      <BtnSlider moveSlide={prevSlide} direction="prev" />
    </div>
  );
}
