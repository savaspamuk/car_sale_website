import React from "react";
import Slider from "react-slick";
import { Container } from "reactstrap";
import "./HeroSlider.css";

interface Settings {
  fade: boolean;
  speed: number;
  autoplaySpeed: number;
  infinite: boolean;
  autoplay: boolean;
  slidesToShow: number;
  slidesToScroll: number;
  pauseOnHover: boolean;
}

const HeroSlider: React.FC = () => {
  const settings: Settings = {
    fade: true,
    speed: 5000,
    autoplaySpeed: 5000,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };
  return (
    <Slider {...settings} className="hero__slider">
      <div className="slider__item slider__item-1 mt0">
        <Container>
          <div className="slider__content">
            <h4 className="text-light">Choose, Click and Buy!</h4>
            <h1 className="text-light">Buying a car is</h1>
            <h1 className="text-light">now very easy</h1>
          </div>
        </Container>
      </div>

      <div className="slider__item slider__item-2 mt0">
        <Container>
          <div className="slider__content">
            <h4 className="text-light">Choose, Click and Buy!</h4>
            <h1 className="text-light">Buying a car is</h1>
            <h1 className="text-light">now very easy</h1>
          </div>
        </Container>
      </div>

      <div className="slider__item slider__item-3 mt0">
        <Container>
          <div className="slider__content">
            <h4 className="text-light">Choose, Click and Buy!</h4>
            <h1 className="text-light">Buying a car is</h1>
            <h1 className="text-light">now very easy</h1>
          </div>
        </Container>
      </div>
    </Slider>
  );
};

export default HeroSlider;
