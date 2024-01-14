import React from "react";
import Slider from "react-slick";
import { Container } from "reactstrap";
import "./HeroSlider.css";

const HeroSlider = () => {
  const settings = {
    fade: true,
    speed: 2000,
    autoplaySpeed: 3000,
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
            <h4 className="text-light mb-3">Prices starting from $21.000</h4>
            <h1 className="text-light mb-4">Reserve Now and Buy A Car</h1>
          </div>
        </Container>
      </div>

      <div className="slider__item slider__item-2 mt0">
        <Container>
          <div className="slider__content">
            <h4 className="text-light mb-3">Prices starting from $21.000</h4>
            <h1 className="text-light mb-4">Reserve Now and Buy A Car</h1>
          </div>
        </Container>
      </div>

      <div className="slider__item slider__item-3 mt0">
        <Container>
          <div className="slider__content">
            <h4 className="text-light mb-3">Prices starting from $21.000</h4>
            <h1 className="text-light mb-4">Reserve Now and Buy A Car</h1>
          </div>
        </Container>
      </div>
    </Slider>
  );
};

export default HeroSlider;
