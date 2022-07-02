import { useState } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import "./ImageSlider.scss"

const ImageSlider = ({ slides }) => {
  const mockSlides = [
    {
      image:
          "/images/marketingDigital.png"
    },
    {
      image:
          "/images/softwareDevelopment.png"
    },
    {
      image:
          "/images/automation.png"
    },
    {
      image:
          "/images/dataProtection.png"
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
          <p className="slider-title">TOP</p>
          {mockSlides?.map((slide, index) => {
            return (
                <div
                    className={index === current ? 'slide active' : 'slide'}
                    key={index}
                >
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