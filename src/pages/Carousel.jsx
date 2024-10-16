import React, { useState } from 'react';
import cards from "./constant";
import ComponentSvg1 from './ComponentSvg1';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  return (
    <div className="relative w-full max-w-[53rem] mx-auto bg-white shadow-lg rounded-lg overflow-hidden ">
      <div className="flex transition-transform duration-300" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {cards.map((card, index) => (
          <div key={index} className="min-w-full p-6 flex flex-col items-center">
            <ComponentSvg1/>
            <h2 className="text-2xl font-bold mb-2">{card.title}</h2>
            <p className="text-gray-700 mb-4">{card.description}</p>
          </div>
        ))}
      </div>
      <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
        &#10094;
      </button>
      <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
