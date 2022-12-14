import { useState } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import "./ImageSlider.scss"
import {Link} from "react-router-dom";

const ImageSlider = ({ slides }) => {

  const mockSlides = [
    {
      title: "Desayunos a domicilio",
      subtitle: "Disfruta al máximo",
      ctaUrl: "/contact",
      ctaText: "Haz tu pedido",
      image:
          "/images/keagusto1slide.png"
    },
    {
      title: "Desayunos para sorprender",
      subtitle: "Regala placer matutino",
      ctaUrl: "/contact",
      ctaText: "Haz tu pedido",
      image:
          "/images/keagusto2slide.png"
    },
    {
      title: "Desayunos para enamorar",
      subtitle: "Ama el día desde el desayuno",
      ctaUrl: "/contact",
      ctaText: "Haz tu pedido",
      image:
          "/images/keagusto3slide.png"
    },
    {
      title: "Desayúnate el día",
      subtitle: "A por todas",
      ctaUrl: "/contact",
      ctaText: "Haz tu pedido",
      image:
          "/images/keagusto4slide.png"
    }
  ];

  const [current, setCurrent] = useState(0);
  const length = mockSlides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(mockSlides) || mockSlides.length <= 0) {
    return null;
  }

  return (
      <div className="slider-container">
        <div className='slider'>
          <FaArrowAltCircleLeft className='slider-icon left-arrow-icon' onClick={prevSlide} />

          {mockSlides?.map((slide, index) => {
            return (
                <div
                    className={index === current ? 'slide active' : 'slide'}
                    key={index}
                >
                  {index === current && (
                      <div className="slider-cta-container">
                        <div className="slider-text-container">
                          <h1 className="slider-title">{slide.title}</h1>
                          <h2 className="slider-subtitle">{slide.subtitle}</h2>
                        </div>
                        <Link to={slide.ctaUrl} className="slider-cta-button">
                          {slide.ctaText}
                        </Link>
                      </div>
                  )}
                  {index === current && (
                      <img src={slide.image} alt='travel image' className='slider-image' />
                  )}
                </div>
            );
          })}
          <FaArrowAltCircleRight className='slider-icon right-arrow-icon' onClick={nextSlide} />
        </div>
      </div>
  );
};


export default ImageSlider;