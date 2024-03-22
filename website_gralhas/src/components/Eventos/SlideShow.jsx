// SlideShow.js
import React, { useState } from 'react';
import Cartao from './Cartao';
import { Button } from '@nextui-org/react';

const SlideShow = ({ cards }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === cards.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? cards.length - 1 : prevSlide - 1));
  };

  return (
    <div className="slideshow relative">
      <div className="slides flex">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`slide w-full ${index === currentSlide ? 'block' : 'hidden'}`}
          >
            <Cartao 
                title={card.title} 
                idEvento={card.idEvento} 
                data={card.data}
                hora={card.hora}
                imagem={card.imagem}
                descricao={card.descricao}
            />
          </div>
        ))}
      </div>
      <Button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 bg-blue-500 text-white z-10"
      >
        Anterior
      </Button>
      <Button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 bg-blue-500 text-white z-10"
      >
        Próximo
      </Button>
    </div>
  );
};

export default SlideShow;
